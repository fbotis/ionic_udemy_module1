import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface"
import {QuotesPage} from "../quotes/quotes"

import quotes from "../../data/quotes"
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  quoteCollection:{category:string,quotes:Quote[],icon:string}[];
  quotesPage=QuotesPage;
  ngOnInit(): void {
     console.log(quotes);
     this.quoteCollection=quotes;
     console.log(this.quoteCollection);
    }

}
