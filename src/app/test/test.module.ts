import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTest from './reducers/test.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TestEffects } from './effects/test.effects';
import { TestTreeComponent } from './test-tree/test-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TestTreeComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTest.testFeatureKey, fromTest.reducer),
    EffectsModule.forFeature([TestEffects]),
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TestModule {
}
