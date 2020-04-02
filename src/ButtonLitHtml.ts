import { html, component, useState, useCallback, BaseScheduler } from 'haunted';
export type WcButtonHtmlProps = {
  _scheduler?: BaseScheduler<any, HTMLElement>; // from haunted
  title: string;
  counter: number;
};
export const ButtonLitHtml = (props: WcButtonHtmlProps) => {
  const { _scheduler, title, counter } = props;

  const [_title, _] = useState(title || 'Hey there');
  const [_counter, setCounter] = useState(counter || 5);

  const __increment = useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
  }, []);

  return html`
    <h2>${_title} Nr. ${_counter}!</h2>
    <button @click=${__increment}>increment</button>
  `;
};

export const WCButtonLitHtml = component<WcButtonHtmlProps>(ButtonLitHtml, {
  useShadowDOM: true,
  observedAttributes: ['title', 'counter'],
});

const wcButtonHtmlTagName = 'wc-button-lithtml';

if (!customElements.get(wcButtonHtmlTagName)) {
  // @ts-ignore https://github.com/matthewp/haunted/issues/177
  customElements.define(wcButtonHtmlTagName, WCButtonLitHtml);
}
