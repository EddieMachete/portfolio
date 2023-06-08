import {ITokensProvider} from '@core/boundaries';
import { DesignToken, DesignTokenScale} from '@core/domain';

import tokens from '@data/tokens';

export class TokensProvider implements ITokensProvider {
  public getColors(): Promise<{colorTokens: DesignToken[], colorScales: DesignTokenScale[]}> {
    const colorTokens = [];
    const colorScales = [];
    const prefix = '--';
    
    Object.getOwnPropertyNames(tokens.color).forEach((propName) => {
      const token = tokens.color[propName];

      if (token.type === 'color') {
        colorTokens.push(new DesignToken(`${prefix}${token.type}-${propName}`, token.type, token.value));
      } else {
        const scale = new DesignTokenScale(propName);

        Object.getOwnPropertyNames(token).forEach((propName) => {
          const scaleToken = token[propName];
          scale.addToken(new DesignToken(`${prefix}${scaleToken.type}-${scale.name}-${propName}`, scaleToken.type, scaleToken.value));
        });

        colorScales.push(scale);
      }
    });

    return Promise.resolve({
      colorTokens,
      colorScales,
    });
  }
}
