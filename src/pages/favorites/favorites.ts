import { Component } from '@angular/core';
import { QuotesService } from "../../services/quotes";
import { Quote } from "../../data/quote.interface";
import { ModalController } from "ionic-angular";
import { QuotePage } from "../quote/quote";
import { PrefsService } from "../../services/prefs";

/*
  Generated class for the Favorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private prefsService: PrefsService) { }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quotesService.removeQuoteFromFavs(quote);
        this.ionViewWillEnter();
      }
    });
  }

  onRemoveFromFavs(quote: Quote) {
    this.quotesService.removeQuoteFromFavs(quote);
    this.ionViewWillEnter();
    console.log("test")
  }

  getBackground() {
    console.log("set" + this.prefsService.isAltBackgroundSet());
    return (this.prefsService.isAltBackgroundSet() ? 'altQuoteBackground' : 'quoteBackground');
  }

  isAltBackground() {
    return (this.prefsService.isAltBackgroundSet());
  }
}
