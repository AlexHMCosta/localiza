const Funcionario = require('../models/funcionario')

module.exports = class FuncionarioController {

    static async inserir(req,res) {
        console.log(req.doby);

        const funcionario = new Funcionario({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            salario: req.body.salario,
            qtAlugueis: req.body.qtAlugueis,
            status: req.body.status,
        });

        funcionario.save(funcionario).then(data => {
            res.send(data);
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar inserir os dados do funcionario: ${funcionario}.'});
        })
    }

    static async buscar(req,res) {
        console.log(req.doby);
        Funcionario.findOne({cpf:req.body.cpf}).then(data => {
            
            console.log(data);
            if(!data){
                return res.status(404).json({"mensagem":"funcionario pelo cpf não encontrada."})}

            res.send(data);
        }).catch(error=>{
            res.status(500).send({mensagem: error.message || 'Erro ao tentar buscar os dados do funcionario pelo cpf.'});
        })
        
    }

}