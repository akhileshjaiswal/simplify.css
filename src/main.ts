import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainPageModule } from './lib/main-page/main-page.module';

platformBrowserDynamic()
  .bootstrapModule(MainPageModule)
  .catch((err) => console.error(err));
