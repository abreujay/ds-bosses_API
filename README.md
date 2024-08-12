Dark Souls 1 API

Descrição

Esta API fornece informações sobre bosses e NPCs do jogo Dark Souls 1.

Endpoints

GET /

Retorna uma mensagem de boas-vindas.

Resposta:

	•	Status: 200 OK
	•	Tipo: text/plain
	•	Corpo:

Bem Vindo(a) A Api Dark Souls 1



GET /bosses

Retorna uma lista de todos os bosses disponíveis na API.

Resposta:

	•	Status: 200 OK
	•	Tipo: application/json
	•	Corpo:

[
  {
    "id": 1,
    "name": "Asylum Demon",
    "description": "O demônio que protege o asilo."
  },
  ...
]



GET /bosses/{id}

Obtém informações sobre um boss específico baseado no ID fornecido.

Parâmetros:

	•	id (integer): ID do boss a ser retornado.

Resposta:

	•	Status: 200 OK
	•	Tipo: application/json
	•	Corpo:

{
  "id": 1,
  "name": "Asylum Demon",
  "description": "O demônio que protege o asilo."
}


	•	Status: 404 Not Found
	•	Tipo: application/json
	•	Corpo:

{
  "message": "Ocorreu Um Erro Ao Localizar Boss"
}



GET /npcs

Retorna uma lista de todos os NPCs disponíveis na API.

Resposta:

	•	Status: 200 OK
	•	Tipo: application/json
	•	Corpo:

[
  {
    "id": 1,
    "name": "Eingyi",
    "description": "Eingyi é um pirocinético do Grande Pântano, considerado herético e banido por criar pirocnias baseadas em veneno. Após se estabelecer em Blighttown e ser infectado por parasitas, a Fair Lady sugou a pus da peste dele, adoecendo no processo. Isso fez com que Eingyi se tornasse seu servo e carregasse um ovo como sinal de devoção."
  },
  ...
]



GET /npcs/{id}

Obtém informações sobre um NPC específico baseado no ID fornecido.

Parâmetros:

	•	id (integer): ID do NPC a ser retornado.

Resposta:

	•	Status: 200 OK
	•	Tipo: application/json
	•	Corpo:

{
  "id": 1,
  "name": "Eingyi",
  "description": "Eingyi é um pirocinético do Grande Pântano, considerado herético e banido por criar pirocnias baseadas em veneno. Após se estabelecer em Blighttown e ser infectado por parasitas, a Fair Lady sugou a pus da peste dele, adoecendo no processo. Isso fez com que Eingyi se tornasse seu servo e carregasse um ovo como sinal de devoção."
}


	•	Status: 404 Not Found
	•	Tipo: application/json
	•	Corpo:

{
  "message": "Ocorreu Um Erro Ao Localizar NPC"
}



Execução

Para executar a API localmente:

	1.	Clone o repositório.
	2.	Instale as dependências: npm install.
	3.	Execute o servidor: node server.js.