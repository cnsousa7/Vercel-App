import { type ChangeEvent, useMemo, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, ImagePlus, LoaderCircle, MessageCircle, RotateCcw, Send, X } from 'lucide-react';
import { upload } from '@vercel/blob/client';
import {
  trackChatbotAvailabilitySelected,
  trackChatbotIssueSelected,
  trackChatbotLocationSelected,
  trackChatbotOpen,
  trackChatbotPhotoSkipped,
  trackChatbotPhotoUploaded,
  trackChatbotPhotoUploadFailed,
  trackChatbotPhotoUploadStarted,
  trackChatbotPropertySelected,
  trackChatbotRestart,
  trackChatbotServiceSelected,
  trackChatbotUrgencySelected,
  trackChatbotWhatsAppClick,
  trackWhatsAppClick,
} from '../lib/analytics';

const WHATSAPP_NUMBER = '5561992743428';
const MAX_PHOTO_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const serviceOptions = [
  {
    id: 'eletrica',
    label: 'Elétrica',
    description: 'Quadros, disjuntores, tomadas, iluminação e rede elétrica.',
  },
  {
    id: 'hidraulica',
    label: 'Hidráulica',
    description: 'Vazamentos, pressão, registros, bombas e tubulações.',
  },
  {
    id: 'eletronica',
    label: 'Engenharia clínica',
    description: 'Equipamentos médico-hospitalares e suporte técnico especializado.',
  },
] as const;

const locationOptions = [
  {
    id: 'df',
    label: 'Brasília e Distrito Federal',
    description: 'Atendimento nas regiões administrativas do DF.',
  },
  {
    id: 'entorno',
    label: 'Entorno do DF',
    description: 'Águas Lindas e demais cidades atendidas na região.',
  },
  {
    id: 'confirmar',
    label: 'Quero confirmar minha região',
    description: 'A equipe verifica a cobertura rapidamente no WhatsApp.',
  },
] as const;

const propertyOptions = [
  {
    id: 'empresa',
    label: 'Empresa, comércio ou escritório',
    description: 'Ambiente de trabalho, loja, indústria ou operação comercial.',
  },
  {
    id: 'condominio',
    label: 'Condomínio ou área comum',
    description: 'Prédio, portaria, garagem, área técnica ou administração.',
  },
  {
    id: 'saude',
    label: 'Clínica, hospital ou laboratório',
    description: 'Ambiente de saúde com necessidade de suporte especializado.',
  },
  {
    id: 'residencia',
    label: 'Residência',
    description: 'Casa, apartamento ou imóvel residencial.',
  },
] as const;

const issueOptions = [
  {
    id: 'parado',
    label: 'O equipamento ou sistema parou',
    description: 'Preciso restabelecer a operação o quanto antes.',
  },
  {
    id: 'falha',
    label: 'Há falha, risco ou funcionamento irregular',
    description: 'Quero avaliar o problema antes que ele aumente.',
  },
  {
    id: 'preventiva',
    label: 'Quero prevenir problemas',
    description: 'Preciso de vistoria, manutenção preventiva ou melhoria.',
  },
] as const;

const urgencyOptions = [
  {
    id: 'emergencia',
    label: 'Emergência 24h',
    description: 'Prioridade para minimizar parada, risco ou prejuízo.',
  },
  {
    id: 'hoje',
    label: 'Atendimento ainda hoje',
    description: 'Preciso de retorno rápido para organizar a solução.',
  },
  {
    id: 'orcamento',
    label: 'Orçamento programado',
    description: 'Quero planejar o atendimento com a equipe.',
  },
] as const;

const availabilityOptions = [
  { id: 'agora', label: 'Estou disponível agora' },
  { id: 'manha', label: 'Prefiro o período da manhã' },
  { id: 'tarde', label: 'Prefiro o período da tarde' },
  { id: 'flexivel', label: 'Tenho flexibilidade de horário' },
] as const;

type ServiceId = (typeof serviceOptions)[number]['id'];
type LocationId = (typeof locationOptions)[number]['id'];
type PropertyId = (typeof propertyOptions)[number]['id'];
type IssueId = (typeof issueOptions)[number]['id'];
type UrgencyId = (typeof urgencyOptions)[number]['id'];
type AvailabilityId = (typeof availabilityOptions)[number]['id'];
type ConversationStep = 'service' | 'location' | 'property' | 'issue' | 'urgency' | 'availability' | 'photo' | 'done';
type ChatMessage = { id: string; sender: 'bot' | 'user'; text: string };

