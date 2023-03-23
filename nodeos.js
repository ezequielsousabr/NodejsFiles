/*
Obter informações da interface de rede com Nodejs */
const os = require('node:os')
console.log("Informações da interface de rede: ", os.networkInterfaces())