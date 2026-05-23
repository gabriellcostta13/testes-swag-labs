# 🧪 Testes Automatizados — Swag Labs

Projeto de QA desenvolvido como parte do meu portfólio profissional.
Inclui testes manuais documentados e testes automatizados com Cypress.

## 🌐 Site testado
[Swag Labs](https://www.saucedemo.com) — loja online de demonstração para prática de QA.

## 📋 Testes manuais
5 casos de teste documentados em planilha cobrindo cenários positivos e negativos da tela de login.

| ID | Cenário | Tipo | Status |
|---|---|---|---|
| CT-001 | Login com credenciais válidas | Positivo | ✅ Passou |
| CT-002 | Login com senha incorreta | Negativo | ✅ Passou |
| CT-003 | Login com campos vazios | Negativo | ✅ Passou |
| CT-004 | Imagens repetidas com problem_user | Negativo | ❌ Bug encontrado |
| CT-005 | Botão Remove inoperante com error_user | Negativo | ❌ Bug encontrado |

## 🐛 Bugs encontrados
- **BUG-001:** No CT-004 todas as imagens dos produtos são idênticas para o `problem_user`
- **BUG-002:** No CT-005 o botão "Remove" não funciona na página de produtos para o `error_user`

## 🤖 Testes automatizados
Testes E2E desenvolvidos com Cypress cobrindo os mesmos cenários da planilha manual.

**Resultado da execução:**
- ✅ 3 testes passaram
- ❌ 2 testes falharam (confirmando os bugs documentados)

## 🛠️ Tecnologias
- [Cypress](https://www.cypress.io/) v15
- JavaScript
- Node.js

## ▶️ Como rodar os testes
\```bash
npm install
npx cypress open
\```

## 👨‍💻 Autor
Gabriel — estudante de QA em desenvolvimento
