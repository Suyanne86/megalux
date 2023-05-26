const readline = require('prompt-sync')({sigint:true}); //serve para otimizar o codigo na hora de escrever
const palavras = ['Abacate','Abacaxi','Açaí','Acerola','Ameixa','Amora','Ananás','Banana','Cacau','Caqui','Carambola','Cereja','Coco','Cranberry','Damasco','Figo','Framboesa','Goiaba','Groselha','Jabuticaba','Jaca','Jambo','Kiwi','Laranja','Limão','Maçã','Mamão','Manga','Maracujá','Melancia','Melão','Mirtilo','Morango','Pera','Pêssego','Pitanga','Romã','Tangerina','Uva','Atemoia','Bergamota','Cajá','Caju','Cambuci','Camu-camu','Caramboleira','Chirimoya','Dovyalis','Eritrina','Fedegoso','Feijoa','Graviola','Guabiju','Guabiroba','Guaraná','Iba','Ingá','Ipê-roxo','Jabuticabeira','Jamelão','Jatobá','Juá','Lichia','Mabolo','Marmelo','Nêspera','Noni','Olho-de-cabra','Pata-de-vaca','Pequi','Pindaíba','Piquiá','Quixaba','Rambutan','Rosal','Sapoti','Siriguela','Tamarindo','Uvaia','Veludo','Xixá','Zimbro','Zimbro-da-praia','Zimbro-de-jardim','Zimbro-dos-montes','Ziziphus','Zumbi'];
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]; //math.radom ele gera um numero aleatorio entre 0 e 1, math.floar serve para arredondar para baixo e obter um indice calido dentro do array
console.log('Bem-vindo ao jogo de adivinhação de palavras!');
console.log('Adivinhe a fruta secreta.');
let tentativas = 4; // correspondente ao numero de tenativas restantes que o user tera 
let acertou = false;

while(tentativas > 0){
    let palpite = readline('Digite seu Palpite:  ');
    let userAcertou = verificarPalpite(palpite.toLocaleLowerCase());
    console.log(userAcertou);
    if (userAcertou === 'Parabéns você acertou a fruta premiada'){
        acertou = true; 
        break;
    } // se o usuario acertar a fruta que foi escolhida pela maquina o codigo ira parar aqui ISSO AQUI E O BREAK NAO A DEFINICAO QUE O USUARIO GANHOU
    tentativas--;
 } //Nesse contexto específico, a variável tentativas é utilizada para controlar o número de tentativas restantes para adivinhar a palavra secreta. A cada iteração do loop, essa instrução é executada, diminuindo o valor de tentativas em 1. Isso significa que, a cada tentativa do usuário, o número de chances restantes é reduzido.
    if (acertou){
        console.log('Parabéns! Você acertou a palavra secreta.');
    }
    else {
        console.log('Suas tentativas acabaram. A palavra secreta era: ' + palavraSecreta);
    }
function verificarPalpite(palpite){
    if (palpite === palavraSecreta){
        return 'Parabéns você acertou a fruta premiada'
    }
    else {
        return 'Você errou! Você possui apenas ' + tentativas + ' chances'
    }
}
