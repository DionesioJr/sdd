# A interface pública do módulo

Cada módulo expõe **só o que os outros podem usar**:

```ts
// src/equipes/index.ts  (a única porta de entrada)
export { buscarEquipe, listarMembros } from "./aplicacao/consultas";
export type { Equipe, Membro } from "./dominio/tipos";
```

Regra: **outros módulos importam apenas de `equipes/index.ts`.** Nunca de `equipes/dominio/...`.

O que não está no `index.ts` é **interno** e pode mudar à vontade.

<!--
Este é o ponto que mais protege contra mudanças em cascata.
-->
