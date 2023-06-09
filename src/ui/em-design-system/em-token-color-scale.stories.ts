import {html} from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js'
import type {Meta, StoryObj} from '@storybook/web-components';
import tokens from '../../data/tokens';
import {getRGBColorValue, parseColor} from '../../core/utilities/colorUtilities'; 

import './em-token-color-card';
import './em-token-color-scale';

const meta = {
  component: 'em-token-color-scale',
  title: 'Example/EMTokenColorScale',
};

export default meta;

type Story = StoryObj;

const getTokenColorScale = (scaleName: string, colors) => {
  const colorScale = colors[scaleName];

  return Object.getOwnPropertyNames(colorScale).map(step => {
      const token = colorScale[step];
      const variable = `--color-${scaleName}-${step}`;
      const [r, g, b] = parseColor(token.value);
      const colorValue = getRGBColorValue(r, g, b);
      const textColor = colorValue < 0.6 ? '--color-white': '--color-black';

      return `<em-token-color-card
        description="${variable}"
        value="${token.value}"
        style="--em-token-color-card-bg:var(${variable});--em-token-color-card-color:var(${textColor});"></em-token-color-card>`;
    })
    .join('');
};

export const Primary: Story = {
  render: () => html`
    <style>
      em-token-color-scale {
        max-width: 600px;
      }
    </style>
    <em-token-color-scale>
      <h3 slot="heading">Gray</h3>
      ${unsafeHTML(getTokenColorScale('gray', tokens.color))}
    </em-token-color-scale>`,
};
