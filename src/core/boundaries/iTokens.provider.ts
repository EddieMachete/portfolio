'use strict';

import { DesignToken, DesignTokenScale} from '@core/domain';

export interface ITokensProvider {
  getColors(): Promise<{colorTokens: DesignToken[], colorScales: DesignTokenScale[]}>;
}
