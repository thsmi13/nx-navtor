import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { provideHttpClient } from '@angular/common/http'; // Angular v20+

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers ?? []), provideHttpClient()],
}).catch((err) => console.error(err));
