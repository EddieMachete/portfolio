import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
	
import {map} from 'lit/directives/map.js';
import {DesignToken, DesignTokenScale} from '@core/domain';
import {getRGBColorValue, parseColor} from '@core/utilities/colorUtilities'; 
import {TokensProvider} from '../providers/tokens.provider';

@customElement('color-tokens-page')
export class ColorTokensPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 50%;
    }

    em-token-color-scale em-token-color-card {
      margin: 2px 0;
    }
  `;

  @state()
  colorTokens: DesignToken[] = [];

  @state()
  colorScales: DesignTokenScale[] = [];

  private static getTokenTemplate(token: DesignToken) {
    const [r, g, b] = parseColor(token.value);
    const colorValue = getRGBColorValue(r, g, b);
    const textColor = colorValue < 0.6 ? '--color-white': '--color-black';

    return html`<em-token-color-card
      description="${token.name}"
      value="${token.value}"
      style="--em-token-color-card-bg:var(${token.name});--em-token-color-card-color:var(${textColor});"></em-token-color-card>`;
  }

  render() {
    return html`
      <div>Color Tokens</div>
      <em-color-section>
        <div>Colors</div>
        ${map(this.colorTokens, (token) => ColorTokensPage.getTokenTemplate(token))}
        <div>Scales</div>
        ${map(this.colorScales, (scale) => html`
          <em-token-color-scale>
            <h3 slot="heading">${scale.name}</h3>
            ${map(scale.getTokens(), (token) => ColorTokensPage.getTokenTemplate(token))}
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
