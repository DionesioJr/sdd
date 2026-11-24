# Custo e ruído

Cuidados:

- **Ruído**: se a IA comenta tudo, ninguém lê. Peça **só achados relevantes**, por gravidade.
- **Falsos positivos**: marque os **comentários descartados** para calibrar o pedido.
- **Custo**: cada PR gera tokens. Limite o tamanho do contexto (diff + Taskfile + RF) e use o modelo certo (Módulo 17).
- **Dados**: o diff vai para um provedor externo. Atenção ao que pode ou não ser enviado (Módulo 18).

Meça: *quantos comentários da IA levaram a uma correção?* Esse é o seu **índice de utilidade**.

<!--
Retomar custo (Módulo 01) e "o que nunca enviar".
-->
