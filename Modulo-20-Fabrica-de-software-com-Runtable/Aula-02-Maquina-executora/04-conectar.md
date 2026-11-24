# Conectar e vincular

```bash
rtb auth login          # conecta esta máquina à sua conta
```

O terminal mostra uma **URL e um código**. No navegador logado, você **confere** e clica em **Aprovar máquina**.

```bash
rtb project add . --project GESTOR     # vincula a pasta ao projeto
rtb repo set-default-branch main       # branch de destino dos PRs
```

O vínculo fica em `.runtable/config.json`, que **vai para o Git**: é a fonte única de "esta pasta pertence a este projeto".

<!--
Os nomes dos projetos e chaves variam. Conferir a documentação do rtb para a versão atual.
-->
