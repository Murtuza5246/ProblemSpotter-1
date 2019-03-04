import {NgModule} from '@angular/core';

import {UserLoginComponent} from './user-login/user-login.component';
import {HomePageComponent} from './home-page/home-page.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule {
}
