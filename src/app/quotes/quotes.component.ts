import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote = 'God grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.'
  inputQuote = null;
  btnDisable = false;
  AddQuote(){
    this.quote = this.inputQuote
    this.inputQuote = null 
  } 

  constructor() { }

  ngOnInit() {
  }

}
