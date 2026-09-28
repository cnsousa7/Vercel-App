import type { NextApiRequest, NextApiResponse } from 'next';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

const ALLOWED_CONTENT_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

type UploadClientPayload = {
  source?: string;
  service?: string;
  urgency?: string;
};

function parseClientPayload(value: string | null | undefined): UploadClientPayload {
  if (!value) return {};

  try {
    const parsed = JSON.parse(value) as UploadClientPayload;
    return {
      source: parsed.source === 'chatbot' ? 'chatbot' : undefined,
      service: typeof parsed.service === 'string' ? parsed.service.slice(0, 80) : undefined,
      urgency: typeof parsed.urgency === 'string' ? parsed.urgency.slice(0, 80) : undefined,
    };
  } catch {
    return {};
  }
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método não permitido.' });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return response.status(503).json({ error: 'O envio de foto está temporariamente indisponível.' });
  }

  try {
    const body = request.body as HandleUploadBody;
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const payload = parseClientPayload(clientPayload);
        const extension = pathname.split('.').pop()?.toLowerCase();
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

        if (payload.source !== 'chatbot' || !extension || !allowedExtensions.includes(extension)) {
          throw new Error('Arquivo inválido. Envie uma imagem JPEG, PNG ou WebP.');
        }

        return {
          allowedContentTypes: ALLOWED_CONTENT_TYPES,
          maximumSizeInBytes: MAX_FILE_SIZE_BYTES,
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ source: 'chatbot' }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        const payload = parseClientPayload(tokenPayload);
        console.info('chatbot_evidence_uploaded', {
          source: payload.source || 'chatbot',
          pathname: blob.pathname,
          contentType: blob.contentType,
        });
      },
    });

    return response.status(200).json(jsonResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Não foi possível preparar o envio da foto.';
    return response.status(400).json({ error: message });
  }
}
