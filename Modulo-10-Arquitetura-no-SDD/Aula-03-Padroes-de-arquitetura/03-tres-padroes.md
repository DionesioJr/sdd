# Três padrões comuns

### 1. Camadas

Apresentação → Aplicação → Dados. Cada camada só chama a de baixo.

### 2. Hexagonal (portas e adaptadores)

O **domínio** no centro, sem saber de banco ou HTTP. Adaptadores fazem a ponte.

### 3. Monolito modular

Um só processo, dividido em **módulos** independentes com fronteiras claras.

Eles **combinam**: um monolito modular costuma ter camadas dentro de cada módulo.

<!--
Não aprofundar teoria. O objetivo é escolher conscientemente, e não decorar nomes.
-->
