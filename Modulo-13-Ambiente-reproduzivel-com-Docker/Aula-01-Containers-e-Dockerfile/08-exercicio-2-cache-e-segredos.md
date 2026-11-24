# Exercício 2: Cache e segredos

**Objetivo**: ver o cache funcionando e o segredo protegido.

1. Altere um arquivo de código e reconstrua: a camada do `npm ci` foi **reutilizada**?
2. Altere uma dependência e reconstrua: ela foi **refeita**?

---

## Exercício 2: Segredo

3. Crie um `.env` falso com `SEGREDO=abc`. Reconstrua **sem** `.dockerignore` e procure o arquivo na imagem (`docker run --rm gestor ls -a`).
4. Reponha o `.dockerignore` e repita.

**Discussão**: o que poderia ter vazado se esse `.env` fosse real?

<!--
Tempo: 35 min.
Usar apenas valores falsos.
-->
