# A matriz de autonomia

| Risco | Exemplos | Autonomia |
|---|---|---|
| **Baixo** | Documentação, formatação, testes de uma função, ajustes de texto | Agente segue sozinho; pessoa revisa depois |
| **Médio** | Feature em módulo isolado, correção de bug com teste | Agente executa; **pessoa aprova o PR** |
| **Alto** | Autenticação, autorização, dados pessoais, pagamentos | Pessoa aprova **plano e PR**; segunda pessoa revisa |
| **Crítico** | Migrações de dados, infraestrutura, produção | **Sempre pessoa**; agente só prepara |

O risco vem do **impacto de errar**, e não da dificuldade.

<!--
O campo `risco` do frontmatter da tarefa (Aula 01) decide qual linha da matriz se aplica.
-->
