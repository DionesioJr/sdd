# Conectando ao OpenRouter

O OpenRouter dá **uma chave e vários modelos**. Para o Pi enxergar a chave:

1. Crie uma chave em openrouter.ai e **defina um limite de crédito**.
2. Guarde-a numa variável de ambiente (`OPENROUTER_API_KEY`) ou no arquivo de autenticação do Pi.
3. **Nunca** coloque a chave dentro do projeto.

```bash
# PowerShell (vale só para esta sessão)
$env:OPENROUTER_API_KEY = "sua-chave"
```

<!--
Reforçar: chave em arquivo do projeto, em commit ou em prompt é vazamento. Lembrar do slide "o que nunca enviar" do Módulo 01.
Para persistir, o aluno pode usar o arquivo de autenticação do Pi ou as variáveis do sistema.
-->
