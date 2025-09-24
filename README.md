# Multi-Catálogo com Favoritos

Um catálogo interativo desenvolvido com **React** e **TypeScript**, utilizando **Vite** como *bundler*. O projeto exibe *cards* de Animais, Livros e Pessoas, com funcionalidade de gerenciamento global de favoritos, permitindo aos usuários marcar e organizar seus itens favoritos de forma eficiente.

---

## Funcionalidades

- Exibição de catálogos de **Animais**, **Livros** e **Pessoas** em formato de cards.
- Sistema de **favoritos** gerenciado globalmente via Context API.
- Interface responsiva e moderna.
- Configuração com TypeScript para maior segurança de tipos.
- Suporte a **Hot Module Replacement (HMR)** com Vite.
- Configuração avançada de *linting* com ESLint para regras *type-aware*.

---

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: *Superset* do JavaScript para tipagem estática.
- **Vite**: Ferramenta de *build* rápida com suporte a HMR.
- **ESLint**: *Linting* com regras específicas para TypeScript e React.
- **Tailwind CSS** (opcional, caso esteja usando para estilização).
- **Node.js**: Ambiente de execução para desenvolvimento.

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

-   [Node.js](https://nodejs.org/) (versão 16 ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
-   Um editor de código, como [VS Code](https://code.visualstudio.com/)

---

## Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/jonasssgabriel/Multi-Cat-logo-com-Favoritos-.git](https://github.com/jonasssgabriel/Multi-Cat-logo-com-Favoritos-.git)
    ```

2.  Acesse o diretório do projeto:
    ```bash
    cd Multi-Cat-logo-com-Favoritos-
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    ou
    ```bash
    yarn dev
    ```

5.  Abra o navegador em `http://localhost:5173` (ou a porta indicada pelo Vite) para visualizar o projeto.

*Certifique-se de que os arquivos `tsconfig.node.json` e `tsconfig.app.json` estejam configurados corretamente.*

---

## Como Usar

1.  Navegue pelo catálogo de **Animais**, **Livros** ou **Pessoas** usando a interface.
2.  Clique no ícone de coração (ou similar) para adicionar ou remover itens dos favoritos.
3.  Os favoritos são gerenciados globalmente e persistem durante a sessão (ou conforme implementado no backend, se aplicável).
4.  Explore os *cards* para visualizar detalhes de cada item.

---

