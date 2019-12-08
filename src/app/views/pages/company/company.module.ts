import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {CompanyEffects, companyFeatureKey, companyReducer} from '../../../core/company';
import { CompanyMainComponent } from './company-main/company-main.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CompanyResolver} from '../../../core/company/resolvers/company.resolver';
import {EffectsModule} from '@ngrx/effects';

const routes: Routes = [
  { path: '', component: CompanyMainComponent, resolve: { company: CompanyResolver}}
];

@NgModule({
  declarations: [CompanyMainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(companyFeatureKey, companyReducer),
    EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [CompanyResolver]
})
export class CompanyModule { }
