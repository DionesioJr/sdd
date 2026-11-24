# Exercício 1: A rede de segurança

**Objetivo**: desfazer um estrago do agente em segundos.

1. Na pasta `gestor-de-tarefas`, rode `git init` e crie um `.gitignore`.
2. Faça o primeiro commit com o que existe.
3. Abra o Pi e peça: *"Reorganize todo o código como achar melhor."*
4. Rode `git status` e `git diff` e leia o que mudou.

---

## Exercício 1: Desfaça

5. Descarte tudo com `git restore .` (e apague arquivos novos que ele criou).
6. Confirme que `git status` está limpo.

**Observe**: quanto tempo levou para voltar? Sem Git, como você faria?

<!--
Tempo: 20 min.
Arquivos novos não são removidos por git restore. Mostrar `git clean -n` (simulação) e depois `git clean -fd`, com cuidado.
-->