const initialMessage: ChatMessage = {
  id: 'welcome',
  sender: 'bot',
  text: 'Olá! Sou o assistente virtual da CNSOUSATEC. Em menos de um minuto, vou organizar seu pedido para você falar com o especialista certo.',
};

function createWhatsAppUrl(
  service: string,
  location: string,
  property: string,
  issue: string,
  urgency: string,
  availability: string,
  photoUrl?: string,
) {
  const message = [
    'Olá! Vim pelo assistente virtual da CNSOUSATEC.',
    `Serviço: ${service}.`,
    `Região: ${location}.`,
    `Ambiente: ${property}.`,
    `Situação: ${issue}.`,
    `Prioridade: ${urgency}.`,
    `Melhor disponibilidade: ${availability}.`,
    photoUrl ? `Foto técnica enviada: ${photoUrl}` : 'Foto técnica: não enviada.',
    'Gostaria de acionar um especialista para este atendimento.',
  ].join(' ');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function OptionButton({
  label,
  description,
  onClick,
}: {
  label: string;
  description?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" className="virtual-assistant-option" onClick={onClick}>
      <span>{label}</span>
      {description && <small>{description}</small>}
      <ArrowRight size={17} aria-hidden="true" />
    </button>
  );
}

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ConversationStep>('service');
  const [service, setService] = useState<ServiceId | null>(null);
  const [location, setLocation] = useState<LocationId | null>(null);
  const [property, setProperty] = useState<PropertyId | null>(null);
  const [issue, setIssue] = useState<IssueId | null>(null);
  const [urgency, setUrgency] = useState<UrgencyId | null>(null);
  const [availability, setAvailability] = useState<AvailabilityId | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const selectedServiceLabel = useMemo(
    () => serviceOptions.find((option) => option.id === service)?.label || '',
    [service],
  );
  const selectedLocationLabel = useMemo(
    () => locationOptions.find((option) => option.id === location)?.label || '',
    [location],
  );
  const selectedPropertyLabel = useMemo(
    () => propertyOptions.find((option) => option.id === property)?.label || '',
    [property],
  );
  const selectedIssueLabel = useMemo(
    () => issueOptions.find((option) => option.id === issue)?.label || '',
    [issue],
  );
  const selectedUrgencyLabel = useMemo(
    () => urgencyOptions.find((option) => option.id === urgency)?.label || '',
    [urgency],
  );
  const selectedAvailabilityLabel = useMemo(
    () => availabilityOptions.find((option) => option.id === availability)?.label || '',
    [availability],
  );

  const stepNumber = {
    service: 1,
    location: 2,
    property: 3,
    issue: 4,
    urgency: 5,
    availability: 6,
    photo: 7,
    done: 7,
  }[step];

  const chooseService = (nextService: ServiceId) => {
    const selected = serviceOptions.find((option) => option.id === nextService);
    if (!selected || step !== 'service') return;

    trackChatbotServiceSelected(selected.label);
    setService(nextService);
    setStep('location');
    setMessages((current) => [
      ...current,
      { id: `user-service-${nextService}`, sender: 'user', text: selected.label },
      {
        id: 'bot-location',
        sender: 'bot',
        text: 'Excelente escolha. A CNSOUSATEC atende o DF e o Entorno. Em qual região fica o atendimento?',
      },
    ]);
  };

  const chooseLocation = (nextLocation: LocationId) => {
    const selected = locationOptions.find((option) => option.id === nextLocation);
    if (!selected || step !== 'location') return;

    trackChatbotLocationSelected(selectedServiceLabel, selected.label);
    setLocation(nextLocation);
    setStep('property');
    setMessages((current) => [
      ...current,
      { id: `user-location-${nextLocation}`, sender: 'user', text: selected.label },
      {
        id: 'bot-property',
        sender: 'bot',
        text: 'Perfeito. Para direcionar os recursos e a equipe adequados, em qual tipo de ambiente será o atendimento?',
      },
    ]);
  };

  const chooseProperty = (nextProperty: PropertyId) => {
    const selected = propertyOptions.find((option) => option.id === nextProperty);
    if (!selected || step !== 'property') return;

    trackChatbotPropertySelected(selectedServiceLabel, selected.label);
    setProperty(nextProperty);
    setStep('issue');
    setMessages((current) => [
      ...current,
      { id: `user-property-${nextProperty}`, sender: 'user', text: selected.label },
      {
        id: 'bot-issue',
        sender: 'bot',
        text: 'Ótimo. Agora me diga: o que está acontecendo? Isso ajuda a equipe a chegar mais preparada.',
      },
    ]);
  };

  const chooseIssue = (nextIssue: IssueId) => {
    const selected = issueOptions.find((option) => option.id === nextIssue);
    if (!selected || step !== 'issue') return;

    trackChatbotIssueSelected(selectedServiceLabel, selected.label);
    setIssue(nextIssue);
    setStep('urgency');
    setMessages((current) => [
      ...current,
      { id: `user-issue-${nextIssue}`, sender: 'user', text: selected.label },
      {
        id: 'bot-urgency',
        sender: 'bot',
        text: 'Entendi. Vamos definir a prioridade para que a equipe responda no ritmo que sua operação precisa.',
      },
    ]);
  };

  const chooseUrgency = (nextUrgency: UrgencyId) => {
    const selected = urgencyOptions.find((option) => option.id === nextUrgency);
    if (!selected || step !== 'urgency') return;

    trackChatbotUrgencySelected(selectedServiceLabel, selected.label);
    setUrgency(nextUrgency);
    setStep('availability');
    setMessages((current) => [
      ...current,
      { id: `user-urgency-${nextUrgency}`, sender: 'user', text: selected.label },
      {
        id: 'bot-availability',
        sender: 'bot',
        text: 'Estamos quase lá. Informe sua melhor disponibilidade e o WhatsApp abrirá com seu pedido já organizado.',
      },
    ]);
  };

  const chooseAvailability = (nextAvailability: AvailabilityId) => {
    const selected = availabilityOptions.find((option) => option.id === nextAvailability);
    if (!selected || step !== 'availability') return;

    trackChatbotAvailabilitySelected(selectedServiceLabel, selected.label);
    setAvailability(nextAvailability);
    setStep('photo');
    setMessages((current) => [
      ...current,
      { id: `user-availability-${nextAvailability}`, sender: 'user', text: selected.label },
      {
        id: 'bot-photo',
        sender: 'bot',
        text: 'Se puder, envie uma foto técnica do problema. Ela é opcional, mas pode ajudar o especialista a chegar mais preparado.',
      },
    ]);
  };

  const completeConversation = (choice: 'photo' | 'skip') => {
    setStep('done');
    setMessages((current) => [
      ...current,
      ...(choice === 'skip' ? [{ id: 'user-photo-skip', sender: 'user' as const, text: 'Continuar sem foto' }] : []),
      {
        id: 'bot-transfer',
        sender: 'bot' as const,
        text: photoUrl
          ? 'Foto técnica anexada. Seu pedido foi organizado com as informações que aceleram a triagem. Toque abaixo para falar com um especialista.'
          : 'Pronto. Seu pedido foi organizado com as informações que aceleram a triagem. Toque abaixo para falar com um especialista da CNSOUSATEC.',
      },
    ]);
  };

  const handlePhotoUpload = async (file: File) => {
    setPhotoError(null);
    if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
      const error = 'Envie uma imagem em JPEG, PNG ou WebP.';
      setPhotoError(error);
      trackChatbotPhotoUploadFailed(selectedServiceLabel, 'unsupported_file_type');
      return;
    }

    if (file.size > MAX_PHOTO_SIZE_BYTES) {
      const error = 'A foto deve ter no máximo 5 MB.';
      setPhotoError(error);
      trackChatbotPhotoUploadFailed(selectedServiceLabel, 'file_too_large');
      return;
    }

    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const safeFilename = file.name
      .replace(/\.[^/.]+$/, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9_-]/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 50) || 'evidencia';

    setIsUploadingPhoto(true);
    trackChatbotPhotoUploadStarted(selectedServiceLabel, selectedUrgencyLabel);

    try {
      const blob = await upload(`chatbot-evidencias/${Date.now()}-${safeFilename}.${extension}`, file, {
        access: 'public',
        handleUploadUrl: '/api/upload-evidence',
        contentType: file.type,
        clientPayload: JSON.stringify({
          source: 'chatbot',
          service: selectedServiceLabel,
          urgency: selectedUrgencyLabel,
        }),
      });

      setPhotoUrl(blob.url);
      setPhotoName(file.name);
      trackChatbotPhotoUploaded(selectedServiceLabel, selectedUrgencyLabel);
      setMessages((current) => [
        ...current,
        { id: `user-photo-${Date.now()}`, sender: 'user', text: `Foto anexada: ${file.name}` },
        {
          id: 'bot-photo-confirmed',
          sender: 'bot',
          text: 'Foto recebida. O link será incluído no resumo para que a equipe técnica possa consultar a evidência.',
        },
      ]);
    } catch (error) {
      console.error('chatbot_photo_upload_failed', error);
      setPhotoError('Não foi possível enviar a foto agora. Você pode continuar sem foto ou tentar novamente.');
      trackChatbotPhotoUploadFailed(selectedServiceLabel, 'upload_error');
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const onPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (file) void handlePhotoUpload(file);
  };

  const skipPhoto = () => {
    trackChatbotPhotoSkipped(selectedServiceLabel, selectedUrgencyLabel);
    completeConversation('skip');
  };

  const restartConversation = () => {
    trackChatbotRestart();
    setStep('service');
    setService(null);
    setLocation(null);
    setProperty(null);
    setIssue(null);
    setUrgency(null);
    setAvailability(null);
    setPhotoUrl(null);
    setPhotoName(null);
    setPhotoError(null);
    setIsUploadingPhoto(false);
    setMessages([initialMessage]);
  };

  const whatsappUrl = service && location && property && issue && urgency && availability
    ? createWhatsAppUrl(
      selectedServiceLabel,
      selectedLocationLabel,
      selectedPropertyLabel,
      selectedIssueLabel,
      selectedUrgencyLabel,
      selectedAvailabilityLabel,
      photoUrl || undefined,
    )
    : '#';

  return (
    <>
      <button
        type="button"
        className="virtual-assistant-trigger"
        aria-label={isOpen ? 'Fechar assistente virtual' : 'Abrir assistente virtual'}
        aria-expanded={isOpen}
        aria-controls="virtual-assistant-panel"
        onClick={() => {
          if (!isOpen) trackChatbotOpen();
          setIsOpen((current) => !current);
        }}
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <MessageCircle size={25} aria-hidden="true" />}
        <span className="virtual-assistant-trigger__label">Assistente virtual</span>
      </button>

      {isOpen && (
        <section
          id="virtual-assistant-panel"
          className="virtual-assistant-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="virtual-assistant-title"
        >
          <header className="virtual-assistant-header">
            <div>
              <span className="virtual-assistant-status" aria-hidden="true" />
              <h2 id="virtual-assistant-title">Atendimento CNSOUSATEC</h2>
              <p>Triagem guiada para acelerar seu atendimento</p>
            </div>
            <button
              type="button"
              className="virtual-assistant-close"
              aria-label="Fechar atendimento"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="virtual-assistant-progress" aria-label={`Etapa ${stepNumber} de 7`}>
            <span>Etapa {stepNumber} de 7</span>
            <div aria-hidden="true">
              <i style={{ width: `${Math.min(stepNumber, 7) * (100 / 7)}%` }} />
            </div>
          </div>

          <div className="virtual-assistant-messages" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((message) => (
              <div key={message.id} className={`virtual-assistant-message virtual-assistant-message--${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="virtual-assistant-actions">
            {step === 'service' && (
              <div className="virtual-assistant-options" aria-label="Escolha o serviço necessário">
                {serviceOptions.map((option) => (
                  <OptionButton key={option.id} label={option.label} description={option.description} onClick={() => chooseService(option.id)} />
                ))}
              </div>
            )}

            {step === 'location' && (
              <div className="virtual-assistant-options" aria-label="Escolha a região do atendimento">
                {locationOptions.map((option) => (
                  <OptionButton key={option.id} label={option.label} description={option.description} onClick={() => chooseLocation(option.id)} />
                ))}
              </div>
            )}

            {step === 'property' && (
              <div className="virtual-assistant-options" aria-label="Escolha o tipo de ambiente">
                {propertyOptions.map((option) => (
                  <OptionButton key={option.id} label={option.label} description={option.description} onClick={() => chooseProperty(option.id)} />
                ))}
              </div>
            )}

            {step === 'issue' && (
              <div className="virtual-assistant-options" aria-label="Descreva a situação">
                {issueOptions.map((option) => (
                  <OptionButton key={option.id} label={option.label} description={option.description} onClick={() => chooseIssue(option.id)} />
                ))}
              </div>
            )}

            {step === 'urgency' && (
              <div className="virtual-assistant-options" aria-label="Escolha a prioridade">
                {urgencyOptions.map((option) => (
                  <OptionButton key={option.id} label={option.label} description={option.description} onClick={() => chooseUrgency(option.id)} />
                ))}
              </div>
            )}

            {step === 'availability' && (
              <div className="virtual-assistant-options virtual-assistant-options--compact" aria-label="Escolha a disponibilidade">
                {availabilityOptions.map((option) => (
                  <OptionButton key={option.id} label={option.label} onClick={() => chooseAvailability(option.id)} />
                ))}
              </div>
            )}

            {step === 'photo' && (
              <div className="virtual-assistant-photo-step">
                <input
                  ref={photoInputRef}
                  className="virtual-assistant-photo-input"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={onPhotoChange}
                  disabled={isUploadingPhoto}
                />
                <button
                  type="button"
                  className="virtual-assistant-photo-upload"
                  disabled={isUploadingPhoto}
                  onClick={() => photoInputRef.current?.click()}
                >
                  {isUploadingPhoto ? <LoaderCircle className="virtual-assistant-spin" size={19} aria-hidden="true" /> : <ImagePlus size={19} aria-hidden="true" />}
                  {isUploadingPhoto ? 'Enviando foto...' : photoUrl ? 'Enviar outra foto' : 'Adicionar foto do problema'}
                </button>
                <p className="virtual-assistant-photo-help">
                  Opcional. JPEG, PNG ou WebP de até 5 MB. Envie apenas a área técnica: não inclua pessoas, pacientes, documentos ou dados pessoais.
                </p>
                {photoError && <p className="virtual-assistant-photo-error" role="alert">{photoError}</p>}
                {photoUrl && <p className="virtual-assistant-photo-success">Foto anexada: {photoName}</p>}
                <div className="virtual-assistant-photo-actions">
                  {photoUrl ? (
                    <button type="button" className="virtual-assistant-photo-continue" onClick={() => completeConversation('photo')}>
                      Continuar com a foto
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>
                  ) : (
                    <button type="button" className="virtual-assistant-photo-skip" disabled={isUploadingPhoto} onClick={skipPhoto}>
                      Continuar sem foto
                    </button>
                  )}
                </div>
              </div>
            )}

            {step === 'done' && (
              <div className="virtual-assistant-complete">
                <div className="virtual-assistant-summary">
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <div>
                    <strong>Resumo do atendimento</strong>
                    <span>{selectedServiceLabel} · {selectedLocationLabel} · {selectedUrgencyLabel}</span>
                    <small>{photoUrl ? 'Foto técnica anexada ao encaminhamento.' : 'Sem foto técnica anexada.'}</small>
                  </div>
                </div>
                <a
                  className="virtual-assistant-whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackChatbotWhatsAppClick(selectedServiceLabel, selectedUrgencyLabel, selectedIssueLabel, selectedAvailabilityLabel);
                    trackWhatsAppClick({
                      placement: 'chatbot',
                      service: selectedServiceLabel,
                      label: 'Acionar especialista pelo WhatsApp',
                      messageType: selectedUrgencyLabel,
                    });
                  }}
                >
                  <Send size={18} aria-hidden="true" />
                  Acionar especialista pelo WhatsApp
                </a>
                <button type="button" className="virtual-assistant-restart" onClick={restartConversation}>
                  <RotateCcw size={15} aria-hidden="true" />
                  Refazer triagem
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export { createWhatsAppUrl };
