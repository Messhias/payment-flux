import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { reduxForm, Field } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycleActions';

class billingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props;
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
                        type="number"/>
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

billingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(billingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);


export default connect(null, mapDispatchToProps)(billingCycleForm)
