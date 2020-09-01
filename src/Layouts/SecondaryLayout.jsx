import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftColumn from "../components/LeftColumn";
import BreadCrumbs from '../components/UI/BreadCrumbs/BreadCrumbs';

class SecondaryLayout extends Component {
    render() {
        return (
            <div className={`container ${this.props.breadCrumbs ? 'py-2' :'py-4' }`}>
                {
                this.props.breadCrumbs ?
                <div className="row">
                    <div className="col-sm-12">
                        <BreadCrumbs breadCrumbLinks={this.props.breadCrumbs}/>
                    </div>
                </div>
                : null
                }
                <div className="row">
                    <div className="col-md-4 col-lg-3 shop-hide">
                        <LeftColumn />
                    </div>
                    <div className="col-md-8 col-lg-9">
                        {this.props.results ?
                            <div className="row page-results">
                                <div className="col-sm-12">
                                    {this.props.results}
                                </div>
                            </div>
                            : null}
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
    breadCrumbs: PropTypes.array,
}

export default SecondaryLayout;