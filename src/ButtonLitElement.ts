import { html, css, LitElement, customElement, property } from 'lit-element';

@customElement('wc-button-litelement')
export class ButtonLitElement extends LitElement {
  @property({ type: String }) title: string;
  @property({ type: Number }) counter: number;

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        --open-wc-typescript-karma-webpack-text-color: #000;

        display: block;
        padding: 25px;
        color: var(--open-wc-typescript-karma-webpack-text-color);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

const wcButtonElementTagName = 'wc-button-litelement';

if (!customElements.get(wcButtonElementTagName)) {
  window.customElements.define(wcButtonElementTagName, ButtonLitElement);
}
