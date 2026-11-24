# Exercício 1: Deploy e rollback

**Objetivo**: publicar e voltar atrás.

1. Configure o pipeline para publicar a imagem com **tag** (`v0.4.0`) ao criar uma tag no Git.
2. Faça o deploy em um ambiente (pode ser local com Docker, ou uma VPS).
3. Provoque um problema (versão `v0.4.1` com erro) e faça o **rollback** para `v0.4.0`.

**Observe**: quanto tempo levou o rollback? Foi um comando só?

<!--
Tempo: 60 min.
Se não houver servidor, simular com docker compose e duas tags.
-->
