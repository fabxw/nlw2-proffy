/* 
node src/server.js  -- serve para abrir servidor estático

npm run dev -- serve para abrir um servidor que se auto reseta ao salvar arquivo
 */

// data
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "40028922",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "40028922",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber) {

    //ao usar index0, não necessita fazer nenhum tratamento
    return subjects[subjectNumber]
}

// funcionalidades

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query;

    //    console.log(filters);

    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {

    const data = req.query

    const isNotEmpty = (Object.keys(data).length > 0);

    //console.log(Object.entries(data).length === 0)
    //se tiver data
    // adicionar data a lista de proffys

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }

    //se não tiver, não adicionar 

    return res.render("give-classes.html", { subjects, weekdays })
}

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
    // configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)

