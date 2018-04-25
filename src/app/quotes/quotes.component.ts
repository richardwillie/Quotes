import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  push: any;
  quote = []
  inputQuote = null;
  btnDisable = false; 
  Inserting = false
  AddQuote(){
    this.inputQuote.push(this.inputQuote)
    this.inputQuote = null 
    this.Inserting = false

  }
  InsertQuote(){
    this.Inserting = !this.Inserting
  } 

 constructor() {

   }

  ngOnInit() {
  }
 
}
