/* 
node src/server.js  -- serve para abrir servidor estático

npm run dev -- serve para abrir um servidor que se auto reseta ao salvar arquivo
 */

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// servidor
const express = require('express')
const server = express()

// configuração do nunjucks (template engine)
const nunjuks = require('nunjucks')
nunjuks.configure("src/views", {
    express: server,
    noCache: true,
})

// inicio e configuração do servidor
server
    // receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    // configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)