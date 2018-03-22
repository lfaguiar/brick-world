import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManterBrickComponent } from './manter-brick/manter-brick.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'manter-pecas', component: ManterBrickComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRotaModule { }
