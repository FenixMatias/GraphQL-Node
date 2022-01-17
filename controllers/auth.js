const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../../../Node/07-restserver/helpers/generar-jwt');
const User = require('../models/user');

const auth = {

    login: async(email, password) => {

        const user = await User.findOne({email: email})
        if(!user) return {error: 'Usuario o contraseña incorrectos'};
        const validPassword = await bcryptjs.compareSync(password, user.password)
        if(!validPassword) return {error: 'Usuario o contraseña incorrectos'};

        //generar el JWT
        const token = await generateJWT(user.id);

        return {message: 'Login correcto', token: token};
    }
}

 

module.exports = auth;