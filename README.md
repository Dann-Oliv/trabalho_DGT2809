# Catálogo de Livros - Angular

## 📚 Sobre o Projeto

Sistema web desenvolvido em Angular para gerenciamento de um catálogo de livros. Permite visualizar, adicionar e excluir livros de uma biblioteca pessoal.

**Disciplina:** DGT2809 - Aprofundamento em Desenvolvimento Front-End

## 🎯 Objetivo

Desenvolver uma aplicação Angular completa demonstrando:
- Implementação de serviços injetáveis
- Criação de componentes com TypeScript e HTML
- Gerenciamento de formulários reativos
- Sistema de navegação entre páginas (routing)

## 🚀 Funcionalidades

- **Listagem de Livros:** Visualização de livros em tabela com título, resumo, editora e autores
- **Cadastro de Livros:** Formulário para adicionar novos livros ao catálogo
- **Exclusão de Livros:** Remoção de livros através de botão na listagem
- **Navegação:** Menu de navegação entre páginas de listagem e cadastro

## 🛠️ Tecnologias Utilizadas

- Angular 17
- TypeScript
- Bootstrap 5
- Angular Router
- Angular Forms

## 📋 Pré-requisitos

- Node.js v20.19+ ou v22.12+
- npm (gerenciador de pacotes)
- Angular CLI

## ⚙️ Instalação e Execução

```bash
# 1. Instalar Node.js (versão 20 LTS ou superior)
# Baixe em: https://nodejs.org/

# 2. Instalar Angular CLI globalmente
npm install -g @angular/cli

# 3. Navegar até a pasta do projeto
cd livros-angular

# 4. Instalar dependências
npm install

# 5. Executar servidor de desenvolvimento
ng serve

# 6. Acessar no navegador
# http://localhost:4200/
```

## 📁 Estrutura do Projeto

```
src/app/
├── editora.ts                      # Modelo de dados Editora
├── livro.ts                        # Modelo de dados Livro
├── controle-editora.service.ts     # Serviço para gerenciar editoras
├── controle-livros.service.ts      # Serviço para gerenciar livros
├── livro-lista/                    # Componente de listagem
│   ├── livro-lista.component.ts
│   ├── livro-lista.component.html
│   └── livro-lista.component.css
├── livro-dados/                    # Componente de cadastro
│   ├── livro-dados.component.ts
│   ├── livro-dados.component.html
│   └── livro-dados.component.css
├── app-routing.module.ts           # Configuração de rotas
├── app.module.ts                   # Módulo principal
└── app.component.html              # Template principal com menu
```

## 🔗 Rotas

- `/lista` - Página de listagem de livros (rota padrão)
- `/dados` - Página de cadastro de novos livros

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como trabalho prático da disciplina DGT2809, seguindo as especificações fornecidas para implementação de um sistema CRUD básico em Angular.
