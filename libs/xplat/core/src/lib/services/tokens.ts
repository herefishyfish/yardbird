import { InjectionToken, Type } from '@angular/core';
import { IXPlatWindow, IYardBirdAuthentication } from '../models';

/**
 * Various InjectionTokens shared across all platforms
 * Always suffix with 'Token' for clarity and consistency
 */

export const PlatformLanguageToken = new InjectionToken<string>(
  'PlatformLanguageToken'
);
export const PlatformWindowToken = new InjectionToken<IXPlatWindow>(
  'PlatformWindowToken'
);

export const AuthenticationToken = new InjectionToken<IYardBirdAuthentication>('AuthenticatioNToken');
