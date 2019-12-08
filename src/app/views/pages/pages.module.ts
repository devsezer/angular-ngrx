import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyModule} from './company/company.module';
import {UserModule} from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyModule,
    UserModule
  ]
})
export class PagesModule { }
