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
      date: new Date('09-01-2021'),
      upvotes: 0,
      downvotes: 0,
      name: 'Alex',
      quote: 'There is no limit to what we, as women, can accomplish',
      author: 'Michelle Obama',
    },
    {
      id: 2,
      date: new Date('10-04-2010'),
      upvotes: 0,
      downvotes: 0,
      name: 'paul',
      quote: 'Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.',
      author: 'Chimamanda Ngozi Adichie',
    },
    {
      id: 3,
      date: new Date('10-09-2014'),
      upvotes: 0,
      downvotes: 0,
      name: 'Amy',
      quote: 'Women, if the soul of the nation is to be saved, I believe you must become its soul.',
      author: 'Coretta Scott King',
    },
    {
      id: 4,
      date: new Date('1-09-2014'),
      upvotes: 0,
      downvotes: 0,
      name: 'Beryl',
      quote: '"Women will be hidden no more. We will not remain hidden figures. We have names. … It was woman that gave you Dr. Martin Luther King, Jr. It was woman that gave you Malcolm X. And according to the Bible, it was a woman that gave you Jesus. Dont you ever forget it.',
      author: 'Janelle Monáe',
    },
    
  ];

  getNewQuote(e) {
    console.log(e);
    this.quotes.push(e);
  }

  handleDelete(id: number) {
    this.quotes = this.quotes.filter(quote => quote.id !== id);
  }
}
