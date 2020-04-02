import { html, fixture, expect } from '@open-wc/testing';

import '../src/ButtonLitElement.ts';
import { ButtonLitElement } from '../src';

describe('ButtonLitElement', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = (await fixture(html`
      <wc-button-litelement></wc-button-litelement>
    `)) as ButtonLitElement;

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = (await fixture(html`
      <wc-button-litelement></wc-button-litelement>
    `)) as ButtonLitElement;
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = (await fixture(html`
      <wc-button-litelement title="attribute title"></wc-button-litelement>
    `)) as ButtonLitElement;

    expect(el.title).to.equal('attribute title');
  });
});
