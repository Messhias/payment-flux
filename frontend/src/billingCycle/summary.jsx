import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

export default props => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox
                    cols='12 4'
                    color='green'
                    icon="bank"
                    value={`R$ ${props.credit}`}
                    text="Total de créditos" />
                <ValueBox
                    cols='12 4'
                    color='red'
                    icon="credit-card"
                    value={`R$ ${props.debt}`}
                    text="Total de débitos" />
                <ValueBox
                    cols='12 4'
                    color='blue'
                    icon="money"
                    value={`R$ ${props.credit - props.debt}`}
                    text="Valor consolidado" />
            </Row>
        </fieldset>
    </Grid>
);
