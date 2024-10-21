# Aplicação em React com Autenticação e Roteamento

Esta é uma aplicação em React que esta no inicio de seu desenvolvimento, ela inicia com uma tela de login, onde as credenciais dos usuários são verificadas. O projeto implementa o gerenciamento de rotas para garantir que apenas usuários autenticados possam acessar determinadas páginas.

## Tecnologias Utilizadas

- **React & React DOM** (v18.3.1): Bibliotecas principais para construção da interface e renderização do DOM.
- **React Router** (v6.27.0): Gerencia o roteamento da aplicação, permitindo navegação fluida entre as páginas.
- **Vite** (v5.4.8): Ferramenta de build que otimiza o desenvolvimento e a construção do projeto.
- **Material-UI**: Framework de componentes para criar uma interface moderna e responsiva.
- **Emotion**: Biblioteca para estilização de componentes.
- **ESLint**: Ferramenta de linting que garante a qualidade do código.

## Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Para verificar se o Node.js está instalado, execute o seguinte comando no terminal:

```bash
node -v
````

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

Clone o repositório:
```bash
git clone https://github.com/Zacanini/ProjetoConsultorio.git
````

Navegue até o diretório do projeto:
```bash
cd nome-do-repositorio
````

Instale as dependências:

Execute o seguinte comando para instalar todas as dependências necessárias:
```bash
npm i
````

Inicie o servidor de desenvolvimento:

Para iniciar a aplicação em modo de desenvolvimento, use:
```bash
npm run dev
````

Abra seu navegador:
Acesse:
```bash
 http://localhost:5173
````
para visualizar a aplicação.

## Estrutura do Projeto
A aplicação possui as seguintes funcionalidades principais:

- **Tela de Login**: Os usuários inserem suas credenciais para autenticação.
- **Verificação de Credenciais**: Após o envio, o sistema valida as credenciais e redireciona o usuário para a página inicial.
- **Bloqueio de Rotas Não Autenticadas**: Usuários não autenticados são redirecionados de volta à tela de login ao tentar acessar páginas restritas.
- **Página Inicia**l: Uma vez autenticado, o usuário é levado a uma página inicial com botões para visualizar dados que serão inseridos em breve.
