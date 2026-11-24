# Playwright

```ts
import { test, expect } from "@playwright/test";

test("TAR-RF-03: concluir uma tarefa", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Título").fill("Pagar conta");
  await page.getByRole("button", { name: "Criar" }).click();

  await page.getByRole("button", { name: "Concluir" }).click();

  await expect(page.getByText("Pagar conta")).toHaveClass(/concluida/);
});
```

Prefira localizar por **papel** e **texto visível** (`getByRole`, `getByLabel`): assim o teste espelha o que o usuário percebe e resiste a mudanças de layout.

<!--
O Playwright espera automaticamente por elementos. Evitar sleeps fixos: são a principal fonte de testes instáveis.
-->
