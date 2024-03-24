import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "tailwind.css";
import LayoutContainer from "./components/buildingBlocks/layoutContainer";
import MainNavDemo from "./routes/design+/components/mainNavDemo";
import MainNav from "./routes/gsap+/components/gsapNav";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Indie+Flower&family=Nova+Mono&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en" style={{ background: "#444" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LayoutContainer className="bg-col-890">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </LayoutContainer>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
