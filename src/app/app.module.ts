import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './Pages/pages.module';


import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';


import { AuthInterceptor } from './core/http/auth.interceptor';

import { ValidatorService } from './Services/validator.service';
import { QuestionariesService } from './Services/questionaries.service';
import { VisitTypeService } from './Services/visit-type.service';
import { SocService } from './Services/soc.service';
import { InpatientService } from './Services/inpatient.service';
import { BlocklistService } from './Services/blocklist.service';

@NgModule({
  declarations: [
  
    AppComponent
  ],
  imports: [
    BrowserModule,              
    BrowserAnimationsModule,    
    AppRoutingModule,           
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Feature module that declares Pages components
    PagesModule,

    
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    ValidatorService,
    QuestionariesService,
    VisitTypeService,
    InpatientService,
    SocService,
    BlocklistService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
