const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.json({
        materia:'Semana OmniStack'
    })
})

app.listen(3333)