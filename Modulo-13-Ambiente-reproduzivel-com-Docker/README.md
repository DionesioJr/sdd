# Módulo 13: Ambiente reproduzível com Docker

Objetivo: fazer o gestor rodar, e ser testado, do mesmo jeito na máquina de uma pessoa, no ambiente do agente e no CI, usando Docker e Docker Compose.

## Por que este módulo existe

Você já tem testes, contexto e arquitetura. Mas eles dependem do ambiente: versão do Node, navegador do Playwright, banco, serviço de e-mail. Se cada execução acontece num ambiente diferente, as falhas deixam de ser reproduzíveis, e a automação dos próximos módulos fica instável.

**Sem este módulo**: "na minha máquina funciona", testes E2E que passam aqui e falham no CI, e um agente que instala coisas direto no seu computador.

**Ganho real**: um ambiente **idêntico** para pessoa, agente e pipeline. Falhas reproduzíveis, onboarding em um comando e o agente executando num espaço isolado.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Containers e Dockerfile](Aula-01-Containers-e-Dockerfile/) | Como empacotar a aplicação com tudo que ela precisa? |
| [02 Docker Compose](Aula-02-Docker-Compose/) | Como subir aplicação, banco e serviços juntos? |
| [03 Mesmo ambiente para pessoa, agente e CI](Aula-03-Mesmo-ambiente-para-pessoa-agente-e-CI/) | Como garantir que todos usem o mesmo ambiente? |

## Preparação

- Docker Desktop (ou Docker Engine) instalado e funcionando: `docker --version` e `docker compose version`.

## Entregável do módulo

`Dockerfile`, `compose.yaml` e scripts do gestor, de modo que `docker compose up` suba o sistema e `npm run test:docker` rode a suíte no mesmo ambiente que o CI usará.
