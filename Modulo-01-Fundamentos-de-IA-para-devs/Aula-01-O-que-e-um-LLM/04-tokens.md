# Token não é palavra

O modelo lê e escreve em **tokens**: pedaços de texto.

| Texto | Como pode virar tokens |
|---|---|
| `function` | `function` |
| `validarCpf` | `valid` `ar` `C` `pf` |
| `prazo` | `pra` `zo` |
| `}` | `}` |

- Cada modelo corta o texto de um jeito.
- Português costuma gastar mais tokens que inglês.
- Limite de contexto e preço são medidos em tokens.

<!--
A divisão da tabela é um exemplo; o tokenizador real muda por modelo.
Isso volta na Aula 02 (contexto) e na Aula 04 (custo).
-->
