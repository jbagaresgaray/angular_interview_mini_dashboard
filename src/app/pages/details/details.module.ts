import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, MatGridListModule],
})
export class DetailsModule {}
