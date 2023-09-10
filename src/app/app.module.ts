import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { BoxShadowComponent } from './box-shadow/box-shadow.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    BorderRadiusComponent,
    BoxShadowComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
