# Módulo 14: Estratégias de desenvolvimento

Objetivo: escolher o caminho certo do SDD para cada situação real: projeto novo (greenfield), sistema existente (brownfield), feature, correção de bug, refatoração e a evolução de PoC a MVP e produto.

## Por que este módulo existe

Nos módulos anteriores, o gestor nasceu do zero e percorreu **todas** as fases. Na vida real, quase nunca se começa do zero: chega um bug, uma funcionalidade nova, um código legado, um pedido de melhoria interna. Aplicar o ciclo completo a tudo é pesado demais; não aplicar nenhum é arriscado demais.

**Sem este módulo**: spec completa e design de 20 páginas para corrigir um erro de uma linha, ou mexer num sistema legado sem entender o que ele faz. O método vira burocracia, ou é abandonado.

**Ganho real**: a **quantidade certa de método** para cada situação: o suficiente para proteger, sem engessar.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Greenfield](Aula-01-Greenfield/) | Como começar um projeto novo com todas as fases? |
| [02 Brownfield](Aula-02-Brownfield/) | Como evoluir um sistema que já existe? |
| [03 Feature](Aula-03-Feature/) | Quanto de spec e design uma funcionalidade nova pede? |
| [04 Correção de bug](Aula-04-Correcao-de-bug/) | Como corrigir sem quebrar de novo? |
| [05 Refatoração](Aula-05-Refatoracao/) | Como mudar o interior sem mudar o comportamento? |
| [06 PoC, MVP e produto](Aula-06-PoC-MVP-e-produto/) | O que descartar e o que evoluir? |
| [07 Modelos por estratégia](Aula-07-Modelos-por-estrategia/) | Qual template usar em cada caso? |

## Preparação

- O gestor com spec organizada, arquitetura, testes e Docker (Módulos 09 a 13).

## Entregável do módulo

Um kit de templates, um por estratégia, em `docs/_modelos/estrategias/`, e as seguintes entregas no gestor: uma feature, um bug corrigido com teste, uma refatoração segura e uma spec reversa de um código sem documentação.
