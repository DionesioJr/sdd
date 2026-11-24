# Exercício 3: Encontre o erro

**Regra (a mesma da Aula 01)**: está atrasada quando o prazo é **anterior** ao dia de hoje e o status é `aberta`. Tarefa com prazo hoje não está atrasada.

Encontre **dois** erros no código do próximo slide e escreva os casos de teste que os revelariam.

---

## Exercício 3: O código gerado pela IA

*Atrasada = prazo antes de hoje **e** status `aberta`.*

```ts
type Tarefa = {
  id: string;
  titulo: string;
  prazo: Date; // meia-noite do dia do prazo
  status: "aberta" | "concluida" | "cancelada";
};

function tarefasAtrasadas(tarefas: Tarefa[], hoje = new Date()): Tarefa[] {
  return tarefas
    .filter((t) => t.prazo < hoje && t.status !== "concluida")
    .sort((a, b) => a.prazo.getTime() - b.prazo.getTime());
}
```

<!--
Tempo: 20 min.
Erro 1: `hoje` tem hora (ex.: 14h). Uma tarefa com prazo hoje (00:00) é menor que agora, então é marcada como atrasada.
  Correção: comparar com o início do dia de hoje.
Erro 2: `status !== "concluida"` deixa passar `cancelada`. A regra pede status `aberta`.
Casos de teste: tarefa com prazo hoje; tarefa cancelada com prazo vencido.
Fechar: sem a regra escrita, nenhum dos dois seria "erro".
-->
