import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsContent from '../common/tab/tabsContent';
import TabsHeader from '../common/tab/tabsHeader';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import List from './billingCycleList';
import Form from './billingCycleForm';

import { init, create, update, remove } from './billingCycleActions';

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader
                    title="Ciclos de pagamento"
                    small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target='tabList'/>
                            <TabHeader label="Incluir" icon="plus" target='tabCreate'/>
                            <TabHeader label="Alterar" icon="pencil" target='tabUpdate'/>
                            <TabHeader label="Exlcuir" icon="trash-o" target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent
                                id="tabCreate">
                                <Form
                                    submitLabel="Incluir"
                                    submitClass="primary"
                                    onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent
                                id="tabUpdate">
                                <Form
                                    submitLabel="Alterar"
                                    submitClass="info"
                                    onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent
                                id="tabDelete">
                                <Form
                                    submitLabel="Excluir"
                                    submitClass="danger"
                                    readOnly={true}
                                    onSubmit={this.props.remove} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
