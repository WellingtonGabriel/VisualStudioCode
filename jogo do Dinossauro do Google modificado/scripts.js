const dino = document.getElementById("dino"); /*A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.
Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

O método getElementById() de Document retorna um objeto de elemento que representa o elemento cuja propriedade id
corresponde ao valor fornecido.Este método é usado para manipular um elemento em nosso documento. Sintaxe: const gfg = document.*/

const cactus = document.getElementById("cactus");

function jump() { /* cria a ação de pular

 Uma user defined function (função definida pelo usuário) é uma rotina, normalmente escrita com a linguagem T-SQL, que executa uma ação (como um cálculo complexo) 
 e retorna o resultado dessa ação como um valor. O valor de retorno pode ser um valor escalar (único) ou uma tabela.*/
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 1000);
  }
}

let isAlive = setInterval(function () { 


  //obter a posição y atual do dino 
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  //obter a posição X atual do cacto
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  //detecta colisão
  if (cactusLeft < 50 && cactusLeft > 10 && dinoTop >= 140) {

    //colisão
    alert("YOU LOSE!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
}); /*addEventListener é a maneira de registrar uma espera de evento como especificada no W3C DOM.
Seus benefícios são os seguintes: Permite mais de um manipulador por evento.*/