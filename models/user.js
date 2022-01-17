const {Schema, model} = require('mongoose');

const UserSchema = Schema({

    name:{
        type: String,
        required: [true, 'Campo obligatorio']
    },
    email:{
        type: String,
        required: [true, 'Campo obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Campo obligatorio']
    },
    active:{
        type: Boolean,
        default: true,
        required: [true, 'Campo obligatorio']
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = model('User', UserSchema);