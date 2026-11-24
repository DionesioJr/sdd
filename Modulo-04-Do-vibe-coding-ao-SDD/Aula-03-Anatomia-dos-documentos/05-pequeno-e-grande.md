# A mesma estrutura, em duas escalas

```
Projeto pequeno              Projeto grande
docs/                        docs/
├── requirements.md          ├── product/
├── design.md                ├── architecture/
└── tasks.md                 │   └── adr/
                             └── tasks/
```

- **Pequeno**: um arquivo por tipo de documento.
- **Grande**: uma pasta por tipo, com arquivos por domínio e módulo.

Você começa pequeno e **cresce** quando for preciso (Módulo 09).

<!--
Mostrar que o aluno não precisa de uma estrutura grande no começo.
-->
