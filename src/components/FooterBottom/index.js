import React from 'react';

export const FooterBottom = () => (
            <footer className="footer-bottom">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-12">
                    <div className="copyright">
                    <p>Copyright © <script>
                        var CurrentYear = new Date().getFullYear()
                        document.write(CurrentYear)
                        </script>. All Rights Reserved, theme by <a className="text-primary" href="https://themefisher.com" target="_blank" rel="noopener noreferrer">themefisher.com</a></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="top-to">
                <a id="top" className="" href="/"><i className="fa fa-angle-up"></i></a>
            </div>
        </footer>
    )
