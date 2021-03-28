
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.scss']
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quote: Quote;
  @Output() deleteQt = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  vote(type: string): void {
    type === 'up' ? this.quote.upvotes += 1 : this.quote.downvotes += 1;
  }

  deleteQuote(id: number) {
    this.deleteQt.emit(id);
  }

}
