1- npm init -y // para iniciar o projeto com javascript
2- npm i typescript -D // Para adicionar typescript no projeto
3- npx tsc --init // para configurar o ts "es2020"
4- npm i fastify
5- npm i tsx -D // Automatiza o processo de compilar e executar
6- npm i prisma -D
7- npm i @prisma/client
8- npm i prisma-erd-generator @mermaid-js/mermaid-cli -D // gerar entidades relacionais com prisma | geração de diagramas através de códigos
9- npm i @fastify/cors // configurar permissão de quem pode consumir o server

npx tsc // conversor de TS para JS

"dev": "tsx watch src/server.ts" // executar com npm run dev, o watch serve para reiniciar o servidor a cada alteração

npx prisma init --datasource-provider SQLite // iniciar com o setup para sqlite

npx prisma migrate dev // criar migrações, para fazer versionamento de banco de dados

npx prisma studio // permite visualizar os dados no navegador

npx prisma db seed // Para criar seeds

npm i zod // schema validation

npm i short-unique-id // cria até 100 ids por segundo