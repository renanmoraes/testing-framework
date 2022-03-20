## Teste para framework


Bom tentei utilizar um pouco de cada conhecimento que tenho de desenvolvimento, gostaria de ter utilizado a outra função com maior performace porém não teria como o retorno ser da mesma forma que foi pedido pelo teste.

Resolvi fazer em serveless pois é algo facilmente escalavel, que traria uma economia melhor e para desacoplar toda regra de negocio, além disso é uma forma de cuidar para que o sistema esteja disponivel a todo momento. Ganhamos tambem utilizando serveless resiliencia pois caso a função der erro automaticamente o aws irá levantar outra instancia quando outro cliente requisitar.

No arquivo functions tem a função que fiz inicialmente, a performace dela é bem maior do que a outra (que fiz o serveless) porém como falei a resposta nao seria no padrao pedido pelo teste.

Para rodar a função que fiz fora do serveless basta:

>$ node functions.js

## Init project

Primeiramente antes de rodar o projeto fazer `yarn install` para instalar as dependencia do serveless.

## Run teste

>$ npm run test

## Run localy

>$ npm run dev


## Agradecimento

Obrigado pela oportunidade de participar este teste, agradeço por ter chegado a esta etapa e torço para que nosso relacionamente continue.

## Contatos

`whatsapp`
(31) 995637020

`email` renan.desenvolvimento@gmail.com