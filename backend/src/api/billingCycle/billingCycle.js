const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome'] },
    value: { type: Number, min: 0, required: [true, 'Informe o valor']}
});

const debtSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o '] },
    value: { type: Number, min: 0, required: [true, 'Informe o nome'] },
    status: { type: String, required: false, uppercase: [true, 'Informe o valor'], enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
});

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome'] },
    month: { type: Number, min: 1, max: 12, required: [true, 'Informe o mes']},
    year: { type: Number, min: 1970, max:2100, required: [true, 'Informe o ano corretamente (entre 1970 e 2100)'] },
    credits: [creditSchema],
    debts: [debtSchema]
});

module.exports = restful.model('billingCycle', billingCycleSchema);
