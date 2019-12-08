import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {userFeatureKey, userReducer} from '../../../core/store/user';
import {StoreModule} from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, userReducer)
  ]
})
export class UserModule { }
