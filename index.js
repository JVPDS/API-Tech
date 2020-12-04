const express = require("express")
const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 2121;

app.use(cors())

app.get("/", (req, res) => {

    return (
        res.json({

                docs: [{
                        id: 0,
                        title: "HTML5",
                        description: "Linguagem de marcação de hipertexto.",
                        details: "HTML siginfica Hypertext Markup Language. Permite ao desenvolvedor criar e estruturar seções, parágrafos, cabeçalhos, links e diversos tipos de mídia. É o primeiro passo para entrar no mundo do desenvolvimento Web. O HTML não é uma linguagem de programação, isso significa que não pode ser usado para criar funcionalidades dinâmicas."
                    },

                    {
                        id: 1,
                        title: "CSS3",
                        description: "Folha de estilos.",
                        details: "O Cascading Style Sheets(CSS) tem como função estilizar e animar a página HTML. O CSS é uma linguagem que complementa e formata o HTML (HyperText Markup Language, a Linguagem de Marcação de Hipertexto) organizando melhor as linhas e adicionando novas possibilidades ao código."
                    },

                    {
                        id: 2,
                        title: "Javascript",
                        description: "Linguagem de programação.",
                        details: "Os dois items acima, apesar de serem marjoritariamente utilizados por programadores, não podem ser chamados de linguagens de programação por não apresentarem interatividade e lógica na página Web. Fazendo uma analogia entre a stack Web com o corpo humano, podemos dizer que um corpo bem estruturado por ossos resistentes(HTML) e visivelmente bonito, com pele e roupas de qualidade(CSS) não consegue se mover ou interagir com a sociedade a sua volta sem a ação do cérebro(Javascript)."
                    },

                    {
                        id: 3,
                        title: "Node.JS",
                        description: "Ambiente server-side do Javascript.",
                        details: "Uma forma de rodar o sevidor de aplicações localmente. O Node. js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados"
                    },

                    {
                        id: 4,
                        title: "ReactJS",
                        description: "Front-end library.",
                        details: "O ReactJS é uma lib Javascript desenvolvida pelo Facebook e é muito utilizado na criação de SPA's. A grande vantagem do React é o conteito da componentização, isto é, a 'quebra' do código em várias partes que serão reaproveitadas na aplicação."
                    },

                ]

            }

        )
    )

})

app.get("/details/1", (req, res) => {

    res.json({

        docs: {
            id: 0,
            title: "HTML5",
            description: "Linguagem de marcação de hipertexto.",
            details: "HTML siginfica Hypertext Markup Language. Permite ao desenvolvedor criar e estruturar seções, parágrafos, cabeçalhos, links e diversos tipos de mídia. É o primeiro passo para entrar no mundo do desenvolvimento Web. O HTML não é uma linguagem de programação, isso significa que não pode ser usado para criar funcionalidades dinâmicas.",
            
        }
    })
})

app.get("/details/2", (req, res) => {

    res.json({

        docs: {
            id: 1,
            title: "CSS3",
            description: "Folha de estilos.",
            details: "O Cascading Style Sheets(CSS) tem como função estilizar e animar a página HTML. O CSS é uma linguagem que complementa e formata o HTML, organizando melhor as linhas e adicionando novas possibilidades ao código.",
            
        }
    })
})

app.get("/details/3", (req, res) => {

    res.json({

        docs: {
            id: 2,
            title: "Javascript",
            description: "Linguagem de programação.",
            details: "O HTML e o CSS, apesar de serem marjoritariamente utilizados por programadores, não podem ser chamados de linguagens de programação por não apresentarem interatividade e lógica na página Web. Fazendo uma analogia entre a stack Web com o corpo humano, podemos dizer que um corpo bem estruturado por ossos resistentes(HTML) e visivelmente bonito, com pele e roupas de qualidade(CSS) não consegue se mover ou interagir com a sociedade a sua volta sem a ação do cérebro(Javascript)."
        }
    })
})

app.get("/details/4", (req, res) => {

    res.json({

        docs: {
            id: 3,
            title: "Node.JS",
            description: "Engine do Chrome.",
            details: "Uma forma de rodar o sevidor de aplicações localmente. O Node. js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados"
        }
    })
})

app.get("/details/5", (req, res) => {

    res.json({

        docs: {
            id: 4,
            title: "ReactJS",
            description: "Front-end library.",
            details: "O ReactJS é uma lib Javascript desenvolvida pelo Facebook e é muito utilizado na criação de SPA's. A grande vantagem do React é o conteito da componentização, isto é, a 'quebra' do código em várias partes que serão reaproveitadas na aplicação."
        }
    })
})


app.listen(PORT, ()=>{
    console.log("Your server is running.")
})