import { expect, test } from '@playwright/test';

test.describe('rotas públicas', () => {
  test('carrega a home com o CTA principal', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/CNSOUSATEC/i);
    await expect(page.getByRole('heading', { name: 'Manutenção Profissional para seu Negócio' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Acionar Manutenção 24h' }).first()).toHaveAttribute(
      'href',
      /https:\/\/wa\.me\/5561992743428\?text=/,
    );
  });

  test('navega para a página de manutenção elétrica', async ({ page }) => {
    await page.goto('/servicos/manutencao-eletrica');

    await expect(page).toHaveURL(/\/servicos\/manutencao-eletrica$/);
    await expect(
      page.getByRole('heading', { name: 'Manutenção Elétrica Profissional em Brasília' }),
    ).toBeVisible();
  });
});

test.describe('conversão por WhatsApp', () => {
  test('mantém o botão flutuante com destino e abertura segura', async ({ page }) => {
    await page.goto('/');

    const whatsapp = page.getByRole('link', { name: 'Solicitar orçamento pelo WhatsApp' });
    await expect(whatsapp).toHaveAttribute('href', /https:\/\/wa\.me\/5561992743428\?text=/);
    await expect(whatsapp).toHaveAttribute('target', '_blank');
    await expect(whatsapp).toHaveAttribute('rel', /noopener/);
  });
});

test.describe('assistente virtual', () => {
  test('percorre a triagem sem foto até o encaminhamento', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Abrir assistente virtual' }).click();
    await expect(page.getByRole('dialog', { name: 'Atendimento CNSOUSATEC' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Elétrica/ })).toBeVisible();

    await page.getByRole('button', { name: /Elétrica/ }).click();
    await page.getByRole('button', { name: /Brasília e Distrito Federal/ }).click();
    await page.getByRole('button', { name: /Empresa, comércio ou escritório/ }).click();
    await page.getByRole('button', { name: /O equipamento ou sistema parou/ }).click();
    await page.getByRole('button', { name: /Emergência 24h/ }).click();
    await page.getByRole('button', { name: /Estou disponível agora/ }).click();
    await page.getByRole('button', { name: 'Continuar sem foto' }).click();

    const specialistLink = page.getByRole('link', { name: 'Acionar especialista pelo WhatsApp' });
    await expect(specialistLink).toHaveAttribute('href', /https:\/\/wa\.me\/5561992743428\?text=/);
    await expect(specialistLink).toHaveAttribute('target', '_blank');
    await expect(page.getByText('Resumo do atendimento')).toBeVisible();
  });
});
