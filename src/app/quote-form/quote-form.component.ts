import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export class Quote {
  id: number;
  date: Date;
  upvotes: number;
  downvotes: number;
  constructor(public name: string, public quote: string, public author: string) {
    this.id = new Date().getTime();
    this.date = new Date();
    this.upvotes = 0;
    this.downvotes = 0;
  }
}

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  @Output() newQuote = new EventEmitter<Quote>();

  formModel: Quote = new Quote('', '', '');


  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log('formModel', this.formModel);
    this.newQuote.emit(this.formModel);
    this.formModel = new Quote('', '', '');
  }

}
