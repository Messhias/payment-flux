import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { reduxForm, Field, formValueSelector } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycleActions';

import ItemList from './itemList';
import Summary from './Summary';

class billingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v ) => t + v;
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        };
    }

    render() {
        const {
            handleSubmit,
            readOnly,
            credits,
            debts
        } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();
        return (
            <form
                role="form"
                onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        readOnly={readOnly}
                        name='name'
                        component={labelAndInput}
                        label="Nome"
                        placeholder="Informe o nome"
                        cols="12 4"
                        type="text"/>
                    <Field
                        readOnly={readOnly}
                        name='month'
                        component={labelAndInput}
                        label="Mês"
                        placeholder="Informe o mês"
                        cols="12 4"
                        type="number"/>
                    <Field
                        readOnly={readOnly}
                        name='year'
                        component={labelAndInput}
                        label="Ano"
                        placeholder="Informe o ano"
                        cols="12 4"
                        type="number"
                        />
                    <Summary
                        credit={sumOfCredits}
                        debt={sumOfDebts} />
                    <ItemList cols="12 6"
                        list={credits}
                        field="credits"
                        legend="Créditos"
                        readOnly={readOnly} />
                    <ItemList cols="12 6"
                        list={credits}
                        field="debts"
                        legend="Débitos"
                        readOnly={readOnly}
                        showStatus={true} />
                </div>
                <div className="box-footer">
                    <button
                        type="submit"
                        className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button
                        className="btn btn-default"
                        onClick={this.props.init}
                        type="button">Cancelar</button>
                </div>
            </form>
        );
    }
}
billingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(billingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(billingCycleForm)
