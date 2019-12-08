import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './core/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
// import {CompanyModule} from './store/company/company.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTableModule} from '@angular/material';
import {PagesModule} from './views/pages/pages.module';
import {ThemeModule} from './views/theme/theme.module';
import {EffectsModule} from '@ngrx/effects';

// import {UserModule} from './store/user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    PagesModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    StoreRouterConnectingModule.forRoot( {stateKey: 'router', routerState: RouterState.Minimal}),
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
