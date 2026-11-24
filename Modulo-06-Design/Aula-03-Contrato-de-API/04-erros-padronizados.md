# Erros com um formato só

```json
{
  "erro": {
    "codigo": "TITULO_OBRIGATORIO",
    "mensagem": "Título é obrigatório",
    "campo": "titulo"
  }
}
```

- Um **código** estável para o frontend tratar.
- Uma **mensagem** para o usuário.
- Códigos HTTP corretos: `400` entrada inválida, `404` não encontrado, `500` falha interna.

A mensagem do contrato deve ser a mesma do **critério de aceite**.

<!--
Conectar com o critério "Título é obrigatório" do Módulo 05, Aula 06.
-->
