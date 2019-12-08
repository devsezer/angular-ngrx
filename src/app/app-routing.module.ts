import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppSideBarComponent} from './views/theme/app-side-bar/app-side-bar.component';


const routes: Routes = [
  { path: '', component: AppSideBarComponent, children: [
      { path: '', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule)},
      { path: 'firmalar', loadChildren: () => import('./views/pages/company/company.module').then(m => m.CompanyModule)},
      { path: 'kullanicilar', loadChildren: () => import('./views/pages/user/user.module').then(m => m.UserModule)},
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
