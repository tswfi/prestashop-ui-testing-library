import type {FoAboutUsPageInterface} from '@interfaces/FO/aboutUs';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoAboutUsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/aboutUs');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
