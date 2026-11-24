# Pipeline: portões em sequência

Fluxo: Commit → Tipos → Lint → Testes → Fronteiras → Matriz → Segurança → Build → ✓

Cada etapa é um **portão**: se falhar, **o PR não entra**.

| Portão | Origem |
|---|---|
| Tipos e lint | Módulo 02 |
| Testes unitários, integração e E2E | Módulo 12 |
| Fronteiras de módulos | Módulo 10 |
| Matriz sem critério do MVP descoberto | Módulo 12 |
| `npm audit` e varredura de segredos | Módulo 15 |
| Build da imagem Docker | Módulo 13 |

<!--
Mostrar como cada módulo anterior contribui com um portão.
-->
