/*
Obter informações da interface de rede com Nodejs */
const os = require('node:os')
console.log("Informações de Sistema: ", os.hostname(), os.machine());
console.log("Informações da interface de rede: ", os.networkInterfaces());