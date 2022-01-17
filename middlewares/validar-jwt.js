const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async(req = request, res = response, next) => {

    const token = req.header('key-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
        
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        //leer usuario que correponde al uid
        const user = await User.findById(uid);

        if (!user) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en DB'
            });
        }

        //verificar si el uid tiene estado true
        if (!user.active) {
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado false'
            });
        }

        req.user = user;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });

    }

}

module.exports = {
    validateJWT
}