import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'login-signup-fa62d',
        appId: '1:897225265703:web:403f0f397208a96469b402',
        storageBucket: 'login-signup-fa62d.appspot.com',
        apiKey: 'AIzaSyBs98z-QQCmx9EuXnigsrGNEYV5XPDVCNU',
        authDomain: 'login-signup-fa62d.firebaseapp.com',
        messagingSenderId: '897225265703',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
