
# Boas vindas ao projeto Maresias do Atlântico

# Sumário

- [Comentários sobre o projeto](#comentários-sobre-o-projeto)
- [O que é o Maresias do Atlântico?](#o-que-é-o-maresias-do-atlântico)
- [Deploy](#deploy)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Funcionalidades](#funcionalidades)
- [Documentação API](#documentação-da-api)
- [Testes](#testes)
- [Instalação e uso](#instalação-e-uso)

---

#  Comentários sobre o projeto

Esse projeto é sobre um condomínio fictício chamado 'Maresias do Atlântico', mas tive a ideia a partir de um problema real que foi no condomínio onde resido onde muitas vezes os moradores, visitantes ou prestadores de serviço precisam se identificar para ter acesso ao condomínio e há uma demora até a portaria localizar os dados dos moradores do apartamento e liberar o acesso.

Então pensei em uma solução que envolvesse conhecimentos como desenvolvedor web que pudessem solucionar esse problema, foi então que tive a ideia de fazer um sistema de rápida consulta onde após a pessoa se identificar quem estiver na portaria consegue visualizar rapidamente os dados do morador e assim entrar em contato com o mesmo. 

Esse projeto foi especial porque além de solucionar um problema real também pude me desafiar o desenvolvi com tecnologias como DDD, Orientação a Objetos, Typescript e optei por usar o mongodb, visto que as consultas ao banco de dados além de muitas também precisam ser o mais rápido possível.

possui alguma dúvida, feedback ou quer entrar em contato comigo? 
procure me através do email: tiago.emanuel.n@gmail.com

---

# O que é o Maresias do Atlântico

Uma aplicação Back end onde é possível registrar, listar, editar e deletar dados de moradores.

---

# Deploy
Acesse https://site.com.br/ e veja a API rodando em tempo real em sua máquina.

---

# Tecnologias envolvidas:
<div>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=gray" />
  </a>
  <a href="https://javascript.info/">
    <img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=gray" />
  </a>
    <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-339933?style=for-the-badge&logo=docker&color=gray" />  </a>
    <a href="https://docs.npmjs.com/">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=gray" />
  </a>
    <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/Poo-339933?style=for-the-badge&logo=Poo&color=gray" /> 
  </a>
  <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/Express.js-339933?style=for-the-badge&logo=express&color=gray" /> 
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/mongodb-339933?style=for-the-badge&logo=mongodb&color=gray" />
  </a>
  <a href="https://mongoosejs.com/">
    <img src="https://img.shields.io/badge/mongoose-339933?style=for-the-badge&logo=mongoose&color=gray" />
  </a>
  <a href="https://nodemon.io/">
    <img src="https://img.shields.io/badge/nodemon-339933?style=for-the-badge&logo=nodemon&color=gray" />
  </a>
  <a href="https://swagger.io/">
    <img src=" https://img.shields.io/badge/swagger-339933?style=for-the-badge&logo=swagger&color=gray" />
  </a>
  <a href="https://jestjs.io/pt-BR/">
    <img src=" https://img.shields.io/badge/jest-339933?style=for-the-badge&logo=jest&color=gray "/>
  </a>
  <a href="https://www.npmjs.com/package/dotenv">
    <img src=" https://img.shields.io/badge/ddd-339933?style=for-the-badge&logo=ddd&color=gray "/>
  </a>
    <a href="https://git-scm.com/">
    <img src="https://img.shields.io/badge/git-339933?style=for-the-badge&logo=git&color=gray" />
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/eslint-339933?style=for-the-badge&logo=eslint&color=gray" />
  </a>
  </a>
    <a href="https://redocly.com/">
    <img src=" https://img.shields.io/badge/redocly-339933?style=for-the-badge&logo=redocly&color=gray" />
  </a>
  </div>

---

# Funcionalidades

- Cadastrar um novo morador
- Listar dados de todos os moradores
- Listar dados de apenas um morador pelo seu número de apartamento e torre
- Listar dados de um moradores pelo seu id
- Editar dados de um morador
- Deletar dados de um morador

---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone https://github.com/TiagoEmanuel8/maresias-atlantico.git 
  
```  
  
Entre na pasta  
  
```  
cd maresias-atlantico
  
```  
### Executando o projeto com **docker**

<details>

<summary>Clique para exibir os detalhes</summary>


### Execute o comando abaixo para iniciar o docker  
  
```  
docker-compose up -d && docker exec -it maresias_atlantico bash
```  
### Instale as dependências  
  
```  
npm install  
```  
### Execute o projeto  
  
```  
npm start  
```  
ou
```  
npm run nodemon  
```  
### Caso queira parar a execução do docker use o comando
  
```  
docker-compose down --rmi local --volumes --remove-orphans
```  

*Obs: apesar do docker ter abordagens mais simples onde com um comando é possível criar tudo, mas meu objetivo inicial era popular o banco de dados sem a necessidade de testar todas as rotas e para isso deveria usar as seeders do sequelize, então a melhor solução que encontrei foi essa.*

</details>

### Executando o projeto **localmente**

<details>

<summary>Clique para exibir os detalhes</summary>
  
### Instale as dependências  
  
```  
npm install  
```  
### Execute o projeto  
  
```  
npm start  
```  
ou
``` 
npm run nodemon  
``` 
</details>

---

# Documentação da API

Os dados foram gerados no site [4devs](https://www.4devs.com.br/gerador_de_pessoas)

A documentação foi feita com o [Swagger](https://swagger.io/) e [Redocly](https://redocly.com/)

### caso queira utilizar **swagger** acesse a rota `/docs` em seu browser

<details>

<summary>Clique para exibir mais detalhes</summary>

 - Caso esteja rodando a aplicação **localmente** acesse http://localhost:3002/docs/
 *no exemplo acima o 3002 é o exemplo de onde a aplicação está rodando localmente*
 
 - Caso esteja rodando com **docker**  acesse http://localhost:3002/docs/
 - Caso esteja rodando no **site**  acesse https://site.com.br/docs/
	
</details>

e o swagger irá carregar em seu browser

![Captura de tela de 2023-05-12 17-00-55](https://github.com/TiagoEmanuel8/maresias-atlantico/assets/72472530/861ce3f9-612c-47ae-aa16-a3baaff53141)

ou

### caso queira utilizar **redocly** acesse a rota `/documentation` em seu browser

<details>

<summary>Clique para exibir mais detalhes</summary>

 - Caso esteja rodando a aplicação **localmente** acesse http://localhost:3002/documentation/
 *no exemplo acima o 3002 é o exemplo de onde a aplicação está rodando localmente*
 - Caso esteja rodando com **docker**  acesse http://localhost:3002/documentation/
 - Caso esteja rodando no **site**  acesse https://site.com.br/documentation/
Com exceção do endpoint `POST /users`, as seguintes verificações serão feitas para os outros endpoints da aplicação.

</details>

e o redocly irá carregar em seu browser

![Captura de tela de 2023-05-12 17-08-48](https://github.com/TiagoEmanuel8/maresias-atlantico/assets/72472530/ce813c2f-adab-43e9-8b9d-ac40c5d0c221)

---

# Testes

É possível abrir o terminal dentro da aplicação e digitar o comando  ou `npm run test` para testar a aplicação

![Captura de tela de 2023-05-12 17-12-23](https://github.com/TiagoEmanuel8/maresias-atlantico/assets/72472530/b34cf8d2-0f00-4080-914c-e3597af01e86)

