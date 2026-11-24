# Tempo e aleatoriedade

Código que usa `new Date()` ou `Math.random()` diretamente **não é testável**.

```ts
// Difícil de testar
function vencida(t: Tarefa) { return t.prazo < new Date(); }

// Testável: o "agora" é uma entrada
function vencida(t: Tarefa, agora: Date) { return t.prazo < agora; }
```

**Testabilidade é decisão de design**: o relógio, o banco e o e-mail entram por **parâmetro** ou **interface**, e não escondidos.

<!--
Esse princípio, junto com o domínio sem dependências (Módulo 10), é o que facilita os testes.
-->
