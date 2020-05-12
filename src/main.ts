import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

if (environment.production) {
  let ga_id = "UA-25501899-9";

  document.write(`<script async src="https://www.googletagmanager.com/gtag/js?id=${ga_id}"></script>`);

  const script1 = document.createElement('script');
  script1.innerHTML = `
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_id}', {
            'linker': {
            'domains': ['abacus-64f90.firebaseapp.com']
            }
        });
    `;
  document.head.appendChild(script1);

  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
