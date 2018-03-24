import React, { Component } from 'react';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../common/layout/grid';
import Input from '../common/form/input';
import If from '../common/operador/if';

class ItemList extends Component {

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index);
        }
    }

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
        }
    }

    renderRows() {
        const list = this.props.list || [];
        const { readOnly } = this.props;
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field
                        readOnly={readOnly}
                        name={`${this.props.field}[${index}].name`}
                        value={item.name}
                        component={Input}
                        placeholder="Informe o nome" />
                </td>
                <td>
                    <Field
                        readOnly={readOnly}
                        type="number"
                        value={item.value}
                        name={`${this.props.field}[${index}].value`}
                        component={Input}
                        placeholder="Informe o valor"/>
                </td>

                <If test={this.props.showStatus}>
                    <td>
                        <Field
                            readOnly={readOnly}
                            type="text"
                            value={item.status}
                            name={`${this.props.field}[${index}].status`}
                            component={Input}
                            placeholder="Informe o status"/>
                    </td>
                </If>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.add(index++)}
                        >
                        <i className="fa fa-plus"></i>
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => this.add(index++, item)}
                        >
                        <i className="fa fa-clone"></i>
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.remove(index)}
                        >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className="table-actions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}
const mapDispatchToProps = dispatch =>  bindActionCreators({arrayInsert, arrayRemove},dispatch);
export default connect(null, mapDispatchToProps)(ItemList)
