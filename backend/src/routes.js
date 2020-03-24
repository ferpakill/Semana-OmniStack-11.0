const express = require('express')
const routes = require('routes')


routes.post('/users',(request,response)=>{
    return response.json({
        materia:'Semana OmniStack'
    })
})

module.exports = routes;