import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {CompanyEffects, companyFeatureKey, companyReducer} from '../../../core/company';
import { CompanyMainComponent } from './company-main/company-main.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CompanyResolver} from '../../../core/company/resolvers/company.resolver';
import {EffectsModule} from '@ngrx/effects';
import { CompanyTreeComponent } from './company-tree/company-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material';

const routes: Routes = [
  { path: '', component: CompanyMainComponent, resolve: { company: CompanyResolver}}
];

@NgModule({
  declarations: [CompanyMainComponent, CompanyTreeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(companyFeatureKey, companyReducer),
    EffectsModule.forFeature([CompanyEffects]),
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [CompanyResolver]
})
export class CompanyModule { }
