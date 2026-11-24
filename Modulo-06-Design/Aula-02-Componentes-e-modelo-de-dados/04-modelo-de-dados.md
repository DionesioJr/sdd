# Modelo de dados

Para cada **entidade**: campos, tipos e restrições.

```ts
type Tarefa = {
  id: string;            // UUID
  titulo: string;        // obrigatório, até 120 caracteres
  descricao?: string;
  prazo?: Date;
  prioridade: "baixa" | "media" | "alta";   // padrão: "media"
  status: "pendente" | "concluida";         // padrão: "pendente"
  criadaEm: Date;
  concluidaEm?: Date;
};
```

Valores possíveis (`status`, `prioridade`) são **enumerados**, nunca texto livre.

<!--
Note que "concluidaEm" vem do critério de aceite do RF-03. Todo campo deve ter origem num requisito.
-->
