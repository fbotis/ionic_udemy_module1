import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavs(quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavs(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl) => {
            return quote.id == quoteEl.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isFavorite(quote: Quote) {
        return this.favoriteQuotes.find((q: Quote) => {
            return q.id == quote.id;
        });
    }
}