
# Caracterica JS

JS é uma linguagem de tipagem dinâmica (não precisa definir um tipo para a var, e pode ser modificado o tipo no decorrer do codigo)

JS é uma linguagem de multiparadigma, que consegue resolver um problemas de varias formas diferentes

JS é uma linguagem interpretada

## JavaScript: tipos, variaveis e funções

> JS tem o var que armazena dados, porém a tag var permite ter duas var com o mesmo nome, para corrigir este problema, se usa o LET

> O CONST serve para armazenar dados que não irão ser modificado depois

### Conversão 

```js
const numero = 456;
const numeroString = Number("456")

console.log(numero + numeroString)
// > 912

let telefone = 12341234;
console.log("O telefone é " + String(telefone));  

// > “O telefone é  12341234”
```
