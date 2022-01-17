const { Schema, model } = require('mongoose');

const professorSchema = Schema({

    name:{
        type: String,
        required: [true, 'Campo obligatorio']
    },
    age:{
        type: Number,
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

module.exports = model('Professor', professorSchema);