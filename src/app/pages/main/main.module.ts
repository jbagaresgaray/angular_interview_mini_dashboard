import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, AppHeaderModule, MatTableModule],
})
export class MainModule {}
