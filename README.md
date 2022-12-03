# DrD2 Infinite

> Plataforma de compartilhamento de vídeo

<img align="right" width="240px" src="https://github.com/Johnson49/biblioteca/blob/main/girl-tv.png?raw=true">

Este aplicativo será uma plataforma de compartilhamento de vídeo, onde um usuário poderá compartilhar vídeos, criar listas de reprodução, gostar ou não gostar de um vídeo, comentar em um vídeo etc.

## Configurações prévias 🔧

Antes de começar, verifique se você atende aos seguintes requisitos:

1. NodeJS

De preferência a versão mais recente.

2. Gerenciador de Pacotes do NodeJS

Não será requisitado um gerenciador especifico, ficado a seu cargo qual gerenciador escolher.

## Começando 🚀

### Clone o projeto

```bash
git clone https://github.com/DrD2-Infinite-Community/backend.git

cd backend
```

### Instale as dependências

```
npm install 
```

Esse comando instalará as seguintes bibliotecas:

1. [TypeScript](https://www.typescriptlang.org)

Resumidamente, TypeScript é JavaScript com sintaxe para tipos.

2. [Express](https://expressjs.com/pt-br/)

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

3. [Eslint](https://eslint.org/docs/latest/user-guide/getting-started)

ESLint é uma ferramenta de análise de código estático para identificar padrões problemáticos encontrados no código JavaScript.

4. [Jest](https://jestjs.io/pt-BR/)

Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.

5. [Prettier](https://prettier.io)

Um formatador de código opinativo.

6. [Supertest](https://github.com/visionmedia/supertest)

O Supertest é uma biblioteca Node. js que ajuda os desenvolvedores a testar APIs. Essa biblioteca permite criar simulações de requisições HTTP, dessa forma pode-se garantir que os endpoints desenvolvidos no back-end vão entregar os resultados esperados.

7. [ts-node-dev](https://github.com/wclr/ts-node-dev)

É uma ferramenta que compila seus projetos com Typescript e reinicia o projeto quando o arquivo é modificado.

8. [http-status-codes](https://github.com/prettymuchbryce/http-status-codes)

Constantes que enumeram os códigos de status HTTP.

## Executando os testes 🧪

```nodeJS
npm run test
```

## Trabalhando com as issues ❗❗

Tem alguma nova funcionalidade, dúvidas, preocupações, relatórios de bugs ou sugestões para o projeto? Abra uma issue.

## Gostou do projeto e quer contribuir? 💻

Não faz parte da equipe, mas quer contribuir mesmo assim com o projeto? Então siga estas etapas:

1. Bifurque(fork) este repositório.
2. Altere a brach para a `develop` com o seguinte comando: `git checkout develop`
3. Crie a branch manualmente: `git checkout -b feature/crud-do-usuario`

    3.1 Se optar pelo git flow, inicialize com o seguinte comando: `git flow init`

    3.2 Será usado a configuração padrão. Sendo assim, pressione tecla **ENTER** em cada passo até a finalização do processo.
4. Após finalizar o trabalho, abra uma pull request para a branch `developer`

## Orientações para a equipe do backend 🐱‍👤

Para os membros da equipe de backend:

1. Clone o repositório. *Realizar o fork é desnecessário para a equipe do backend*.
2. Altere a brach para a `develop` com o seguinte comando: `git checkout develop`
3. Inicie o git flow: `git flow init`
4. Será usado a configuração padrão. Sendo assim, pressione tecla **ENTER** em cada passo até a finalização do processo.
5. As branchs devem ser nomeadas com a funcionalidade que será desenvolvida na mesma.

    * **Exemplo**: Se estiver responsável por desenvolver o CRUD(create, read, update e delete) do usuário, então o nome da branch deve ser: `feature/crud-do-usuario`

6. Agora, publique a branch para que tenha uma cópia no repositório remoto, assim mais pessoas podem trabalhar e acompanhar ela com com o seguinte comando: `git flow feature publish crud-do-usuario`

7. Após finalizar o trabalho, abra uma pull request para a branch `developer`
