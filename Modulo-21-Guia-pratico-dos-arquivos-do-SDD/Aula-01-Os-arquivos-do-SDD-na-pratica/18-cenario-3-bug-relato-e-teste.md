## Cenário 3 · Sustentação: o relato e o prompt

```md
# BUG-004: tarefa com prazo hoje aparece como atrasada
Passos: criar tarefa com prazo de hoje → abrir a lista
Atual: aparece em "Atrasadas"
Esperado: só é atrasada depois do dia do prazo (novo CA-02.4)
Causa: a comparação usa data e hora, em vez de só a data
```

```
Leia o BUG-004 e o requirements.md. Primeiro adicione o CA-02.4.
Depois escreva o teste que reproduz o bug e rode-o para mostrar que
falha. Só então faça a correção mínima e rode a suíte inteira.
```

Ordem dos commits: **spec** (CA-02.4) → **teste que falha** → **correção**.

<!--
Modelo bug.md em docs/_modelos/estrategias/ (Módulo 14, Aula 07). O teste que falhou antes e passa depois é a prova da correção.
-->
