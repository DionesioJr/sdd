# Uma fonte da verdade: o schema

Com **Zod**, o mesmo schema vira tipo **e** validação:

```ts
import { z } from "zod";

export const TarefaSchema = z.object({
  id: z.string().uuid(),
  titulo: z.string().min(1).max(120),
  prioridade: z.enum(["baixa", "media", "alta"]).default("media"),
  prazo: z.coerce.date().optional(),
});

export type Tarefa = z.infer<typeof TarefaSchema>;
```

Mudou o schema? O **tipo** muda junto, e a **validação** também.

<!--
Mostrar o ganho: um só lugar para editar. A IA também respeita melhor quando há um único lugar.
-->
