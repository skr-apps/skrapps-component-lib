import { newE2EPage } from '@stencil/core/testing';

describe('select-city', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<select-city></select-city>');

    const element = await page.find('select-city');
    expect(element).toHaveClass('hydrated');
  });
});
