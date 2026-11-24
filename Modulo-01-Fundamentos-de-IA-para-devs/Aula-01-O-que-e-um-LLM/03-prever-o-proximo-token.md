# Um LLM prevê o próximo pedaço de texto

Dado o texto até aqui, qual é o próximo pedaço mais provável?

```ts
function soma(a: number, b: number): number {
  return
```

| Próximo token | Probabilidade (ilustrativa) |
|---|---|
| ` a` | 92% |
| ` (` | 4% |
| ` b` | 2% |
| outros | 2% |

Escolhe um, acrescenta ao texto e repete.

<!--
As probabilidades são ilustrativas. O ponto é: não existe "plano" separado da geração.
O modelo não escreve a função inteira na cabeça e depois digita; ele decide um pedaço por vez.
-->
