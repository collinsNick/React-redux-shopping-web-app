import React, {Component} from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import LeftColumn from '../components/LeftColumn';
import Modal from '../components/UI/Modal/Modal';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <header>
                        <Menu cartItemNumber={this.props.storeCartCount}/>
                    </header>
                    <main>
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <LeftColumn/>
                                </div>
                                <div className="col-md-8 col-lg-9">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        {this.props.showModal ?
                            <Modal
                                showModal={this.props.showModal}
                                closeModalClick={this.props.closeModalProp}>
                                Sorry! You cannot order more of this product.
                            </Modal> : null
                        }
                    </main>

                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;