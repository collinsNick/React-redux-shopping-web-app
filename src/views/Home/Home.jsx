import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container main-banner-container my-4">
          <div className="main-banner-content">
            <div className="main-banner-text">
              <h4 className="display-4 main-banner-title">Awsome Collection</h4>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ipsam, eligendi, in quo sunt possimus non incidunt odit vero
                aliquid similique quaerat.
              </p>
              <p>
                <NavLink className="btn btn-primary btn-lg" to="/all" exact>
                  Shop Now
                </NavLink>
              </p>
            </div>
            <img
              className="main-banner-image"
              src={require("../../assets/images/fila_black.jpg")}
              alt="Fila Back"
            />
          </div>
        </div>
        <div className="container sellout-section mb-4">
          <div className="card sellout-card card-body shadow">
            <img
              className="sellout-icon"
              src={require("../../assets/icons/money.png")}
              alt="Fila Back"
            />
            <div className="mt-3 text-center">
              <h5 className="sellout-title">Best Prices</h5>
              <p className="text-muted">
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.
              </p>
            </div>
          </div>

          <div className="card sellout-card card-body shadow">
            <img
              className="sellout-icon"
              src={require("../../assets/icons/truck.png")}
              alt="Fila Back"
            />
            <div className="mt-3 text-center">
              <h5 className="sellout-title">Fast delivery</h5>
              <p className="text-muted">
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.
              </p>
            </div>
          </div>

          <div className="card sellout-card card-body shadow">
            <img
              className="sellout-icon"
              src={require("../../assets/icons/check-circle.png")}
              alt="Fila Back"
            />
            <div className="mt-3 text-center">
              <h5 className="sellout-title">Free Returns</h5>
              <p className="text-muted">
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.
              </p>
            </div>
          </div>
        </div>

        <div className="container item-banners mb-4">
          <div className="item-container shadow">
            <div className="item-content">
              <p className="item-banner-title my-1">Kids Fashion</p>
              <h4 className="mb-3">
                Limited Offer <br /> Up to <span>30%</span>
              </h4>
              <NavLink
                className="btn btn-primary btn-sm"
                to="/category/kids"
                exact
              >
                Shop Now
              </NavLink>
            </div>
            <img
              className="banner-image"
              src={require("../../assets/images/baby_dress.jpg")}
              alt="baby dress"
            />
          </div>
          <div className="item-container shadow">
            <div className="item-content">
              <p className="item-banner-title my-1">Men's Collectons</p>
              <h4 className="mb-3">
                New Arrivals <br />
                Up to<span> 50%</span>
              </h4>
              <NavLink
                className="btn btn-primary btn-sm"
                to="/category/men"
                exact
              >
                Shop Now
              </NavLink>
            </div>
            <img
              className="banner-image"
              src={require("../../assets/images/shirt.jpg")}
              alt="shirt"
            />
          </div>
        </div>

        <div className="container products-section mb-4">
          <div className="products-section-title pb-3">
            <h4>ON SALE</h4>
            <NavLink
              className="btn btn-link products-section-link"
              to="/sale"
              exact
            >
              See All
            </NavLink>
          </div>
          <div className="products-container">
            <div className="card shadow">
              <img
                className="card-img-top"
                src="http://placehold.it/500x325"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">price.</p>
              </div>
            </div>
            <div className="card shadow">
              <img
                className="card-img-top"
                src="http://placehold.it/500x325"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">price.</p>
              </div>
            </div>
            <div className="card shadow">
              <img
                className="card-img-top"
                src="http://placehold.it/500x325"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">price.</p>
              </div>
            </div>
            <div className="card shadow">
              <img
                className="card-img-top"
                src="http://placehold.it/500x325"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">price.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container deals-contaner mb-4">
          <div className="deals-content shadow">
            <img
              className="deals-image"
              src={require("../../assets/images/flare_dress.png")}
              alt="#"
            />
            <div className="deals-text">
              <div className="heading-block">
                <h1 className="deals-title mb-4">Latest In Ladies Fashion</h1>
                <p className="text mb-4 text-muted">
                  Suspendisse massa leo, vesti cursus nulla sit amet, placerat
                  lorem.vestibulum cursus nulla sit amet, placerat lorem
                </p>
                <NavLink
                  className="btn btn-primary btn"
                  to="/category/women"
                  exact
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-contaner">
          <h5>New To Duka?</h5>
          <p className="text-muted">
            Subscribe to our newsletter to get updates on our lates offers!
          </p>
          <div className="input-contaner mt-2">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-contaner">
          <div>
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <NavLink to="#">Company</NavLink>
              </li>
              <li>
                <a href="#">Location</a>
                <NavLink to="#">Location</NavLink>
              </li>
              <li>
                <a href="#">Contacts</a>
                <NavLink to="#">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="#">Opening Hours</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5>Useful links</h5>
            <ul className="list-unstyled text-small">
              <li>
                <NavLink to="#">Help</NavLink>
              </li>
              <li>
                <NavLink to="#">Privacy Ploicy</NavLink>
              </li>
              <li>
                <NavLink to="#">Terms and Conditions</NavLink>
              </li>
              <li>
                <NavLink to="#">FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5>Customer Servie</h5>
            <ul className="list-unstyled text-small">
              <li>
                <NavLink to="#">Payment Methods</NavLink>
              </li>
              <li>
                <NavLink to="#">Money-back</NavLink>
              </li>
              <li>
                <NavLink to="#">Returns</NavLink>
              </li>
              <li>
                <NavLink to="#">Shipping</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5>Join Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <NavLink to="#">Twitter</NavLink>
              </li>
              <li>
                <NavLink to="#">Facebook</NavLink>
              </li>
              <li>
                <NavLink to="#">Instagram</NavLink>
              </li>
              <li>
                <NavLink to="#">Linkedin</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
