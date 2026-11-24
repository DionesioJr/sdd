# Exercício 1: Revisar um diff

**Objetivo**: usar o roteiro de leitura sobre código com defeitos.

Leia o trecho abaixo, que o agente entregou para *"carregar tarefas de um arquivo"*:

```ts
import { readFileSync } from "fs";
import lodashx from "lodash-extras";

export function carregar(caminho: string): any {
  try {
    return JSON.parse(readFileSync(caminho, "utf8"));
  } catch (e) {}
}
```

Aplique as 5 perguntas do roteiro e liste **todos** os problemas.

<!--
Tempo: 15 min.
Problemas: import sem uso e de pacote possivelmente inexistente (lodash-extras), retorno any, catch vazio (retorna undefined sem avisar), sem validação do formato.
-->
