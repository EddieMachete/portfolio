import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import tokens from 'src/data/tokens';

console.log(tokens);

@customElement('em-color-section')
export class EMColorSection extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<div>Color Section</div><slot></slot>`;
  }
}
