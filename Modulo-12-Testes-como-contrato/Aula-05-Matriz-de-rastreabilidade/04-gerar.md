# Gerar a partir dos nomes

Com a convenção do Módulo 11 (o **ID do critério no nome do teste**), um script gera a matriz:

1. Lê os critérios nas specs (`TAR-RF-03.1`…).
2. Lê os testes e extrai os IDs do nome.
3. Cruza e escreve `docs/qualidade/matriz.md`.
4. Lista critérios **sem teste** e testes **sem critério**.

```bash
npm run matriz      # regenera docs/qualidade/matriz.md
```

O agente pode escrever o script, e **você revisa**. Depois, ele roda sozinho no CI.

<!--
Um script simples de varredura de texto basta. Não precisa ferramenta especial.
-->
