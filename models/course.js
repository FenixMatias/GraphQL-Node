const { Schema, model } = require('mongoose');

const courseSchema = Schema({

    name:{
        type: String,
        required: [true, 'Campo obligatorio']
    },
    language:{
        type: String,
        required: [true, 'Campo obligatorio']
    },
    date:{
        type: String,
        required: [true, 'Campo obligatorio']
    },
    professorId:{ 
        type: String,
        required: [true, 'Campo obligatorio']
    }

});

module.exports = model('Course', courseSchema);