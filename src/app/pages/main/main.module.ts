import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { AppImageModule } from 'src/app/components/app-image/app-image.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AppHeaderModule,
    MatTableModule,
    AppImageModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class MainModule {}
