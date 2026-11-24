# O que pode andar junto

O grafo de dependências (Módulo 07) e as fronteiras (Módulo 10) decidem:

| Pode em paralelo | Não deve |
|---|---|
| Tarefas **sem dependência** entre si | A que depende de outra não concluída |
| Tarefas em **módulos diferentes** | Duas tarefas mexendo no **mesmo módulo** |
| Tarefas com **contratos estáveis** | Tarefas que alteram o **mesmo contrato** |

Regra: **dois agentes não tocam o mesmo arquivo.** Declare **os arquivos esperados** na tarefa e o orquestrador **detecta colisões**.

<!--
Aqui é onde o "arquivos esperados" do Módulo 07 mostra valor.
-->
