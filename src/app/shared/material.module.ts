import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSliderModule
} from "@angular/material";

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
  ]
})
export class MaterialModule {}