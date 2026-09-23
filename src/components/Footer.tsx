import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { localidades } from '../lib/localidades';
import { RegionAccordion } from './cro/RegionAccordion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border border-blue-600">
                <Image
                  src="/CNSOUSATEC-logo-restored.webp"
                  alt="Cnsousatec logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Cnsousatec</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Especialistas em manutenção elétrica, eletrônica e hidráulica no Distrito Federal.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/cnsousatec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/cnsousatec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/cnsousatec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicos/manutencao-eletrica"
                  className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  Manutenção Elétrica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/manutencao-hidraulica"
                  className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  Manutenção Hidráulica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/manutencao-eletronica"
                  className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  Manutenção Eletrônica
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-gray-600 dark:text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(61) 99274-3428</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Cnsousatec@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Brasília - DF</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regiões Atendidas - SEO Internal Linking */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <RegionAccordion 
              title="Regiões Atendidas - Manutenção Elétrica"
              regions={localidades.map(l => ({ name: l.nome, href: `/local/manutencao-eletrica-${l.slug}` }))}
            />
            <RegionAccordion 
              title="Regiões Atendidas - Manutenção Hidráulica"
              regions={localidades.map(l => ({ name: l.nome, href: `/local/manutencao-hidraulica-${l.slug}` }))}
            />
            <RegionAccordion 
              title="Regiões Atendidas - Manutenção Eletrônica"
              regions={localidades.map(l => ({ name: l.nome, href: `/local/manutencao-eletronica-${l.slug}` }))}
            />
          </div>
          
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-10">
            Atendimento técnico especializado 24h em todas as regiões administrativas do Distrito Federal e entorno de Goiás.
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} CNSOUSATEC ®. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
