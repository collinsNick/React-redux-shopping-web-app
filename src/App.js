import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './layout/Layout';
import Homepage from './containers/pages/Index';
import Men from './containers/pages/Men';
import Women from './containers/pages/Women';
import Children from './containers/pages/Children';
import Sale from './containers/pages/Sale';
import Cart from './containers/pages/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout storeCartCount={this.props.storeCartItemsCount}>
              <Switch>
                  <Route path={'/'} exact component={Homepage}/>
                  <Route path={'/men'} component={Men}/>
                  <Route path={'/women'} component={Women}/>
                  <Route path={'/children'} component={Children}/>
                  <Route path={'/sale'} component={Sale}/>
                  <Route path={'/Cart'} component={Cart}/>
                  {/*always redirect to index*/}
                  <Redirect to={'/'}/>
              </Switch>
          </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
       storeCartItemsCount:state.cartTotal
    }
}

export default withRouter(connect(mapStateToProps)(App));
