import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'app.yardbird.nativescript',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true,
    suppressCallJSMethodExceptions: false,
  },
  ios: {
    discardUncaughtJsExceptions: false,
  },
  appPath: 'src',
  cli: {
    packageManager: 'npm',
  },
} as NativeScriptConfig;
