# O ciclo de um orquestrador mínimo

Fluxo: Escolhe a próxima tarefa pronta → Monta o Taskfile → Executa o agente → Roda a verificação → Abre o PR

1. **Escolhe**: `status: pronta` e todas as `depende` concluídas (Módulo 07).
2. **Monta o contexto** pelo mapa da tarefa (Módulo 11).
3. **Executa** o agente num ambiente isolado (Módulos 13 e 15), de forma **não interativa**.
4. **Verifica** com o mesmo comando do CI.
5. **Entrega** como PR, ligado à spec (Módulo 16).

Cada passo é algo que **você já faz à mão**.

<!--
O Pi pode ser executado de forma não interativa; consultar a documentação para o modo adequado.
-->
