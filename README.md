# Setup

## Requisitos

- Node >=18.20.4
- Docker

## Rodar a API

1. Clone o repositório
2. Copie o .env.example para .env
3. Rode o comando `docker-compose up --build`
4. Acesse http://localhost:3000/docs para ver a documentação
5. A API estará acessível em http://localhost:3000/

## Rodar o Frontend

1. Instale as dependências usando o comando:

```bash
npm install
```

2. Execute o seguinte comando para inicializar o servidor do frontend:

```bash
npm run start
```

3. A URL do frontend irá aparecer no terminal, acesse-a para visualizar a aplicação.

4. Teste preenchendo o formulário com dados fictícios e clicando em "Enviar"
