import { environmentBase } from './environment.base';
import { IEnvironment } from '@yardbird/xplat/core';
import { environmentProd } from '@yardbird/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});
