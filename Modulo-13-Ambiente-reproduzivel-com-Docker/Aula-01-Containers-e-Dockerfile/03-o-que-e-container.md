# Container: o ambiente dentro de uma caixa

- **Imagem**: o pacote (sistema, Node, dependências, seu código). Imutável.
- **Container**: uma imagem em execução, isolada do resto da máquina.
- **Dockerfile**: a receita para construir a imagem.

Fluxo: Dockerfile → Imagem (`build`) → Container (`run`)

Diferente de uma máquina virtual, o container é **leve** e inicia em segundos.

Mesma imagem, **mesmo comportamento**, em qualquer lugar.

<!--
Não aprofundar a tecnologia. O foco é: reprodutibilidade e isolamento.
-->
