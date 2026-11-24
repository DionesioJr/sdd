# Segredos no código

A IA copia padrões de exemplos, e muitos exemplos têm segredos **no código**:

```ts
const chave = "sk_live_51Hx9fA2k...";   // nunca
```

- Segredo vai em variável de ambiente (`.env` fora do repositório).
- **Varredura automática** (ferramentas como gitleaks) bloqueia segredos no commit e no CI.
- Se um segredo vazou, **revogue**: apagar o commit **não basta** (já está no histórico).

<!--
Retomar Módulo 13 (.env) e Módulo 02 (.gitignore). Agora, a defesa automática.
-->
