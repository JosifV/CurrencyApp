const Footer = () => {
  return (
    <div>
      {/* <link rel="stylesheet" href="footer.css" /> */}
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="divSigniture">
                <p className="copyright-text">
                  Test project &copy; 2019 Made by{" "}
                  <a href="https://cv-josifv.firebaseapp.com/indexGreenEn.html">
                    Josif Vacic.
                  </a>
                </p>
              </div>
            </div>
            <div className="col" />
            <div className="col">
              <div className="divLinks">
                <ul className="ulSocial">
                  <li>
                    <a
                      className="twitter"
                      href="https://cv-josifv.firebaseapp.com/indexGreenEn.html"
                    >
                      <i className="fas fa-user-alt" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="facebook"
                      href="https://www.facebook.com/iosif.vacic"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="https://github.com/JosifV">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin"
                      href="https://www.linkedin.com/in/josif-vaci%C4%87-657660165/"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .jubmotron {
            margin: 0;
          }
          .col {
            text-align: center;
          }
          .copyright-text {
            margin: 0;
          }
          .ulSocial {
            text-align: right;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
          }
          .ulSocial li {
            display: inline-block;
            margin-bottom: 4px;
          }
          .ulSocial a {
            margin-left: 6px;
            background-color: #073642;

            color: #839496;
            font-size: 16px;
            display: inline-block;
            line-height: 44px;
            width: 44px;
            height: 44px;
            text-align: center;
            margin-right: 8px;
            border-radius: 100%;
          }
          .ulSocial a:active,
          .ulSocial a:focus,
          .ulSocial a:hover {
            color: #fff;
            background-color: #002b36;
          }
          .ulSocial a.facebook:hover {
            background-color: #002b36;
          }
          .ulSocial a.twitter:hover {
            background-color: #002b36;
          }
          .ulSocial a.linkedin:hover {
            background-color: #002b36;
          }
          .ulSocial a.dribbble:hover {
            background-color: #002b36;
          }
        `}</style>
      </div>
    </div>
  );
};
export default Footer;
