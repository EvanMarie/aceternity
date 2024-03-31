import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
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
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div
        style={{
          margin: 0,
          position: "fixed",
          top: 0,
          left: 0,
          overflowX: "hidden",
          overflowY: "hidden",
          width: "100%",
          height: "100%",

          color: "rgba(245, 150, 54, 1)",
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "column",
          fontSize: "2vh",
          boxShadow: "1vh 1vh 1vh black",
          textShadow: "0 0 0.5vh #FFF",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(100, 100, 100, 1) 0%, rgba(50, 50, 50, 1) 50%, rgba(23, 23, 23, 1) 100%)",
            width: "100%",
            height: "100%",
            fontFamily: "monospace",
            display: "flex",
            padding: "1vh",
            alignItems: "center",
            fontSize: "2vh",
            boxShadow: "0 0 1vh black",
            textShadow: "0 0 0.5vh #FFF",
            margin: 0,
            position: "fixed",
            top: 0,
            left: 0,
            overflowX: "hidden",
            overflowY: "hidden",
            alignContent: "center",
            justifyContent: "center",
            color: "rgb(0, 149, 211)",
          }}
        >
          <div
            style={{
              width: "fit-content%",
              background: "rgba(99, 0, 74, 0.6)",
              padding: "3vh",
              boxShadow: "1vh 1vh 1vh black",
              display: "flex",
              alignItems: "center",
              fontSize: "3vh",
              flexDirection: "column",
              gap: "3vh",
              borderRadius: "3vh",
              border: "0.3vh solid rgba(245, 150, 54)",
              fontWeight: "600",
              color: "rgba(250, 217, 145, 1)",
              textShadow: "0 0 0.5vh #000",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <img
                src="http://www.evanmarie.com/content/files/images/chatBubbleLogoLarge.png"
                width="250px"
                height="250px"
                alt="Chatter"
              /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: "2.5vh",
              }}
            >
              <h3
                style={{
                  padding: "1vh",
                  margin: "0.5vh",
                }}
              >
                Oh, snippity snaps!!
              </h3>
              <h3 style={{ padding: "0.5vh", margin: "0.5vh" }}>
                {error.status} {error.statusText}
              </h3>
            </div>

            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "1vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <p
                style={{
                  fontSize: "2.5vh",
                  fontWeight: "600",
                  padding: "0.5vh",
                  margin: "0.5vh",
                }}
              >
                {error.data}
              </p>
            </div>
            <div
              style={{
                width: "100%",
                fontFamily: "monospace",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "2vh",
                padding: "1vh",
              }}
            >
              <a
                href="/"
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  background: "rgba(220, 163, 255, 1)",
                  padding: "1vh 2vh",
                  boxShadow: "1vh 1vh 1vh black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "1vh",
                  border: "0.3vh solid rbg(0, 149, 211)",
                  zIndex: 1,
                  color: "rgba(38, 3, 30, 1)",
                  textShadow: "0 0 0.5vh rgba(250, 217, 145, 0.5)",
                  textDecoration: "none",
                  fontSize: "2.5vh",
                }}
              >
                Let's try this again...click me
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(100, 100, 100, 1) 0%, rgba(50, 50, 50, 1) 50%, rgba(23, 23, 23, 1) 100%)",
          width: "100%",
          height: "100%",
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "2vh",
          boxShadow: "0 0 1vh black",
          textShadow: "0 0 0.5vh #FFF",
          margin: 0,
          position: "fixed",
          top: 0,
          left: 0,
          overflowX: "hidden",
          overflowY: "hidden",
          alignContent: "center",
          justifyContent: "center",
          color: "rgb(0, 149, 211)",
          padding: "1vh",
        }}
      >
        {" "}
        <div
          style={{
            width: "fit-content%",
            background: "rgba(99, 0, 74, 0.6)",
            padding: "3vh",
            boxShadow: "1vh 1vh 1vh black",
            display: "flex",
            alignItems: "center",
            fontSize: "3vh",
            flexDirection: "column",
            gap: "3vh",
            borderRadius: "3vh",
            border: "0.3vh solid rgba(245, 150, 54)",
            fontWeight: "600",
            color: "rgba(250, 217, 145, 1)",
            textShadow: "0 0 0.5vh #000",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <img
              src="http://www.evanmarie.com/content/files/images/chatBubbleLogoLarge.png"
              width="250px"
              height="250px"
              alt="Chatter"
            /> */}
          </div>
          <p style={{ padding: "0.5vh", margin: "0.5vh", textAlign: "center" }}>
            Oh, snippity SNAPS!!
          </p>

          <p style={{ padding: "0.5vh", margin: "0.5vh" }}>{error.message}</p>
          <p style={{ padding: "0.5vh", margin: "0.5vh" }}>
            The stack trace is:
          </p>
          <div
            style={{
              height: "15vh",
              width: "400px",
              overflowY: "auto",
              padding: "1vh",
              border: "0.3vh solid rgba(23, 23, 23)",
              boxShadow: "0 0 1vh black inset",
              background: "rgba(1, 23, 13, 0.3)",
              fontSize: "1.4vh",
              lineHeight: "2vh",
              textShadow: "none",
              fontWeight: 400,
              color: "white",
            }}
          >
            <pre style={{ fontSize: "1.4vh" }}>{error.stack}</pre>
          </div>

          <div
            style={{
              width: "100%",
              fontFamily: "monospace",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "2vh",
              padding: "1vh",
            }}
          >
            <a
              href="/"
              style={{
                width: "fit-content",
                height: "fit-content",
                background: "rgba(220, 163, 255, 1)",
                padding: "1vh 2vh",
                boxShadow: "1vh 1vh 1vh black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "1vh",
                border: "0.3vh solid rbg(0, 149, 211)",
                zIndex: 1,
                color: "rgba(38, 3, 30, 1)",
                textShadow: "0 0 0.5vh rgba(250, 217, 145, 0.5)",
                textDecoration: "none",
                fontSize: "2.5vh",
              }}
            >
              Let's try this again...click me
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

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
