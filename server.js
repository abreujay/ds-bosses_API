const express = require('express');
const cors = require('cors');
const { swaggerUi, specs } = require('./swagger')

const PORT = process.env.PORT || 3000;
const app = express();

const bosses = require('./data/bosses');

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.get('/', (req, res) => {

    res.send('Bem Vindo(a) A Api Dark Souls 1');

});

app.get('/bosses', (req, res) => {

    res.json(bosses);

})

app.get('/api/bosses/:id', (req, res) => {

    const id = parseInt(req.params.id, 10);
    const boss = bosses.find(b => b.id === id);
    if (boss){

        res.json(boss)

    } else {

        res.status(404).json({message: 'Ocorreu Um Erro Ao Localizar Boss'})

    }

})

app.listen(PORT, () => {

    console.log(`Servidor Rodando Na Porta ${PORT}`);

});

/**
 * @openapi
 * /:
 *   get:
 *     summary: Bem-vindo à API Dark Souls 1
 *     description: Retorna uma mensagem de boas-vindas para a API.
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Bem Vindo(a) A Api Dark Souls 1
 */

/**
 * @openapi
 * /bosses:
 *   get:
 *     summary: Lista todos os bosses
 *     description: Retorna uma lista de todos os bosses disponíveis na API.
 *     responses:
 *       200:
 *         description: Lista de bosses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do boss
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Nome do boss
 *                     example: Asylum Demon
 *                   description:
 *                     type: string
 *                     description: Descrição do boss
 *                     example: O demônio que protege o asilo.
 */

/**
 * @openapi
 * /api/bosses/{id}:
 *   get:
 *     summary: Obtém um boss específico
 *     description: Retorna informações sobre um boss específico baseado no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do boss a ser retornado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Informações do boss
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do boss
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Nome do boss
 *                   example: Asylum Demon
 *                 description:
 *                   type: string
 *                   description: Descrição do boss
 *                   example: O demônio que protege o asilo.
 *       404:
 *         description: Boss não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ocorreu Um Erro Ao Localizar Boss
 */
