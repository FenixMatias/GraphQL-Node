const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { dbConnection } = require('../db/config');
const schema = require('../schema/schema');
const { validateJWT } = require('../middlewares/validar-jwt');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.app.use('/graphql', [validateJWT], graphqlHTTP({
            schema,
            graphiql: true
        }));

        //Conecta a base de datos
        this.conectarDB();

    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares() {

        //Cors
        this.app.use(cors());

    }

    async conectDB(){
        await dbConnection();
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor correindo en el puerto: ${this.port}`)
        });
        
    }

};

module.exports = Server;