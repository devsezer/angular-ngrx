import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {userFeatureKey, userReducer} from '../../../core/user';
import {StoreModule} from '@ngrx/store';
import {UserMainComponent} from './user-main/user-main.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: UserMainComponent}
];

@NgModule({
  declarations: [UserMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(userFeatureKey, userReducer)
  ]
})
export class UserModule {
}
