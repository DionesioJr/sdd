# TypeScript: a rede de segurança

O modelo pode inventar uma função que não existe (alucinação, Módulo 01). Em JavaScript puro, você descobre quando o programa quebra. Em TypeScript, **o compilador avisa antes de rodar**.

```ts
type Tarefa = { id: number; titulo: string; concluida: boolean };

function concluir(t: Tarefa) {
  t.finalizada = true; // erro: 'finalizada' não existe em Tarefa
}
```

Tipos são **spec executável**: dizem ao agente (e ao compilador) o que é válido.

<!--
Segurar o ponto: tipos não provam que a lógica está correta, mas eliminam uma classe inteira de erros do agente em segundos e de graça.
-->
