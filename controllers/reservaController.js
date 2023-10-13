const Reserva = require('../models/reserva')

module.exports = class ReservaController {

    static async inserir(req, res) {
        console.log(req.body);

        const reserva = new Reserva({
            placaCarro: req.body.placaCarro,
            cpf: req.body.cpf,
            statusReserva: req.body.statusReserva,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim
        });

        reserva.save(reserva).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || 'Erro ao tentar inserir os dados do reserva.' });
        })
    }

    static async buscar(req, res) {

        Reserva.findOne({ cpf: req.body.cpf }).then(data => {
            if (!data) {
                return res.status(404).json({ "mensagem": "reserva pelo cpf não encontrada." })
            }


            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || 'Erro ao tentar buscar os dados do reserva pelo cpf.' });
        })

    }

    static async atualizar(req, res) {
        console.log(req.body);

        const { id } = req.query;

        Reserva.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
            if(!data){
                res.status(404).send({mensagem:"Não foi possivel alterar o registro"});
            } else res.send({mensagem:'Reserva id atualizada com sucesso'});
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || 'Erro ao tentar atualizar os dados do reserva pelo id.' });
        })
    }

}