# Exercício 4: O que não deveria estar aqui?

**Objetivo**: treinar o olho antes de enviar algo a um modelo.

1. Leia o pedido do próximo slide.
2. Marque tudo que **não** deveria ir para o modelo.
3. Reescreva o pedido mantendo só o que o modelo precisa para ajudar.

---

## Exercício 4: O pedido

```
Estou com erro ao enviar e-mail de cobrança. Segue o contexto:

.env
DATABASE_URL=postgres://admin:S3nh4Forte@10.0.0.12:5432/prod
SMTP_KEY=sk_live_51Hx9fA2kLmN0pQ

Log do erro:
Falha ao enviar para maria.souza@email.com (CPF 123.456.789-00)
Valor: R$ 1.250,00, contrato 2024/118, cliente Hospital São Lucas

Código:
async function enviarCobranca(cliente) { ... }
```

<!--
Tempo: 10 min. Todos os dados são fictícios.
Itens a remover: usuário, senha e IP do banco; chave SMTP; e-mail e CPF; nome do cliente e número do contrato.
O modelo precisa do erro, do código e da forma dos dados, não dos dados reais.
-->
