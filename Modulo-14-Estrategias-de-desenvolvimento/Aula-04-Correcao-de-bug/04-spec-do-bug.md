# A spec também muda

Todo bug mostra que algo **faltou na spec** ou **não foi testado**:

| Causa | Registro |
|---|---|
| Critério ausente | Adicione o critério (ex.: *"Tarefa com prazo hoje não está atrasada"*) |
| Critério ambíguo | Reescreva |
| Teste ausente | Adicione ao critério existente |
| Spec estava certa, código errado | Só o teste |

Peça ao agente: *"Antes de corrigir, escreva o teste que reproduz o bug e rode-o para mostrar que falha."*

<!--
Cada bug fecha uma lacuna do método (retomar Módulo 08, Aula 04: corrigir na origem).
-->
