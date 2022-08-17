const taggedTemplate = (texts, ...values) => 
     texts.map((text, index) => 
      `<em>${text}</em>${values[index] ? `<strong>${values[index]}</strong>` : ''}`
    ).join('');


const user = {
    firstName: 'James',
    lastName: 'Bond',
    age: '30',
    nationality: 'American',
  };

const result = `My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old. I'm ${user.nationality}.`;
console.log(taggedTemplate(result))


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
