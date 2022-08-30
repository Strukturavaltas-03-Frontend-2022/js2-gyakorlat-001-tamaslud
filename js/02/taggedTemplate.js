const taggedTemplate = (texts, ...values) => {
  let result = texts.map((text, index) => `<em>${text}</em>` + `<strong>${values[index]}</strong>`).join('')
  result = result.replace('undefined', '');
  result = result.replace('<strong></strong>', '');
  result = result.replace('<em></em>', '');
  return result
}


export default taggedTemplate;

/*
## 2. feladat
- A `js/02/taggedTemplate.js` fájlban dolgozz!
- Írj egy olyan függvényt (tagged template), amely a paraméterként kapott texts, values értékeket úgy adja vissza egy string-ben, hogy 
a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a HTML-be, tehát a megfelelő tagekkel kiegészített string-et adjon vissza!
- Például ebből, hogy `James`, ez legyen: `<strong>James</strong>`.
- A függvény neve `taggedTemplate` legyen!
- Összefoglalva: a kapott String-eket kell HTML-elemekké (tagekké) alakítani.
*/
