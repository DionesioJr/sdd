# Limite 3: Data de corte

O modelo aprendeu com dados até uma certa data. Depois disso, ele não sabe de nada.

Em código, aparece como:

- API de uma versão antiga do framework;
- padrão que já foi substituído;
- desconhecimento de uma biblioteca nova.

**Defesa**:

- diga a versão que o projeto usa (o `package.json` ajuda);
- coloque no contexto a documentação atual da parte que importa;
- confira na documentação oficial.

<!--
Exemplo bom: frameworks web que mudaram muito entre versões (roteamento, renderização no servidor).
O código antigo ainda compila às vezes, mas está fora do padrão atual.
-->
