import { Component } from '@angular/core';
import { Quote } from './components/quote-form/quote-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quotes-app';
  quotes: Quote[] = [
    {
      id: 1,
      date: new Date('12-03-2019'),
      upvotes: 0,
      downvotes: 2,
      name: 'Jake Sully',
      quote: 'Sometimes your whole life boils down to one insane move.',
      author: 'James Cameron',
    },
    {
      id: 2,
      date: new Date('10-04-2010'),
      upvotes: 0,
      downvotes: 2,
      name: 'paul',
      quote: 'Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.',
      author: 'Chimamanda Ngozi Adichie',
    }
  ];

  getNewQuote(e) {
    console.log(e);
    this.quotes.push(e);
  }

  handleDelete(id: number) {
    this.quotes = this.quotes.filter(quote => quote.id !== id);
  }
}
