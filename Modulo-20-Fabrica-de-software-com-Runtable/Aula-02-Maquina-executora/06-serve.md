# Subir o executor

```bash
rtb serve --all     # serve a fila de todos os projetos vinculados
rtb serve status    # ver o estado
rtb watch           # acompanhar o que está acontecendo
rtb serve stop      # parar
```

**Conectada não é o mesmo que online**: a máquina só aparece como **online** enquanto o `rtb serve` roda.

Para testar sem riscos, rode com `rtb serve --once` e acompanhe uma única tarefa, ou use o modo de simulação, quando disponível.

<!--
Conferir as flags na versão atual (por exemplo, simulação de fila sem executar).
-->
