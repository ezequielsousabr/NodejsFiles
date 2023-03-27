/*
Definição de metódos para inicializadores de objetos
Criando um metódo abreviado function() ()=> */
const obj = {
    foo(){
        const date = Date();
        console.log(date);
        const os = require('node:os');
        console.log(os.hostname(), os.arch(), os.release());
        return "Executado com sucesso..."
    }
}

console.log(obj.foo())

const ScreenClean = setTimeout((clear) => {console.clear() }, 2000);