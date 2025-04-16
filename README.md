# 📦 **Sobre o Projeto**

Este é um projeto de um sistema de filmes, com funcionalidades de cadastro, login e visualização de filmes em diferentes seções (incluindo filmes em alta e lançamentos). Ele foi desenvolvido com Next.js, React e integra autenticação com JWT (JSON Web Token) para proteger as rotas e garantir que somente usuários autenticados possam acessar certos conteúdos.

## 🎬 **API de filmes**

O projeto utiliza a The Movie Database API para construção da aplicação. Para acesso dos endpoints, é necessário ter uma conta e utilizar uma API KEY da sua conta, no caso do projeto, é necessário colocar a API KEY no arquivo *".env"*.

## 🔐 **API de Cadastro e Login**

💿 **Banco de dados**

Como banco de dados, o projeto utiliza **SQLite**. Junto a ele, também faz uso do ORM Prisma, para facilitar a construção, conexão e manipulação do banco.

**Endpoints**

**/api/register**
A API de Cadastro permite que novos usuários se registrem no sistema.

- **Método:** `POST`
- **Corpo:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Resposta:**
  - `201 Created`: Usuário registrado com sucesso.
  - `400 Bad Request`: Dados inválidos ou faltando.

**/api/login**
A API de Login permite que usuários existentes façam login no sistema.

- **Método:** `POST`
- **Corpo:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Resposta:**
  - `200 OK`: Usuário autenticado com sucesso. Retorna um JWT no corpo da resposta.
  - `401 Unauthorized`: Credenciais inválidas.

**JWT (JSON Web Token):**

Ao fazer login, o sistema retorna um token JWT que deve ser armazenado e enviado com cada requisição autenticada para proteger as rotas.

## ⚙️ **Middleware e Autenticação JWT**

A autenticação é realizada utilizando JWT (JSON Web Token). Após o login, o token JWT é gerado e enviado para o cliente. No cliente, este token é armazenado nos cookies. Além disso, o middleware de verifica a validade do token JWT em todas as rotas que exigem autenticação. Se o token não for fornecido ou for inválido, o acesso é negado com um erro `401 Unauthorized`, redirecionando o usuário para o login e removendo o token antigo dos cookies.

## 🖥️ **Telas do Sistema**

As telas do sistemas são divididas em dois tipos: **privadas** e **públicas**.

### **Públicas**

*/register - Tela de Cadastro*

Esta página permite que novos usuários se cadastrem no sistema. Eles precisam fornecer um nome de usuário, email e senha. Ao concluir o cadastro com sucesso, o usuário será redirecionado para a tela inicial, já estando logado.

*/login - Tela de Login*

Na tela de login, os usuários podem inserir suas credenciais (nome e senha) para obter um token JWT e acessar as demais funcionalidades do sistema. Se as credenciais forem inválidas, será exibida uma mensagem de erro.

### **Privadas**

*/home - Tela Principal*

A página principal exibe algumas listas de filmes. Pode incluir filmes em alta, por gênero como ação, comédia, etc. Junto a isso, também conta com uma barra de pesquisa para que o usuário pesquise um filme por seu nome.

*/movie/[id] - Página de Detalhes do Filme*

Esta página exibe detalhes sobre um filme específico. O usuário pode acessar informações como sinopse, avaliação, lançamento e outros dados relacionados ao filme. A URL da página inclui o `id` do filme.

*/top-hated - Filmes Mais Bem Avaliados*

Nesta página, são exibidos os filmes que estão com as melhores avaliações. A lista é baseada em críticas e classificações dos usuários.

*/now-playing - Lançamentos em Cartaz*

Aqui, o usuário pode ver todos os filmes que estão sendo exibidos atualmente nos cinemas. A página mostra os filmes em cartaz, com detalhes como título, data de lançamento e uma breve descrição.

## ⛓ **Persistência**

Para este projeto, não enxerguei a necessidade de implementar alguma ferramenta de persistência como **Redux** ou **useContext**, dado que não há o que aplicar isso com a ideia do projeto.

## 🚀 **Como Rodar o Projeto**

Clone o repositório:

```bash
git clone <url-do-repositório>
cd <nome-do-repositório>
```

Instale as dependências:

```bash
npm install
```
Inicie o banco de dados:

```bash
npx prisma migrate dev --name init
```

Execute o projeto:

```bash
npm run dev
```

Pronto! O projeto estará rodando!
