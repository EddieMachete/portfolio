import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
	
import {map} from 'lit/directives/map.js';
import { DesignToken, DesignTokenScale} from '@core/domain';
import {TokensProvider} from '../providers/tokens.provider';

@customElement('color-tokens-page')
export class ColorTokensPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @state()
  colorTokens: DesignToken[] = [];

  @state()
  colorScales: DesignTokenScale[] = [];

  render() {
    return html`
      <div>Color Tokens</div>
      <em-color-section>
        <div>Colors</div>
        ${map(this.colorTokens, (token) => html`<em-token-color-card>${token.name}</em-token-color-card>`)}
        <div>Scales</div>
        ${map(this.colorScales, (scale) => html`
          <em-token-color-scale>
            ${map(scale.getTokens(), (token) => html`<em-token-color-card>${token.name}</em-token-color-card>`)}
          </em-token-color-scale>`)}
      </em-color-section>
    `;
  }
  
  constructor() {
    super();

    const tokensProvider = new TokensProvider();
    tokensProvider.getColors()
      .then((colors) => {
        const {colorTokens, colorScales} = {...colors};
        this.colorTokens = colorTokens;
        this.colorScales = colorScales;

        console.log(this.colorTokens);
      });
  }
}
