# Três fontes, três verdades

O tipo `Tarefa` existe em três lugares:

- na interface TypeScript;
- na validação da API (outro código);
- na documentação (um texto).

Alguém adiciona `prioridade` ao tipo, esquece da validação, e a documentação continua desatualizada. O frontend envia o campo, a API **ignora**, e o usuário perde dados sem erro nenhum.

<!--
É um dos tipos mais comuns de bug em sistemas gerados por IA: partes que não conversam.
-->
