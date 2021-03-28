import { Component } from '@angular/core';
import { Quote } from './components/quote-form/quote-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quotes-app';
  quotes: Quote[] = [];

  getNewQuote(e) {
    console.log(e);
    this.quotes.push(e);
  }

  handleDelete(id: number) {
    this.quotes = this.quotes.filter(quote => quote.id !== id);
  }
}
