export class PrefsService {
    alternativeBackground: boolean;

    setAlternativeBackground(set: boolean) {
        this.alternativeBackground = set;
    }

    isAltBackgroundSet(){
        return this.alternativeBackground;
    }
}