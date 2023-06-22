import { getEstados, getDadosEstado, getCapitalEstado, getEstadoRegião, getCapital, getCidades } from "../model/EstadosCidades";
import { Request, Response } from "express";


export default {
    async pegarEstados(request: Request,response: Response) {
        return response.json( await getEstados())
    },
    async pegarEstadoPelaSigla(request: Request,response: Response) {
        return response.json(await getDadosEstado(request.params.uf.toUpperCase()))
    },
    async pegarCapitalPelaSigla(request: Request,response: Response) {
        return response.json(await getCapitalEstado(request.params.uf.toUpperCase()))
    },
    async pegarEstadosPelaRegiao(request: Request,response: Response) {
        return response.json(await getEstadoRegião(request.params.regiao.toUpperCase()))
    },
    async pegarCapital(request: Request,response: Response) {
        return response.json(await getCapital())
    },
    async pegarCidades(request: Request,response: Response) {
        return response.json(await getCidades(request.params.uf.toUpperCase()))
    },
}