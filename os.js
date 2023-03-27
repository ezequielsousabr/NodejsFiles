/*
Obter informações da interface de rede com Nodejs */
const os = require('node:os')
console.log(os.networkInterfaces());