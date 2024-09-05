// Evelyn Cassinotte

// Desenvolvimento de Software multiplataforma
// Segundo Semestre

// Código original

/*
const x, y = 5  
x + 10

function somar () {
  r = x + y
}

 console.log(somar())
 */

// Observações sobre o código Original
/*
A linha 9 está incorreta porque, para declarar duas constantes, é necessário utilizar o operador 
de atribuição para ambas (x e y), ou então declarar a segunda constante em uma linha separada. 
Exemplos corretos seriam: {const x = 5, y = 10;} ou {const x = 5; const y = 10;}.

Na linha 10, há uma tentativa de modificar o valor de x, mas como x foi declarado como uma constante,
seu valor não pode ser alterado após a atribuição inicial. Para corrigir isso, 
x deve ser declarado como uma variável, utilizando let: {let x = 5;}.

Após essas mudanças, ao executar o código, o retorno de {console.log} é {undefined}.
Isso acontece porque a função somar não contém um {return} explícito, 
então o JavaScript utiliza o retorno padrão de funções, que é {undefined}.
Para corrigir e obter o valor esperado, é necessário adicionar um {return} à função,
retornando a constante {r}, que armazena a soma de {x} e {y}.
*/

// Código corrigido

const y = 5;
let x = 5;
x += 10;

function somar() {
    const r = x + y;
    return r;
}

console.log(somar());