import type {BODescriptionTabPageInterface} from '@interfaces/BO/catalog/products/create/descriptionTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BODescriptionTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/descriptionTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/create/descriptionTab');
}
/* eslint-enable global-require */

export default requirePage();
