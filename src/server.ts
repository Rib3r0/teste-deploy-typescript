import  express, { request, response }  from "express"
import cors from "cors"
import ControllerEstadosCidades from "../controller/ControllerEstadosCidades"

const app = express()


app.use((request, response, next) => {
    
    response.header('Access-Control-Allow-Origin','*')

    response.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')

    app.use(cors())

    next()
    
})


//endpoints

app.get('/estados', cors(), ControllerEstadosCidades.pegarEstados)


app.get('/estados/sigla/:uf', cors(), ControllerEstadosCidades.pegarEstadoPelaSigla)

app.get('/capital/sigla/:uf', cors(),ControllerEstadosCidades.pegarCapitalPelaSigla)

app.get('/regiao/:regiao', cors(),ControllerEstadosCidades.pegarEstadosPelaRegiao)

app.get('/capital', cors(),ControllerEstadosCidades.pegarCapital)

app.get('/cidades/sigla/:uf', cors(),ControllerEstadosCidades.pegarCidades)

app.listen(3333, function(){
    console.log('Servidor aguardando requisições na porta 3333')
})