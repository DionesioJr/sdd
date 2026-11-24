# Três ambientes, três verdades

- Você roda os testes no seu Node.
- O agente roda os testes no Node dele.
- O CI roda numa imagem própria.

O resultado: "passou aqui", "passou lá", "falhou no CI". Nenhum dos três é **o** ambiente do projeto.

Pior: o agente instala dependências direto na sua máquina, e você descobre depois.

<!--
Também é uma questão de segurança: isolar o que o agente executa (Módulo 15).
-->
