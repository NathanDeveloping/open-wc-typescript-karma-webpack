import { html, fixture, expect } from '@open-wc/testing';

import '../src/ButtonLitHtml.ts';

describe('ButtonLitHtml', () => {
  it('is mounted', async () => {
    const el = await fixture(html`
      <wc-button-lithtml></wc-button-lithtml>
    `);

    expect(el);

    // with lit-html and haunted way of defining WCs,
    // we can't access directly to the inner state of the component
    // checking the attribute of the custom element.
  });

  it('match snapshot', async () => {
    const el = await fixture(html`
      <wc-button-lithtml></wc-button-lithtml>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });
});
