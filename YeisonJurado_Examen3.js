function matrices () {


console.log(matriz1.length);
console.log(matriz1);
console.log(matriz2.length);
console.log(matriz2);

}

function sumarMatrices(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}

function multiplicarMatrices(a, b) {
    var aNumFilas = a.length, aNumCols = a[0].length,
        bNumFilas = b.length, bNumCols = b[0].length,
        m = new Array(aNumFilas);  
    for (var k = 0; k < aNumFilas; ++k) {
      m[k] = new Array(bNumCols); 
      for (var c = 0; c < bNumCols; ++c) {
        m[k][c] = 0;             
        for (var i = 0; i < aNumCols; ++i) {
          m[k][c] += a[k][i] * b[i][c];
        }
      }
    }
    return m;
  }

let matriz1 = [[3, 2, 1], [1, 2, 3], [2, 3, 1]];
let matriz2 = [[1, 1, 2], [2, 1, 1], [1, 2, 1]];
matrices();

let c = sumarMatrices(matriz1,matriz2);
console.log(c);

let m = multiplicarMatrices(matriz1,matriz2);
console.log(m);
