import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import {FormsModule} from '@angular/forms'
import { QuoteFormComponent } from './quote-form/quote-form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteFormComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
