import React, {Component} from 'react';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div>nav bar</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                side bar
                            </div>
                            <div className="col-md-9">
                                main content
                            </div>
                        </div>
                    </div>
                    <div>Footer</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;