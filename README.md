# Dark Souls 1 API

## Descrição

Esta é uma API para obter informações sobre os bosses de Dark Souls 1.

## Endpoints

### `GET /`

Retorna uma mensagem de boas-vindas.

**Resposta:**

- Status: `200 OK`
- Tipo: `text/plain`
- Corpo:
  ```plaintext
  Bem Vindo(a) A Api Dark Souls 1
  ```

### `GET /bosses`

Retorna uma lista de todos os bosses disponíveis na API.

**Resposta:**

- Status: `200 OK`
- Tipo: `application/json`
- Corpo:
  ```json
  [
    {
      "id": 1,
      "name": "Asylum Demon",
      "description": "O demônio que protege o asilo."
    },
    ...
  ]
  ```

### `GET /api/bosses/{id}`

Obtém informações sobre um boss específico baseado no ID fornecido.

**Parâmetros:**

- `id` (integer): ID do boss a ser retornado.

**Resposta:**

- Status: `200 OK`
- Tipo: `application/json`
- Corpo:
  ```json
  {
    "id": 1,
    "name": "Asylum Demon",
    "description": "O demônio que protege o asilo."
  }
  ```

- Status: `404 Not Found`
- Tipo: `application/json`
- Corpo:
  ```json
  {
    "message": "Ocorreu Um Erro Ao Localizar Boss"
  }
  ```

## Execução

Para executar a API localmente:

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Execute o servidor: `node server.js`.

## Documentação Swagger

A documentação Swagger da API pode ser acessada em `/api-docs` quando o servidor estiver rodando localmente.