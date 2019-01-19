import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Menu extends Component {
    render() {

        return (

            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <span className="navbar-brand">DUKA</span>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Home <span
                                className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/men" exact>Men</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/women" exact>Women</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/children" exact>Kids</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sale" exact>Sale</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart" exact>Cart <span
                                className="badge badge-light">{this.props.cartItemNumber}</span></NavLink>
                        </li>
                    </ul>

                </div>
            </nav>

        )
    }

}



export default Menu;