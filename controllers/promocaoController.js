const Promocao = require('../models/promocao')
const Cliente = require('../models/cliente')

module.exports = class PromocaoController {

    static async inserir(req,res) {
        console.log(req.doby);

        const promocao = new Promocao({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade
        });

        promocao.save(promocao).then(data => {
            res.send(data);
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar inserir os dados do carro promocao: ${promocao}.'});
        })
    }

    static async enviarPromocao(req,res) {
        const { id } = req.query;

        const promocao = await Promocao.findById(id)
        const clientes = await Cliente.find({})

        // EVNIAR EMAIL PARA OS CLIENTES

        res.json({'promocao': promocao, 'clientes':clientes})
    }
}