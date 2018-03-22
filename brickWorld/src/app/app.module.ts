import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ManterBrickComponent } from './manter-brick/manter-brick.component';
import { TijoloService } from './tijolo.service';
import { TemplateCabecalhoComponent } from './template-cabecalho/template-cabecalho.component';
import { TemplateMenuComponent } from './template-menu/template-menu.component';
import { LoginComponent } from './login/login.component';
import { AppRotaModule } from './app-rota.module';

import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("75326620481-tppnuup0fejm0r1o9s05kgvl1l4hqdlb.apps.googleusercontent.com")
  }, {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("386447491819094")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ManterBrickComponent,
    TemplateCabecalhoComponent,
    TemplateMenuComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    SocialLoginModule.initialize(config),
    AppRotaModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [TijoloService],
  bootstrap: [AppComponent]
})
export class AppModule { }