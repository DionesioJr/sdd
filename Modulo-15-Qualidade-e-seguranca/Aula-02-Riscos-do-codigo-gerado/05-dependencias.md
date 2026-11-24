# Dependências: falsas e vulneráveis

**Alucinadas**: o modelo sugere `npm install lodash-extras-pro`, que **não existe**. Pior: alguém pode **registrar** esse nome com código malicioso (ataque conhecido como *slopsquatting*).

**Vulneráveis**: o modelo sugere versões antigas, com falhas já conhecidas.

Defesas:

- **Confira** cada pacote novo: existe, autor, downloads, repositório.
- `npm audit` no CI para falhas conhecidas.
- Regra no `AGENTS.md`: **não adicionar dependências sem pedir**.

<!--
Retomar o slide "pacotes alucinados", Módulo 01, Aula 03. Agora com defesas.
-->
