# BureAuto

<div align="center">
  <img src="./doc/img/bureauto_sem_fundo.png" height="400" width="600"/>
<p align="center">Plataforma de anúncios de veículos</p>

Desenvolvido pela [BureauTech](https://github.com/BureauTech).

</div>

# Sumário

   * [Sobre](#bureauto)
   * [Sumário](#sumário)
   * [Entregas](#entregas)
        * [Modelagem de Dados](#modelagem-de-dados)
      * [Burndown](#burndown)
      * [Documentações](#documentações)
   * [Como executar localmente](#como-executar-localmente)
      * [Pré-Requisitos](#pré-requisitos)
      * [Servidor](#servidor)
      * [Cliente](#cliente)
   * [Testes da Aplicação](#testes-da-aplicação)
   * [Tecnologias](#tecnologias)
   * [Autores](#autores)

## Aplicação 

- Gif com a aplicação em execução
<div align="center">
  <img src="./doc/gif/entrega-sprint-2.gif" />
</div>

<br>


# Entregas

- [Sprint 1](https://github.com/BureauTech/BureAuto/releases/tag/1.0.0) entrega realizada em 19/09/2021.
- [Sprint 2](https://github.com/BureauTech/BureAuto/releases/tag/1.1.0) entrega realizada em 10/10/2021.

## Visão geral do projeto
<div align="center">
  <img src="./doc/img/funcionalidades_projeto.png" />
</div>
<div align="center">
  <img src="./doc/img/abordagem_spritns.png" />
</div>

<br/> 

## Entregas propostas Sprint 2
<div align="center">
  <img src="./doc/img/cards.png" />
</div>
<div align="center">
  <img src="./doc/img/cards2.png" />
</div>
<div align="center">
  <img src="./doc/img/cards3.png" />
</div>
<br/> 

## Modelagem de Dados
- Modelo Conceitual 
  
<div align="center">
  <img src="./doc/img/modelo_conceitual.png" align="center" >
 </div>
<br/>

- Modelo Lógico
  
<div align="center">
<img src="./doc/img/modelo_logico.png"  >
</div>
<br/>  

## Burndown

<div align="center">
  <img src="./doc/img/burndown2.png" />
</div>
<br/> 

## Documentações 

- [Product Backlog](./doc/artefatos/product_backlog_bureauto.pdf)

- [Documentação BureAuto](./doc/artefatos/documentacao_BureAuto.pdf)

# Como executar localmente

Para executar a aplicação completa localmente, siga as intruções a seguir:

### Pré-requisitos:

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

```
NodeJS - Versão: 15.x.x
PostgreSQL - Versão: 12.x
VueJS - Versão 2.x
```

Por padrão, o usuário e senha do banco estão definidos como `postgres`, caso essas configurações não sejam as mesmas do seu ambiente, altere as propriedades `USER_DB` e `PWD_DB` no arquivo [***src/server/.env***](/src/server/.env)

Além disso é bom ter um editor para trabalhar com o código como VSCode.

## Servidor

1. Na pasta [***src/server***](/src/server), execute os comandos abaixo: <br>

```
npm install
npm run dev
```

Ficará disponível em [localhost:3000](http://localhost/3000)

1. Execute no seu SGBD, o script SQL disponível na pasta [***src/server/resources***](/src/server/resources/). Caso não queira executar o script SQL, execute o script `UpdateDB.js` diretamente pelo seu terminal.

## Cliente

Na pasta [***src/client/***](/src/client): <br>

1. Faça a instalação dos módulos e execute-os:
   
```
npm install
npm run dev
```

Ficará disponível em [localhost:3001](http://localhost/3001)

# Testes da aplicação

Para realização dos testes unitários do backend da aplicação, vá em [***src/server***](/src/server) e execute:

```
npm run test
```

# Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NodeJS](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [VueJS](https://vuejs.org/)

Bibliotecas:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [papaparse](https://www.npmjs.com/package/papaparse)
- [pg](https://www.npmjs.com/package/pg)
- [secure-random-password](https://www.npmjs.com/package/secure-random-password)
- [typeorm](https://www.npmjs.com/package/typeorm)
- [axios](https://www.npmjs.com/package/axios)
- [core-js](https://www.npmjs.com/package/core-js)
- [vue-router](https://www.npmjs.com/package/vue-router)
- [vue-toasted](https://www.npmjs.com/package/vue-toasted)
- [vuetify](https://www.npmjs.com/package/vuetify)
- [vuex](https://www.npmjs.com/package/vuex)

# Autores

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/anaclaragraciano"><img src="https://avatars.githubusercontent.com/u/64653864?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ana Clara<br>PO</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=anaclaragraciano" title="PO">:sparkles::iphone::open_book:</a></td>
    <td align="center"><a href="https://github.com/bibiacoutinho"><img src="https://avatars.githubusercontent.com/u/56437723?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Beatriz Coutinho<br>Master</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=bibiacoutinho" title="Master">:headphones::nail_care::computer_mouse:</a></td>
    <td align="center"><a href="https://github.com/caiquesjc"><img src="https://avatars.githubusercontent.com/u/54915913?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Caique Nascimento<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=caiquesjc" title="Dev Team">:keyboard::desktop_computer::computer_mouse:</a></td>    
    <td align="center"><a href="https://github.com/charles-ramos"><img src="https://avatars.githubusercontent.com/u/25464287?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Charles Ramos<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=charles-ramos" title="Dev Team">:fist_raised::open_book::hamburger:</a></td> 
</table>
<table align="center">
    <td align="center"><a href="https://github.com/danielsantosoliveira"><img src="https://avatars.githubusercontent.com/u/55162125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Oliveira<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=danielsantosoliveira" title="Dev Team">:computer::guitar::soccer:</a></td>
    <td align="center"><a href="https://github.com/Denis-Lima"><img src="https://avatars.githubusercontent.com/u/55518511?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denis Lima<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=Denis-Lima" title="Dev Team">:computer::v::pizza:</a></td>
    <td align="center"><a href="https://github.com/RobertaAb"><img src="https://avatars.githubusercontent.com/u/27467246?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Roberta Abreu<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=RobertaAb" title="Dev Team">:v::art::sparkling_heart:</a></td>
    <td align="center"><a href="https://github.com/WeDias"><img src="https://avatars.githubusercontent.com/u/56437612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Dias<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=WeDias" title="Dev Team">:rocket::milky_way::new_moon:</a></td>
  </tr>
</table>
