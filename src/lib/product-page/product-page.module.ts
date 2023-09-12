import { NgModule } from '@angular/core';
import { ProductPageComponent } from './product-page.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BorderRadiusComponent } from '../products/border-radius/border-radius.component';
import { BoxShadowComponent } from '../products/box-shadow/box-shadow.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductPageComponent },
  {
    path: 'border-radius',
    component: ProductPageComponent,
    children: [
      {
        path: '',
        component: BorderRadiusComponent,
      },
    ],
  },
  {
    path: 'box-shadow',
    component: ProductPageComponent,
    children: [
      {
        path: '',
        component: BoxShadowComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductPageModule {}
