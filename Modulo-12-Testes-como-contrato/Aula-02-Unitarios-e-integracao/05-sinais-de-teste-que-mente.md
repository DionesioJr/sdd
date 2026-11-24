# Sinais de teste que mente

- **Mock de tudo**: só confere que mocks foram chamados.
- **Repete a fórmula**: `expect(total).toBe(a * b)` quando o código faz `a * b`.
- **Sem asserção real**: `expect(resultado).toBeDefined()`.
- **Só caminho feliz**: sem vazio, limite, erro.
- **Ordem dependente**: um teste só passa se outro rodou antes.

Pergunta: *"se eu quebrar o código de propósito, **este** teste falha?"* (As próximas aulas medem isso.)

<!--
Cada sinal pode ser incluído como regra na guideline de testes (Módulo 11).
-->
