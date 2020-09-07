import React from 'react';

export const Nav = () => (
<section>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<nav className="navbar navbar-expand-lg navbar-light navigation">
					<a className="navbar-brand" href="index.html">
						<img src="static/images/favicon.png" alt="navbarimg" />
                        <p><h4>ERetail</h4>Classified Market Place</p>
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto main-nav ">
							<li className="nav-item active">
								<a className="nav-link" href="index.html">Home</a>
							</li>
							<li className="nav-item dropdown dropdown-slide">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/">Dashboard<span><i className="fa fa-angle-down"></i></span>
								</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="dashboard.html">Dashboard</a>
									<a className="dropdown-item" href="dashboard-my-ads.html">Dashboard My Ads</a>
									<a className="dropdown-item" href="dashboard-favourite-ads.html">Dashboard Favourite Ads</a>
									<a className="dropdown-item" href="dashboard-archived-ads.html">Dashboard Archived Ads</a>
									<a className="dropdown-item" href="dashboard-pending-ads.html">Dashboard Pending Ads</a>
								</div>
							</li>
							<li className="nav-item dropdown dropdown-slide">
								<a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Pages <span><i className="fa fa-angle-down"></i></span>
								</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="about-us.html">About Us</a>
									<a className="dropdown-item" href="contact-us.html">Contact Us</a>
									<a className="dropdown-item" href="user-profile.html">User Profile</a>
									<a className="dropdown-item" href="404.html">404 Page</a>
									<a className="dropdown-item" href="package.html">Package</a>
									<a className="dropdown-item" href="single.html">Single Page</a>
									<a className="dropdown-item" href="store.html">Store Single</a>
									<a className="dropdown-item" href="single-blog.html">Single Post</a>
									<a className="dropdown-item" href="blog.html">Blog</a>

								</div>
							</li>
							<li className="nav-item dropdown dropdown-slide">
								<a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Listing <span><i className="fa fa-angle-down"></i></span>
								</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="category.html">Ad-Gird View</a>
									<a className="dropdown-item" href="ad-listing-list.html">Ad-List View</a>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto mt-10">
							<li className="nav-item">
								<a className="nav-link login-button" href="login.html">Login</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white add-button" href="ad-listing.html"><i className="fa fa-plus-circle"></i> Add Listing</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</section>
)