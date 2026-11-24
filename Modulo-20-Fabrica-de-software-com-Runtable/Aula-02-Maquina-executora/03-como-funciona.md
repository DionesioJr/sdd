# A máquina executora

Os agentes rodam **na máquina do cliente** (a sua), **não** na plataforma:

- A plataforma **gerencia** o fluxo, as tarefas e a governança.
- O **executor** (`rtb`) roda na sua máquina, **puxa** a tarefa da fila e executa numa **worktree isolada** (Módulo 19).
- O código **fica no seu ambiente**.

Você escolhe **qual modelo** usar: a plataforma **não** vende uma IA própria.

<!--
É o que responde às duas dúvidas do slide anterior: execução local, isolada, com modelo à escolha.
-->
