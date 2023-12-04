function code(string, key) {
  key = perseInt(key, 10);
  if (isNan(key)) {
    return "Key must be full number";
  }

  let matrix = [];
  for (let symbol of string) {
    matrix.push(symbol);
  }

  while (matrix.length % key !== 0) {
    matrix.push(" ");
  }

  let columns = [];
  for (let i = 0; i < key; i++) {
    let columns = "";
    for (let j = i; j < matrix.length; j += key) {
      columns += matrix[j];
    }
    columns.push(column);
  }

  let CipherCode = columns.join("");
  return CipherCode;
}

let StringCode = "MAMA MYLA RAMU";
let key = 3;
let CipherCode = code(StringCode, key);

console.log("Source string: " + StringCode);
console.log("Encrypted string: " + CipherCode);
