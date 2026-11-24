# Por que agentes custam mais

Cada passo do agente reenvia **todo o contexto**.

Sessão de exemplo: 30 passos, contexto médio de 40 mil tokens, 800 tokens de saída por passo.

- Entrada: 30 × 40.000 = **1.200.000 tokens**
- Saída: 30 × 800 = **24.000 tokens**

| Modelo (preços fictícios, US$ por milhão) | Entrada | Saída | Custo da sessão |
|---|---|---|---|
| Grande: 3,00 entrada / 15,00 saída | 3,60 | 0,36 | **US$ 3,96** |
| Pequeno: 0,25 entrada / 1,25 saída | 0,30 | 0,03 | **US$ 0,33** |

Quem pesa é a **entrada**, e ela cresce a cada passo.

<!--
Preços fictícios, só para a conta. Os reais estão no OpenRouter e mudam com frequência.
Muitos provedores oferecem cache de contexto: o trecho repetido do início sai mais barato.
Mesmo assim, contexto enxuto continua sendo a maior economia.
Voltar ao slide 02: a tarde inteira na mesma sessão é o pior caso.
-->
