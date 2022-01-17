import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends {[key: string]: any}> implements PipeTransform {
  /**
   * A kapott tömb szűrése a szűrőkifejezés alapján.
   * @param value {any[]} - a szűrendő tömb
   * @param phrase {string} - a szűrőkifejezés
   * @param key {string} - az objektumkulcs, amely alapján szűr
   * @returns {any[]} - a kifejezés alapján szűrt tömb
   */
  transform(value: T[], phrase: string, key: string = ''): T[] {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!

    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb, vagy nincs megadva a phrase vagy a key,
     * térj vissza a value változóval.
     */
    console.log("value", value);
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }


    /**
     * FELADAT!
     * Térj vissza a value.filter metódus eredményével (a value mindig tömb).
     * 1. Alakítsd az item[key] értékét string típusúra.
     * 2. A visszatérési érték true, ha valahol szerepel benne a phrase.
     * TIPP: az összehasonlítás előtt a két értéket alakítsd kisbetűsre.
     */
    const filteredData = value.filter( item => {
      const data = String(item[key]).toLowerCase();
      return data.includes(phrase.toLowerCase());
    })

    console.log("filteredData", filteredData);
    return filteredData;
  }

}
