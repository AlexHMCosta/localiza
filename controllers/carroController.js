const Carro = require('../models/carro')

module.exports = class CarroController {

    static async inserir(req,res) {
        console.log(req.doby);

        const carro = new Carro({
            placa: req.body.placa,
            ano: req.body.ano,
            modelo: req.body.modelo,
            tipo: req.body.tipo,
            quilometragem: req.body.quilometragem,
            diaria: req.body.diaria,
            observacao: req.body.observacao,
        });

        carro.save(carro).then(data => {
            res.send(data);
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar inserir os dados do carro: ${carro}.'});
        })
    }

    static async buscar(req,res) {
        console.log(req.doby);
        Carro.findOne({placa:req.body.placa}).then(data => {
            if(!data) {
                return res.status(404).json({"mensagem":"Carro não encontrado."})}
            res.send(data);
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar buscar os dados do carro pela placa.'});
        })
        
    }

    static async deletar(req,res) {
        console.log(req.doby);

        const { id } = req.query;

        Carro.findByIdAndRemove(id, {useFindAndModify: false}).then(data => {
            if(!data) {
                return res.status(404).json({"mensagem":"Carro não encontrado."})
            } else res.send({mensagem: "Carro removido com sucesso"})
                
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar remover os dados do carro pela placa.'});
        })
        
    }

}