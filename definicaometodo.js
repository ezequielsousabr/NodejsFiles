/* 
Definições de metodos em inicializadores de objetos */
const obj = {
    name: "obj",
    foo(){
        const os = require('node:os');
        const date = Date();
        const texto = "Olá, Seja bem vindos!\n Estamos atualizando algumas informações uteis para você...";
        console.log('Aqui está algumas informações de rede:\n\n ', os.networkInterfaces());
        return 'foo'
    }
}
console.log(obj.foo())