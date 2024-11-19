import Link from "next/link";
import { ToggleSwitch } from "../common/toggle-switch";

export const Header: React.FC = () => {
  const links = [
    { path: "/", label: "home" },
    { path: "/projects", label: "projects" },
    { path: "/manga", label: "manga" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <header className="font-mplus sticky top-0 z-10 mb-10 backdrop-blur-lg">
      <div className="container flex min-h-[60px] items-center py-4">
        <nav className="flex-1">
          <ul className="flex items-center gap-8">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ToggleSwitch />
      </div>
    </header>
  );
};
