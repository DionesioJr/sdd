# Os limites

| Regra | Por quê |
|---|---|
| **Só em branches de PR**, nunca na `main` | Evita danos diretos |
| **Máximo de 2 ou 3 tentativas** | Sem loop infinito e sem custo descontrolado |
| **Nunca alterar testes para passar** | O teste é o contrato |
| **Nunca desligar um portão** | Não se burla a verificação |
| **Escopo**: só os arquivos do PR | Sem mudanças soltas |
| **Sem autonomia em segurança, dados e migrações** | Risco alto |

Se estourou as tentativas ou tocou numa regra, **para e chama uma pessoa**, com um relatório.

<!--
Tornar essas regras verificáveis: o pipeline confere se os arquivos de teste foram tocados pela correção automática.
-->
