import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('em-token-color-card')
export class EMTokenColorCard extends LitElement {

  @property()
  description: string = '';

  @property()
  value: string = '';

  @property()
  color: string = '';

  static styles = css`
    :host {
      background-color: var(--em-token-color-card-bg, #E2E2E2);
      border: solid 0.0625rem rgba(0, 0, 0, 0.1);
      box-shadow: 0 .25rem .5rem 0.0625rem rgba(0, 0, 0, 0.2);
      color: var(--em-token-color-card-color, #666);
      display: flex;
      padding: 16px;
    }

    div:first-child {
      flex-grow: 1;
    }
  `;

  render() {
    return html`<div>${this.description}</div><div>${this.value}</div>`;
  }

  private mouseMoveHandler(e: MouseEvent) {
    const xRotation = 20;
    const xHalf = this.offsetWidth / 2;
    const xPos = (xHalf - e.offsetX) / xHalf;

    const yRotation = 30;
    const yHalf = this.offsetHeight / 2;
    const yPos = (e.offsetY - yHalf) / yHalf;
    
    const gradientAngle = xPos > 0 ? -90 : 90;
    const a = 0.25 * Math.abs(xHalf - e.offsetX) / xHalf;

    this.style.transform = `rotateY(${xPos * xRotation}deg) rotateX(${yPos * yRotation}deg)`;
    this.style.background = `var(--em-token-color-card-bg) linear-gradient(${gradientAngle}deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, ${a}))`;
  }

  private mouseEnterHandler() {
    this.style.transition = '';
    this.addEventListener('mousemove', this.mouseMoveHandler);
  }

  private mouseLeaveHandler() {
    this.style.transform = 'rotateY(0) rotateX(0)';
    this.style.background = 'var(--em-token-color-card-bg)';
    this.style.transition = 'transform 500ms';
    this.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mouseenter', () => this.mouseEnterHandler());
    this.addEventListener('mouseleave', () => this.mouseLeaveHandler());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mouseenter', () => this.mouseEnterHandler());
    this.removeEventListener('mouseleave', () => this.mouseLeaveHandler());
    this.removeEventListener('mousemove', this.mouseMoveHandler);
  }
}