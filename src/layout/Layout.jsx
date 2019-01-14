import React, {Component} from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import LeftColumn from '../components/LeftColumn';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <header>
                        <Menu />
                    </header>
                    <main>
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <LeftColumn />
                                </div>
                                <div className="col-md-9">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>

                    </main>

                    <footer>
                        <Footer />
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;