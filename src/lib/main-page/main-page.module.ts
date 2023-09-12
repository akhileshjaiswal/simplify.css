import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProductPageModule } from '../product-page/product-page.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => HomePageComponent },
  { path: 'product', loadChildren: () => ProductPageModule },
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
  ],
  bootstrap: [MainPageComponent],
})
export class MainPageModule {}
