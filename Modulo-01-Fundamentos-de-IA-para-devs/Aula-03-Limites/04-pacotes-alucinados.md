# Pacote alucinado é risco de segurança

1. Modelos sugerem com frequência os mesmos nomes de pacotes inexistentes.
2. Um atacante registra esse nome no npm com código malicioso.
3. Alguém roda `npm install` sem conferir.

Esse ataque tem nome: **slopsquatting**.

**Defesa**: antes de instalar qualquer pacote sugerido, confira no npmjs.com quem publica, desde quando e quantos downloads tem.

<!--
Segurança é aprofundada no Módulo 15. Aqui o objetivo é criar o reflexo de conferir.
-->
