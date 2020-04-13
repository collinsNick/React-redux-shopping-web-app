import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
                        { this.props.results ?
                        <div className="row page-results">
                            <div className="col-sm-12">
                                { this.props.results}
                            </div>
                        </div>
                        :null }
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SecondaryLayout.prototypes = {
    results: PropTypes.string,
}

export default SecondaryLayout;