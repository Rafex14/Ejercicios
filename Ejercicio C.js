

function palindromo(palabra){

const revisa = palabra.split("").reverse().join("");

return revisa === palabra ? "es palindromo":"no es palindromo"
}

console.log(palindromo("oso"))