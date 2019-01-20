import React, {Component} from 'react';
import MainWrapper from '../components/UI/Wrappers/MainPageWrapper';
import SideMenuWrapper from '../components/UI/Wrappers/SideMenuWrapper';
import ContentWrapper from '../components/UI/Wrappers/PageContentWrapper';
import MainMenu from '../components/Menus/MainMenu';
import SideMenu from '../components/Menus/SideMenu';
import Footer from '../components/Footer';
import Modal from '../components/UI/Modal/Modal';
import PropTypes from 'prop-types';

class MainLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <MainWrapper>
                    <SideMenuWrapper
                        showSideBar={this.props.showSideBar}
                        toggleSideMenu={this.props.toggleSideBar}>
                        <SideMenu cartItemNumber={this.props.storeCartCount}
                                  showBackDrop={this.props.showSideBar}/>
                    </SideMenuWrapper>
                    <ContentWrapper>
                        <header>
                            <MainMenu
                                cartItemNumber={this.props.storeCartCount}
                                toggleSideBar={this.props.toggleSideBar}/>
                        </header>
                        <main>
                            {this.props.children}
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

MainLayout.propTpes = {
    storeCartCount: PropTypes.number.isRequired,
    showModal: PropTypes.bool,
    closeModalClick: PropTypes.func,
    modalMessage: PropTypes.string,
    showSideBar: PropTypes.bool,
    toggleSideBar: PropTypes.func.isRequired
};

export default MainLayout;