import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// PrimeNg
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // PrimeNg
    ButtonModule,
    DialogModule,
    SpeedDialModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
