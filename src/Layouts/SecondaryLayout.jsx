import React, {Component} from 'react';
import LeftColumn from "../components/LeftColumn";

class SecondaryLayout extends Component {
    render() {
        return (
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 col-lg-3 shop-hide">
                        <LeftColumn/>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondaryLayout;