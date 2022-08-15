import React from "react";
import Link from "next/link";

const Layout: React.FunctionComponent<{
  children: React.ReactNode;
  name?: string;
}> = ({ children, name }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <header className="p-5 mb-2 bg-blue-700 text-white text-3xl font-bold">
        <Link href="/">
          <a>Pokemon{name ? ` - ${name}` : ""}</a>
        </Link>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
