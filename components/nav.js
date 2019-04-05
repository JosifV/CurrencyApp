import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="/">
        Exchange
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/eur">
              <a className="nav-link">Euro</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/usd">
              <a className="nav-link">US Dollar</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/rubl">
              <a className="nav-link">Russian Ruble</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/gbp">
              <a className="nav-link">GB Pound</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
