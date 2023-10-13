const Cliente = require('../models/cliente')

module.exports = class ClienteController {

    static async inserir(req,res) {
        console.log(req.doby);

        const cliente = new Cliente({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            CNH: req.body.CNH,
            vencCNH: req.body.vencCNH,                                                                                                      
            fotoCNH: req.body.fotoCNH,
        });

        cliente.save(cliente).then(data => {
            res.send(data);
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar inserir os dados do cliente: ${cliente}.'});
        })
    }

    static async buscar(req,res) {
        console.log(req.doby);
        Cliente.findOne({cpf:req.body.cpf}).then(data => {
            
            if(!data){
                return res.status(404).json({"mensagem":"cliente pelo cpf não encontrada."})}

            res.send(data);
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar buscar os dados do cliente pelo cpf.'});
        })
        
    }

}