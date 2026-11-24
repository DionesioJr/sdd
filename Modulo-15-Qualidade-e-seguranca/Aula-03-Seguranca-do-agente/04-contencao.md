# Contenha o estrago

| Medida | Efeito |
|---|---|
| Rodar dentro de **container** (Módulo 13) | O estrago fica no container |
| **Usuário sem privilégios** | Não instala nem apaga o sistema |
| **Sem credenciais de produção** na máquina | Não há o que vazar ou apagar |
| Sem acesso ao `.env` real | Segredos fora do contexto |
| **Rede restrita** | Dificulta a exfiltração de dados |
| **Git limpo** (Módulo 02) | Qualquer alteração se desfaz |

Nada disso impede o erro; **reduz o dano**.

<!--
Combinar com o que já fizemos: Git, Docker, .env fora do repositório.
-->
