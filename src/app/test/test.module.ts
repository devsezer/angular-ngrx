import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTest from './reducers/test.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TestEffects } from './effects/test.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTest.testFeatureKey, fromTest.reducer),
    EffectsModule.forFeature([TestEffects])
  ]
})
export class TestModule {
}
