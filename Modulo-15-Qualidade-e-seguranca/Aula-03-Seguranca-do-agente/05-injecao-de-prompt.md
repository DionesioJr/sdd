# Injeção de prompt

Todo texto que o agente lê pode conter **instruções escondidas**: README de dependências, issues, páginas web, comentários de código, saída de ferramentas.

Defesas:

- **Fonte confiável**: restrinja de onde o agente lê.
- **Revise comandos** estranhos que ele propuser (rede, `curl | sh`, apagar).
- **Separe** leitura de ação: quem lê conteúdo externo **não** deve ter acesso a segredos nem a comandos sensíveis.
- **Aprovação humana** para ações de risco (instalar, apagar, enviar dados).

O modelo **não** distingue com segurança instrução de dado.

<!--
Não existe defesa perfeita hoje. O foco: reduzir o que o agente pode fazer e exigir aprovação para o que importa.
-->
