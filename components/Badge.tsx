import { useId } from "react";
import { ColumnMarkPaths } from "@/components/ColumnMark";

/*
  The Chateau & Capital badge: the logomark ringed by the brand name,
  used as a seal or accent per the brand guidelines. Ring and mark take
  currentColor; the encircling letters are "cut out" in the colour of
  the ground the badge sits on (`cutout`), matching the official seal.
*/
export function Badge({
  className = "",
  cutout = "var(--bg)",
}: {
  className?: string;
  cutout?: string;
}) {
  const pathId = useId();
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className}>
      <defs>
        {/* full circle starting at bottom centre, clockwise */}
        <path
          id={pathId}
          d="M 60 107.5 A 47.5 47.5 0 1 1 60.01 107.5"
          fill="none"
        />
      </defs>
      <circle
        cx="60"
        cy="60"
        r="51"
        fill="none"
        stroke="currentColor"
        strokeWidth="15"
      />
      <text
        fill={cutout}
        fontSize="8.5"
        letterSpacing="2.6"
        className="font-caps"
      >
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          CH&Acirc;TEAU &amp; CAPITAL
        </textPath>
      </text>
      <rect
        x="57.6"
        y="108.6"
        width="4.8"
        height="4.8"
        fill={cutout}
        transform="rotate(45 60 111)"
      />
      <g transform="translate(39.5 44.5) scale(0.806) translate(-201.4 -248.1)">
        <ColumnMarkPaths />
      </g>
    </svg>
  );
}
