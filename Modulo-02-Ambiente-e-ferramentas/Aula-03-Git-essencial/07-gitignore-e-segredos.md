# O que nunca entra no repositório

Crie um `.gitignore` desde o primeiro dia:

```
node_modules/
.env
dist/
```

- `node_modules/`: gerado, enorme e recriável.
- `.env`: segredos.
- `dist/`: código compilado.

O agente também lê e escreve nesses arquivos. **O que está no repositório pode ir para o contexto.**

<!--
Conectar com a Aula 02: a chave do OpenRouter nunca no projeto. Também com o slide "o que nunca enviar" do Módulo 01.
-->
