# Blogs API
<!-- Breve comentário sobre o projeto -->
Neste projeto foi **desenvolvido uma API e um banco de dados** para a produção de conteúdo para um blog!

## 🚀 Habilidades
> Para esse projeto, foi necessário:
<!-- Listar 2 a 3 habilidades desenvolvidas -->
- Desenvolver uma API RESTful de um CRUD (Create, Read, Update e Delete);
- Utilizar o ORM Sequelize para a leitura e escrita em um banco de dados MySQL/PostgreSQL;
- Gerar tokens a partir de informações como login e senha, autenticar e autorizar o acesso a rotas do Express, usando o token JWT.

## 🤖 Tecnologias
> Este projeto foi desenvolvido com as seguintes tecnologias:
<!-- Listar 3 a 5 principais tecnologias usadas -->
- Docker
- Node.js
- Express
- Sequelize
- JWT (JSON Web Token)

## 🧑‍💻 Como executar
> Siga os passos para executar o projeto corretamente:
1. **Instale** as dependências:
    1. Rode os serviços node e db com o comando:
    ```
        docker-compose up -d --build
    ```
    1. Use o comando: 
    ```
        docker exec -it blogs_api bash
    ```
        1. Dentro do container, instale as dependências: 
    ```
        npm install
    ```

1. Como **executar** a aplicação:
    1. Dentro do container, crie o banco de dados:
    ```
        npm start
    ```
    1. Caso deseje que o banco de dados venha com dados prontos, execute:
    ```
        npm run seed
        npm start
    ```

1. Como **testar** a aplicação:
    *<br> 🚧 Em contrução 🚧 <br>*
    
## 📧 Contatos
> Caso tenha alguma dúvida sobre o projeto ou verifique algum erro, entre em contato por:
<div align="center" style="display: inline_block">
  <a href="https://www.linkedin.com/in/tiagoprysthon" target="_blank"><img height="28rem" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
  <a href = "mailto:tiagoprysthon14@gmail.com"><img height="28rem" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
