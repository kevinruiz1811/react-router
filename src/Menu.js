import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((routes) => {
          if (routes.publicOnly && auth.user) return null;
          if (routes.private && !auth.user) return null;
          return (
            <li key={routes.to}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={routes.to}
              >
                {routes.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [];

routes.push({
  to: "/",
  text: "Home",
  private: false,
});

routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});

routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
});

routes.push({
  to: "/login",
  text: "Login",
  publicOnly: true,
  private: false,
});

routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
});

export { Menu };
