import React, {Component} from 'react';
import MainWrapper from '../components/UI/Wrappers/MainPageWrapper';
import SideMenuWrapper from '../components/UI/Wrappers/SideMenuWrapper';
import ContentWrapper from '../components/UI/Wrappers/PageContentWrapper';
import MainMenu from '../components/Menus/MainMenu';
import SideMenu from '../components/Menus/SideMenu';
import Footer from '../components/Footer';
import LeftColumn from '../components/LeftColumn';
import Modal from '../components/UI/Modal/Modal';
import PropTypes from 'prop-types';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <MainWrapper>
                    <SideMenuWrapper showSideBar={this.props.showSideBar}>
                        <SideMenu cartItemNumber={this.props.storeCartCount}/>
                    </SideMenuWrapper>
                    <ContentWrapper>
                        <header>
                            <MainMenu
                                cartItemNumber={this.props.storeCartCount}
                                toggleSideBar={this.props.toggleSideBar}/>
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
                                    {this.props.modalMessage}
                                </Modal> : null
                            }
                        </main>
                        <footer>
                            <Footer/>
                        </footer>
                    </ContentWrapper>
                </MainWrapper>
            </React.Fragment>
        )
    }
}

Layout.propTpes = {
    storeCartCount: PropTypes.number.isRequired,
    showModal: PropTypes.bool,
    closeModalClick: PropTypes.func,
    modalMessage: PropTypes.string,
    showSideBar: PropTypes.bool
};

export default Layout;