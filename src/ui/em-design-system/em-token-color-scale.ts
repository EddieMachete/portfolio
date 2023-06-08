import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('em-token-color-scale')
export class EMTokenColorScale extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<slot name="heading"></slot><slot></slot>`;
  }
}
