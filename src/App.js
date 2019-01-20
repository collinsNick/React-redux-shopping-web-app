import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {closeMaxProductModal, toogleSideBar} from './store/actions/shop'
import MainLayout from './Layouts/MainLayout';
import Homepage from './containers/pages/Index';
import Men from './containers/pages/Men';
import Women from './containers/pages/Women';
import Children from './containers/pages/Children';
import Sale from './containers/pages/Sale';
import Cart from './containers/pages/Cart';
import Checkout from './containers/pages/Checkout';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainLayout
                    storeCartCount={this.props.storeCartItemsCount}
                    showModal={this.props.showModalProp}
                    closeModalProp={this.props.closeModalProp}
                    modalMessage={this.props.modalMessageProp}
                    showSideBar={this.props.showSideNavigationProp}
                    toggleSideBar={this.props.toggleSideBarProp}>
                    <Switch>
                        <Route path={'/'} exact component={Homepage}/>
                        <Route path={'/men'} component={Men}/>
                        <Route path={'/women'} component={Women}/>
                        <Route path={'/children'} component={Children}/>
                        <Route path={'/sale'} component={Sale}/>
                        <Route path={'/cart'} component={Cart}/>
                        <Route path={'/checkout'} component={Checkout}/>
                        {/*always redirect to index*/}
                        <Redirect to={'/'}/>
                    </Switch>
                </MainLayout>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storeCartItemsCount: state.cartTotal,
        showModalProp: state.productMaxShowModal,
        modalMessageProp: state.modalMessage,
        showSideNavigationProp: state.showSideNavigation
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModalProp: () => dispatch(closeMaxProductModal()),
        toggleSideBarProp: () => dispatch(toogleSideBar())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
