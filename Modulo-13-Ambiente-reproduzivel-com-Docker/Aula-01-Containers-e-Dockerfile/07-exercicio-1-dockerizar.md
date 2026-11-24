# Exercício 1: Dockerize o gestor

**Objetivo**: ter a aplicação rodando num container.

1. Escreva o `Dockerfile` (peça ao agente, mas **revise** cada linha).
2. Crie o `.dockerignore`.
3. Rode:
   ```bash
   docker build -t gestor .
   docker run --rm -p 3000:3000 gestor
   ```
4. Acesse a aplicação no navegador.

**Observe**: que linha do Dockerfile você não entendeu? Pergunte ao agente e **confira na documentação**.

<!--
Tempo: 40 min.
Se o agente usar `latest` como tag, comentar: versão fixa é parte da reprodutibilidade.
-->
