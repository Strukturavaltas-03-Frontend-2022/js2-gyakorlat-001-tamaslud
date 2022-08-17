function concatArrays (char, ...arrays) {
    let newArray = []
    for (let arr of arrays){
        for (let elem of arr){
            elem.includes(char) ? {} : (
                newArray.includes(elem) ? {} : newArray.push(elem.trimEnd())
            );
        }
    }
    return newArray
}

export default concatArrays;


/*

console.log(concatArrays('r', ['robi', 'géza'], [' márton   '], ['hammadata'], ['béla', 'géza']));

Írj egy függvényt, amely első paraméterként egy karaktert kap, 
a többi paraméter pedig tetszőleges számú tömb, amelyek string-eket tartalmaznak!  
A függvény:
   - összefűzi egy tömbbe az összes elemet,
   - eltávolítja az ismétlődő elemeket,
   - eltávolítja az összes olyan string-et, amely tartalmazza az első 
   paraméterként megadott karaktert,
   - eltávolítja a string-ek végén lévő whitespace karaktert,
   - visszaadja ezt az új tömböt.
   */