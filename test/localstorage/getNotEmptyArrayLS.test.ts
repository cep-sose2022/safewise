import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import { addPointsToLocalStorage, getArrayWithGainedPoints } from './lsfunctions';

/**
 * @author b.kotikov
 */

describe('Abrufen der Länge des Arrays', () => {

    /*
        Es generiert ein "fake" Localstorage
    */
    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
        value: fakeLocalStorage,
        });
    });

    /*
        Ruft die "setItemLocalStorage" Methode auf und 
        setzt Name und Value in der Localstorage
    */
    it('Der Array der LS muss der länge gespeicherten Daten im LS entsprechen', () => {

        //fügt Punkte zur LS hinzu
        addPointsToLocalStorage("Einleitung", "300");

        //vergleicht die beiden werte
        expect(getArrayWithGainedPoints().length).toBe(2)
    });
});