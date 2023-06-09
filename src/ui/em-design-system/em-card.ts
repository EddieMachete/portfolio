import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('em-card')
export class EMCard extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      border: solid 0.0625rem rgba(0, 0, 0, 0.1);
      border-radius: .5rem;
      box-shadow: 0 .25rem .5rem 0.0625rem rgba(0, 0, 0, 0.2);
      display: block;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}