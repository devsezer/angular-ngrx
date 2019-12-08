import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {companyFeatureKey, companyReducer} from '../../../core/store/company';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(companyFeatureKey, companyReducer)
  ]
})
export class CompanyModule { }
