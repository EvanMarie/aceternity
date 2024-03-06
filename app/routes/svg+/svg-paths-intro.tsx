import CodeExample from "~/components/buildingBlocks/codeExample";
import HL from "~/components/buildingBlocks/highlight";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import {
  SVGContainer,
  SVGExample,
  SVGHeading,
  SVGSection,
  SVGText,
} from "~/components/main/formattingComponents";
import { motion } from "framer-motion";
import { useState } from "react";
import { HideIcon, ViewIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import DescriptionModalContent from "../css+/components/descriptionModalContent";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Flex from "~/components/buildingBlocks/flex";
import Divider from "~/components/buildingBlocks/divider";

export default function FramerMotionIntro() {
  const [showCircle1, setShowCircle1] = useState(false);
  const [showCircle2, setShowCircle2] = useState(false);
  const buttonIcon = showCircle1 ? HideIcon : ViewIcon;
  return (
    <DescriptionModalContent
      heading="Intro to SVG Paths"
      bg="bg-linear2op50"
      headingColor="bg-col-890"
    >
      <FlexFull className="justify-center">
        <VStackFull className="lg:w-90% xl:w-80%" align="items-start">
          {/* <svg width="25vh" height="25vh" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10 H 190 V 190 H 10 Z"
              fill="deeppink"
              stroke="cyan"
              strokeWidth="4"
            />
          </svg>
          <svg width="25vh" height="25vh" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M10 10 H 190 V 190 H 10 Z" // Initial path
              fill="deeppink"
              stroke="cyan"
              strokeWidth="4"
              initial={{ pathLength: 0 }} // Start with the path not drawn
              animate={{ pathLength: 1 }} // Animate to fully drawn
              transition={{
                duration: 5,
                ease: "easeInOut",
              }}
            />
          </svg> */}
          <SVGHeading>Understanding SVG Paths</SVGHeading>

          <SVGSection>
            {" "}
            <SVGText>
              SVG paths are defined with the &lt;path&gt; element and can
              describe virtually any shape using a series of commands. A path's
              d attribute contains these commands, starting with move commands
              (M or m), line commands (L, l, H, h, V, v), curve commands (C, c,
              S, s, Q, q, T, t), arc commands (A, a), and closepath commands (Z
              or z).
            </SVGText>
            <SVGText>Here's an example of a simple path:</SVGText>
            <CodeExample>{`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 H 190 V 190 H 10 Z" fill="transparent" stroke="cyan" stroke-width="2"/>
</svg>
`}</CodeExample>
            <SVGText>
              This path starts at point (10,10) within the container, draws a
              horizontal line to (190,10), a vertical line to (190,190), a
              horizontal line back to (10,190), and finally closes the shape
              back at (10,10), forming a square.
            </SVGText>
            <SVGContainer>
              <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 10 H 190 V 190 H 10 Z"
                  fill="transparent"
                  stroke="cyan"
                  stroke-width="2"
                />
              </svg>
            </SVGContainer>
            <SVGHeading>Command by command:</SVGHeading>
            <SVGText>
              - <HL>M10 10</HL>: Move to (10,10).
            </SVGText>
            <SVGText>
              - <HL>H 190</HL>: Draw a horizontal line to x=190 from the current
              y-position.
            </SVGText>
            <SVGText>
              - <HL>V 190</HL>: Draw a vertical line to y=190 from the current
              x-position.
            </SVGText>
            <SVGText>
              - <HL>H 10</HL>: Draw a horizontal line back to x=10.
            </SVGText>
            <SVGText>
              - <HL>Z</HL>: Close the path by connecting the last point to the
              first point.
            </SVGText>
            <Divider />
            <SVGHeading>
              <HL>Further understanding the SVG path:</HL>
            </SVGHeading>
            <SVGText>
              The <HL>d</HL> attribute in an SVG <HL>&lt;path&gt;</HL> element
              is a mini language within itself, designed to define the shape of
              the path. It's composed of a series of commands and parameters
              that instruct how the path should be drawn. Let's break down the
              basics and how the numbers work within these commands.
            </SVGText>
            <Divider />
            <SVGHeading>Basic Commands in the d Attribute:</SVGHeading>
            <SVGText>
              - <HL>M (moveto)</HL>: Moves the pen to a new location. Syntax:{" "}
              <HL>M x,y</HL> or <HL>m dx,dy</HL>. The uppercase <HL>M</HL> moves
              to an absolute position, while the lowercase <HL>m</HL> moves to a
              position relative to the current position.
            </SVGText>
            <SVGText>
              - <HL>L (lineto)</HL>: Draws a straight line from the current
              position to a new position. Syntax: <HL>L x,y</HL> or{" "}
              <HL>l dx,dy</HL>. Like <HL>M</HL>, uppercase means absolute
              positioning, lowercase means relative.
            </SVGText>
            <SVGText>
              -<HL> H (horizontal lineto)</HL>: Draws a horizontal line from the
              current position. Syntax: <HL>H x</HL> or <HL>h dx</HL>. Uppercase
              means the line will go to an absolute x-coordinate, lowercase
              means it will move a relative distance from the current position.
            </SVGText>
            <SVGText>
              - <HL>V (vertical lineto)</HL>: Draws a vertical line from the
              current position. Syntax: <HL>V y</HL> or <HL>v dy</HL>. Uppercase
              means the line will go to an absolute y-coordinate, lowercase
              means a relative move.
            </SVGText>
            <SVGText>
              - <HL>C (curveto)</HL> : Draws a cubic Bézier curve from the
              current point to a new point. Syntax: <HL>C x1,y1 x2,y2 x,y</HL>{" "}
              or <HL>c dx1,dy1 dx2,dy2 dx,dy</HL>. The points <HL>(x1,y1)</HL>{" "}
              and
              <HL>(x2,y2)</HL> are control points for the curve, and{" "}
              <HL>(x,y)</HL> is the end point of the curve.
            </SVGText>
            <SVGText>
              - <HL>S (smooth curveto)</HL>: Similar to <HL>C</HL>, but assumes
              the first control point is a reflection of the last control point
              from the previous <HL>C</HL> or <HL>S</HL> command. Useful for
              chaining Bézier curves. Syntax: <HL>S x2,y2 x,y</HL> or{" "}
              <HL>s dx2,dy2 dx,dy</HL>.
            </SVGText>
            <SVGText>
              - <HL>Q (quadratic Bézier curveto)</HL>: Draws a quadratic Bézier
              curve. Syntax: <HL>Q x1,y1 x,y</HL> or <HL>q dx1,dy1 dx,dy</HL>,
              where <HL>(x1,y1)</HL> is the control point.
            </SVGText>
            <SVGText>
              - <HL>T (smooth quadratic Bézier curveto)</HL>: Like <HL>Q</HL>,
              but assumes the control point is a reflection of the last control
              point from the previous <HL>Q</HL> or <HL>T</HL> command.
            </SVGText>
            <SVGText>
              - <HL>A (elliptical Arc)</HL>: Draws an arc of an ellipse. Syntax:
              <HL>A rx,ry</HL> rotation large-arc-flag,sweep-flag <HL>x,y</HL>{" "}
              or a drx,dry rotation large-arc-flag, sweep-flag dx,dy.
            </SVGText>{" "}
            <SVGText>
              - <HL>Z (closepath)</HL>: Closes the path by drawing a straight
              line back to where the current path started.
            </SVGText>
            <Divider />
            <SVGHeading>Understanding the Numbers and Parameters</SVGHeading>
            <SVGText>
              Each command is followed by parameters that define the specifics
              of the shape to be drawn. These parameters are typically
              coordinates <HL>(x,y)</HL> or distances <HL>(dx,dy)</HL> and
              control points for curves. The difference between absolute
              commands (M, L, C, etc.) and relative commands (m, l, c, etc.) is
              that absolute commands specify a location or distance from the
              origin <HL>(0,0)</HL> of the SVG canvas, while relative commands
              specify a location or distance from the current point.
            </SVGText>
            <SVGText>
              The numbers specified in SVG path commands, as well as other SVG
              elements' attributes like width, height, coordinates (such as{" "}
              <HL>cx</HL>,<HL>cy</HL> for circles, or <HL>x</HL>, <HL>y</HL> for
              rectangles), are in pixel units by default when no unit is
              specified. This means that when you define a path or set the
              dimensions and positions of SVG elements using these numbers,
              you're essentially specifying pixels as the unit of measurement
              relative to the SVG canvas' coordinate system.
            </SVGText>{" "}
            <Divider />
            <SVGHeading>SVG Units and Coordinates</SVGHeading>
            <SVGText>
              <HL>Pixel Units</HL>: In the context of SVGs embedded in HTML
              documents or standalone SVG files viewed in a browser, the default
              unit of measurement is pixels. For example, M10 10 L90 90 moves to
              (10,10) pixels from the origin (top-left corner) and draws a line
              to (90,90) pixels.
            </SVGText>
            <SVGText>
              <HL>Viewport Units</HL>: SVGs can also use viewport-relative units
              like vw (viewport width) and vh (viewport height), among others,
              which can be useful for responsive designs. However, these units
              are typically used in style sheets or attributes like width and
              height on the <HL>&lt;svg&gt;</HL> element itself, rather than
              within the d attribute of a <HL>&lt;path&gt;</HL>.
            </SVGText>{" "}
            <Divider />
            <SVGHeading>SVG Scalability</SVGHeading>
            <SVGText>
              Despite the use of pixel units for simplicity and clarity, one of
              the strengths of SVG (Scalable Vector Graphics) is that the
              graphics are not rendered as pixels directly but as scalable
              vector paths. This means they remain crisp and clear at any size
              or zoom level, without the pixelation that can occur with bitmap
              images (like JPEGs or PNGs) when they are scaled up.
            </SVGText>
            <SVGText>
              When designing SVG graphics and animations, it's important to
              consider the context in which they will be used, including the
              size and scalability of the graphics, especially if you're
              integrating the SVG into a responsive web design.
            </SVGText>{" "}
            <SVGExample
              description={
                <CodeExample>{`<svg width="40vh" height="40vh" 
  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="deeppink" stroke="cyan" strokeWidth="0.1vh"/>
</svg>
`}</CodeExample>
              }
              example={
                <svg
                  width="40vh"
                  height="40vh"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,10 L90,10 L90,90 L10,90 Z"
                    fill="deeppink"
                    stroke="cyan"
                    strokeWidth="0.1vh"
                  />
                </svg>
              }
            />
            <SVGText>
              SVG path commands within the d attribute typically use coordinate
              values that do not directly support viewport units like vh
              (viewport height) or vw (viewport width), because these commands
              are interpreted in the SVG's own coordinate system, which defaults
              to pixels. However, you can design an SVG's overall dimensions
              using vh and vw to make the SVG container responsive, and then
              draw paths within this responsive container.
            </SVGText>
            <SVGText>
              Although the d attribute itself doesn't use vh or vw, the effect
              of using viewport units on the SVG element can be demonstrated by
              scaling the SVG container. Here's how you can create a responsive
              SVG that scales with the viewport, with a path inside.
            </SVGText>{" "}
            <SVGText>
              SVG Container: The width and height of the SVG are set to 50vw and
              50vh, respectively. This means the SVG will take up 50% of the
              viewport width and 50% of the viewport height, making it
              responsive to the size of the viewport.
            </SVGText>
            <SVGText>
              viewBox Attribute: The viewBox attribute is set to 0 0 100 100,
              which defines the coordinate system used inside the SVG. This
              allows the path inside to scale fluidly within the SVG container.
              The viewBox makes it possible to define paths using "virtual"
              pixels that scale with the container, rather than directly using
              vh or vw in the path data.
            </SVGText>{" "}
            <SVGText>
              Path Command: The path command M10,10 L90,10 L90,90 L10,90 Z draws
              a square within this coordinate system. Regardless of the actual
              size of the SVG on the screen (which scales with the viewport
              because of vw and vh), the path coordinates are defined in terms
              of the viewBox dimensions, allowing the path to scale
              proportionally within the SVG container.
            </SVGText>
            <SVGText>
              By using vw and vh on the SVG element and a suitable viewBox, you
              can create scalable vector graphics that adapt to the viewport
              size, with paths that automatically resize to fit the container.
              This approach maintains the scalability and responsiveness of SVG
              graphics on different screen sizes, ensuring your graphics look
              great on any device.
            </SVGText>
            <Divider />
            <SVGHeading></SVGHeading>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
            <SVGText></SVGText>
          </SVGSection>
          <SVGSection></SVGSection>
          <SVGHeading></SVGHeading>
          <SVGSection>
            <SVGText></SVGText>

            <CodeExample>this</CodeExample>

            <VStackFull className="min-h-[25vh]">this</VStackFull>

            <SVGText></SVGText>

            <VStackFull className="px-[2vh]">
              <SVGText></SVGText>
              <SVGText></SVGText>
              <SVGText></SVGText>
            </VStackFull>
            <SVGHeading></SVGHeading>
            <SVGText></SVGText>
            <SVGText></SVGText>
          </SVGSection>
        </VStackFull>
      </FlexFull>
    </DescriptionModalContent>
  );
}
