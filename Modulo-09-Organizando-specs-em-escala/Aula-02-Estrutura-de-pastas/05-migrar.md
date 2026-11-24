# Migrar sem perder nada

1. **Crie a estrutura vazia** e faça um commit.
2. **Mova um domínio por vez** (comece por Tarefas).
3. **Preserve os IDs** dos requisitos (`RF-01` continua `RF-01`).
4. Atualize **links e referências** (tarefas, testes, commits).
5. Peça à IA para **conferir**: nada foi perdido, nada foi duplicado.

Um commit por domínio. Se algo der errado, `git revert`.

<!--
Dica: pedir ao agente uma lista de todos os RF antes e depois da migração, e comparar.
-->
