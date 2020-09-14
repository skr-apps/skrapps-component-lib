import { newSpecPage } from '@stencil/core/testing';
import { SelectCity } from '../select-city';

describe('select-city', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectCity],
      html: `<select-city></select-city>`,
    });
    expect(page.root).toEqualHtml(`
      <select-city>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-city>
    `);
  });
});
