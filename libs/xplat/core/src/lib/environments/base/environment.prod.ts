import { IEnvironment } from '@yardbird/xplat/core';
import { deepMerge } from '@yardbird/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
