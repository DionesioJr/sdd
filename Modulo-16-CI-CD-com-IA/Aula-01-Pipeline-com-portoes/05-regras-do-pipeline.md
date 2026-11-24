# Regras de um bom pipeline

1. **Rápido**: etapas baratas primeiro (tipos, lint); lentas por último.
2. **Falha cedo**: não gaste minutos de E2E se os tipos falham.
3. **Determinístico**: mesmo código, mesmo resultado.
4. **Obrigatório**: a `main` só aceita PR com o pipeline **verde**.
5. **Sem exceções silenciosas**: pular um portão exige decisão **registrada**.

Configure a **proteção da branch** `main`: sem pipeline verde, sem merge.

<!--
Proteção de branch é a diferença entre um pipeline que informa e um que protege.
-->
