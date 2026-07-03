import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Chateau & Capital — Building Enduring Businesses. Financing the Future.";

/*
  Satori (the OG renderer) has partial inline-SVG support, so the
  column mark is supplied as a data-URI image instead. The mark is
  read from icon.svg at build time with its slate background removed.
*/
function markDataUri() {
  const icon = readFileSync(join(process.cwd(), "app/icon.svg"), "utf8");
  const markOnly = icon.replace(/<rect[^/]*\/>/, "");
  return `data:image/svg+xml;utf8,${encodeURIComponent(markOnly)}`;
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2a4554",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUri()} width={190} height={190} alt="" />
        <div
          style={{
            marginTop: 24,
            fontSize: 58,
            letterSpacing: 16,
            color: "#ece5d6",
          }}
        >
          CHÂTEAU &amp; CAPITAL
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 22,
            letterSpacing: 7,
            color: "#cbbda5",
          }}
        >
          BUILDING ENDURING BUSINESSES · FINANCING THE FUTURE
        </div>
      </div>
    ),
    size,
  );
}
