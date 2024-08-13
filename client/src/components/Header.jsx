import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/new-video",
      name: "New Video",
    },
  ];

  return (
    <header className="flex items-center justify-between p-5 mb-5 border-b">
      <Link to="/">
        <img src="/logo_aluraflix.png" alt="logo_aluraflix" />
      </Link>
      <nav>
        <ul className="flex items-center gap-5 text-xl font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`${link.path === pathname && "text-blue-500"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
