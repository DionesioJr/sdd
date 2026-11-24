# O mesmo pedido, respostas diferentes

O modelo não escolhe sempre o token mais provável. Ele **sorteia** entre os prováveis.

- **Temperatura baixa**: escolhas mais previsíveis.
- **Temperatura alta**: escolhas mais variadas.

Na prática:

- duas execuções do mesmo pedido podem gerar códigos diferentes;
- uma execução que deu certo não prova que a próxima vai dar.

<!--
A Aula 03 aprofunda o não determinismo. Aqui basta o aluno ver que a variação é esperada,
não um defeito. No exercício 2 eles vão ver isso acontecer.
-->
