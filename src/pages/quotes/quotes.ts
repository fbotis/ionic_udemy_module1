import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from "ionic-angular"
import { Quote } from "../../data/quote.interface"
import { QuotesService } from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quotes: { category: string, quotes: Quote[], icon: string }

  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService:QuotesService) {

  }
  ngOnInit(): void {
    this.quotes = this.navParams.data;
  }


  onQuoteFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          this.quoteService.addQuoteToFavs(selectedQuote);
        }
      }, {
        text: 'No, I changed my mind',
        role:'cancel',
        handler: () => {
        }
      }]
    });
    alert.present();
  }

  onUnfavorite(selectedQuote:Quote){
     const alert = this.alertCtrl.create({
      title: 'Remove Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to remove the quote?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          this.quoteService.removeQuoteFromFavs(selectedQuote);
        }
      }, {
        text: 'No, I changed my mind',
        role:'cancel',
        handler: () => {
        }
      }]
    });
    alert.present();

  }

  isFavorite(q:Quote){
    return this.quoteService.isFavorite(q);
  }
}
