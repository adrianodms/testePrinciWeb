# Teste PrinciWeb
Este é um teste feito por *Adriano Magalhães*.

Para conhecer poder vizualizar o resultado, você pode ver através deste [link](https://adrianodms.github.io/)
 ou baixando o diretório.

## Rodando o Projeto

Para rodar o projeto pela primeira vez, digite no seu terminal: **npm install**.

Após a instalação é só digitar **gulp**.


## Tasks do Gulp

_**serve**_: (essa é a default): faz o build do less e roda um servidor local para testes. Essa task atualiza a pagina toda vez que há alterações dos arquivos e js e html, e também injeta css em tempo real quando há alterações do less.

_**build**_: faz uma cópia dos arquivos de desenvolvimento(que estão na pasta src) para a pasta dist, compila o less, minifica e concatena arquivos css/js.

_**clean-after-build**_: limpa arquivos desnecessários da build, para poder subir em produção. (infelizmente não consegui deixar como depêndencia da task 'build')