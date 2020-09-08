/* eslint-disable import/prefer-default-export */
import React from "react";

export const Header = () => (
    <header>
    <div id="top-header">
        <div className="container">
            <ul className="header-links pull-left">
                <li><a href="/"><i className="fa fa-phone"></i> +256-705-551-864</a></li>
                <li><a href="/"><i className="fa fa-envelope-o"></i> info@eretail.com</a></li>
                <li><a href="/"><i className="fa fa-map-marker"></i>Kampala Road</a></li>
            </ul>
            <ul className="header-links pull-right">
                <li><a href="/">UGX</a></li>
                <li><a href="/"><i className="fa fa-user-o"></i> My Account</a></li>
            </ul>
        </div>
    </div>
    <div id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="header-logo">
                        <a href="/" className="logo">
                          <h1 style={{ color: "#D10024" }}>ERetail.</h1>
                          <p style={{ color: "#fff" }}>A new touch to shopping</p>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="header-search">
                        <form>
                            <select className="input-select">
                                <option value="0">All Categories</option>
                                <option value="1">Category 01</option>
                                <option value="1">Category 02</option>
                            </select>
                            <input className="input" placeholder="Search here" />
                            <button className="search-btn">Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-3 clearfix">
                    <div className="header-ctn">
                        <div>
                            <a href="/">
                                <i className="fa fa-heart-o"></i>
                                <span>Your Wishlist</span>
                                <div className="qty">2</div>
                            </a>
                        </div>
                        <div className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" href="/">
                                <i className="fa fa-shopping-cart"></i>
                                <span>Your Cart</span>
                                <div className="qty">3</div>
                            </a>
                            <div className="cart-dropdown">
                                <div className="cart-list">
                                    <div className="product-widget">
                                        <div className="product-img">
                                            <img src="./img/product01.png" alt="product1image" />
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-name"><a href="/">product name goes here</a></h3>
                                            <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                                        </div>
                                        <button className="delete"><i className="fa fa-close"></i></button>
                                    </div>

                                    <div className="product-widget">
                                        <div className="product-img">
                                            <img src="./img/product02.png" alt="product2image" />
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-name"><a href="/">product name goes here</a></h3>
                                            <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                                        </div>
                                        <button className="delete"><i className="fa fa-close"></i></button>
                                    </div>
                                </div>
                                <div className="cart-summary">
                                    <small>3 Item(s) selected</small>
                                    <h5>SUBTOTAL: $2940.00</h5>
                                </div>
                                <div className="cart-btns">
                                    <a href="/">View Cart</a>
                                    <a href="/">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="menu-toggle">
                            <a href="/">
                                <i className="fa fa-bars"></i>
                                <span>Menu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
);
