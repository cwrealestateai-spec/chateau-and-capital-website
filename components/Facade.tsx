/*
  Architectural line motif: a quiet colonnade elevation drawn in
  hairline strokes. Used as texture, never decoration for its own sake.
  Inherits currentColor so it works on ivory and slate grounds alike.
*/
export function Facade({ className = "" }: { className?: string }) {
  const columns = Array.from({ length: 9 }, (_, i) => 40 + i * 60);
  return (
    <svg
      viewBox="0 0 560 400"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="xMidYMax slice"
    >
      <g stroke="currentColor" strokeWidth="1">
        {/* datum lines */}
        <line x1="0" y1="60" x2="560" y2="60" opacity="0.5" />
        <line x1="0" y1="72" x2="560" y2="72" opacity="0.35" />
        <line x1="0" y1="392" x2="560" y2="392" opacity="0.6" />
        <line x1="0" y1="380" x2="560" y2="380" opacity="0.35" />
        {/* colonnade */}
        {columns.map((x) => (
          <g key={x} opacity="0.55">
            <line x1={x - 9} y1="88" x2={x - 9} y2="372" />
            <line x1={x + 9} y1="88" x2={x + 9} y2="372" />
            <line x1={x - 15} y1="88" x2={x + 15} y2="88" />
            <line x1={x - 15} y1="82" x2={x + 15} y2="82" />
            <line x1={x - 15} y1="372" x2={x + 15} y2="372" />
            <path d={`M ${x - 9} 130 A 9 9 0 0 1 ${x + 9} 130`} opacity="0.8" />
          </g>
        ))}
        {/* horizon steps */}
        <line x1="60" y1="368" x2="500" y2="368" opacity="0.25" />
      </g>
    </svg>
  );
}
