# Exercício 1: Rode o agente contido

**Objetivo**: reduzir o raio de ação do agente.

1. Verifique o que o agente **enxerga**: variáveis de ambiente, pastas fora do projeto, credenciais de provedores de nuvem.
2. Rode a sessão num **ambiente isolado** (container ou usuário sem privilégios) com **só** a pasta do projeto.
3. Confirme que ele **não** vê o `.env` real nem as suas credenciais.

**Observe**: o que o agente alcançava antes que você nem imaginava?

<!--
Tempo: 45 min.
Se o aluno usar dev container, usar a imagem do projeto com a pasta montada.
-->
