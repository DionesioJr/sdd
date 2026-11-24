# O que faz uma guideline funcionar

1. **Regras curtas e específicas** (não "escreva bom código").
2. **Exemplo certo e exemplo errado** lado a lado.
3. **O porquê**, em uma frase.
4. **Verificável**: sempre que der, o linter ou o teste impõe.

```md
## Nomes de teste
Cite o critério: `it("TAR-RF-03.1: tarefa pendente passa a concluída")`.
Errado: `it("funciona")`.
```

<!--
Regra verificável por ferramenta vale mais do que regra escrita. Se um linter faz, tire da guideline.
-->
