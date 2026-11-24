## Cenário 3 · Sustentação: corrigir um bug

Ciclo: Relato → Reproduzir → Esperado na spec → Teste que falha → Correção mínima → Teste passa

Exemplo: *"tarefa com prazo para hoje aparece como atrasada"*.

| Arquivo | O que acontece |
|---|---|
| `requirements.md` | **Atualiza só se** faltava ou estava ambíguo: novo CA-02.4 |
| `design.md` | Só muda se o **desenho** causou o bug |
| ADR | Não |
| `tasks.md` | **Registra** a correção como tarefa curta (T-12), ligada ao CA |
| Taskfile | Opcional, para correções maiores |
| `AGENTS.md` | **Só se** o agente repete o mesmo erro |

O bug quase nunca é "só código": ele mostra **o que faltou na spec ou no teste**.

<!--
Retomar o Módulo 08, Aula 04: corrigir na origem. Spec certa e código errado: só o teste e o código mudam.
-->
