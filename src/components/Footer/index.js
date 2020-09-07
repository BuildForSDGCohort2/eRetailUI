import React from 'react';

export const Footer = () => (
<footer className="footer section section-sm">
  <div className="container">
    <div className="row">
      <div className="text-center col-md-6">
        <div className="block">
          <h4>Site Pages</h4>
          <ul>
            <li><a href="/">How It works</a></li>
            <li><a href="/">Deals & Coupons</a></li>
            <li><a href="terms-condition.html">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center col-md-6">
        <div className="block-2 app-promotion">
          <div className="mobile d-flex">
            <a href="/">
              <img src="static/images/footer/phone-icon.png" alt="mobile-icon" />
            </a>
            <p>Get the eRetail Mobile App and Save more</p>
          </div>
          <div className="download-btn d-flex my-3">
            <a href="/"><img src="static/images/apps/google-play-store.png" className="img-fluid" alt="playstoreimg" /></a>
            <a href="/" className=" ml-3"><img src="static/images/apps/apple-app-store.png" className="img-fluid" alt="appleappstorepng" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

)