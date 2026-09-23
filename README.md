# 🧪 Swag Labs — Testes Manuais e Automação com Cypress

Projeto de QA focado na documentação de cenários de teste, identificação
de defeitos e automação dos mesmos fluxos utilizando Cypress.

## 🎯 Objetivo

Demonstrar um fluxo prático de QA:

**Cenário manual → Execução → Identificação do defeito → Documentação →
Automação**

O projeto utiliza a aplicação [Swag Labs](https://www.saucedemo.com/)
como sistema sob teste.

## 🧪 Cenários de teste

| ID     | Cenário                                      | Resultado           |
|--------|----------------------------------------------|---------------------|
| CT-001 | Login com credenciais válidas                | Passa               |
| CT-002 | Login com senha inválida                     | Passa               |
| CT-003 | Login com campos vazios                      | Passa               |
| CT-004 | Verificação das imagens com `problem_user`   | Defeito reproduzido |
| CT-005 | Verificação do botão Remove com `error_user` | Defeito reproduzido |

## 🐞 Defeitos identificados

### BUG-001 — Imagens inconsistentes com `problem_user`

**Cenário:** acesso utilizando o usuário `problem_user`.

**Comportamento observado:** as imagens apresentadas nos produtos não
possuem o comportamento esperado de diferenciação entre os itens.

**Impacto:** pode comprometer a identificação visual dos produtos.

### BUG-002 — Botão Remove com comportamento incorreto

**Cenário:** acesso utilizando o usuário `error_user`.

**Comportamento observado:** o botão `Remove` não apresenta o
comportamento esperado durante a interação com o produto.

**Impacto:** interfere no fluxo de gerenciamento dos itens do carrinho.

## 🤖 Automação

Os cenários documentados foram transformados em testes automatizados com
Cypress, incluindo os cenários que reproduzem os defeitos encontrados.

### Estrutura

``` text
cypress/
├── e2e/
│   └── login.cy.js
└── support/
    └── commands.js
```

## 🛠️ Tecnologias

- Cypress
- JavaScript
- Node.js
- Git/GitHub

## 🚀 Executando os testes

Instale as dependências:

``` bash
npm install
```

Abra o Cypress:

``` bash
npx cypress open
```

Execute em modo headless:

``` bash
npx cypress run
```

## 📌 O que este projeto demonstra

- Elaboração de cenários de teste
- Testes de login
- Validação de comportamento da aplicação
- Identificação e documentação de defeitos
- Automação de testes de UI
- Reprodução automatizada de bugs
- Organização de testes com Cypress

## 👤 Autor

**Gabriel Costa \| Quality Assurance (QA)**

[GitHub](https://github.com/gabriellcostta13)
