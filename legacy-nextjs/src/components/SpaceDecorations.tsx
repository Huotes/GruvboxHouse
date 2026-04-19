"use client";

export function Planet({
  size = 120,
  x,
  y,
  color = "var(--accent)",
  rings = false,
  className = "",
}: {
  size?: number;
  x: string;
  y: string;
  color?: string;
  rings?: boolean;
  className?: string;
}) {
  const id = `pg-${size}-${x.replace("%", "")}`;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 1,
        animation: "drift 20s ease-in-out infinite",
      }}
    >
      <svg viewBox="0 0 120 120" width={size} height={size}>
        <defs>
          <radialGradient id={id} cx="40%" cy="35%">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0.05} />
          </radialGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="50"
          fill={`url(#${id})`}
          stroke={color}
          strokeWidth="1"
          opacity={0.4}
        />
        {rings && (
          <ellipse
            cx="60"
            cy="60"
            rx="75"
            ry="18"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity={0.2}
            style={{ animation: "ring-pulse 4s ease-in-out infinite" }}
          />
        )}
        <circle cx="45" cy="45" r="8" fill={color} opacity={0.08} />
        <circle cx="70" cy="55" r="5" fill={color} opacity={0.06} />
      </svg>
    </div>
  );
}

export function Spaceship({
  x,
  y,
  size = 60,
  flip = false,
  className = "",
}: {
  x: string;
  y: string;
  size?: number;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 1,
        transform: flip ? "scaleX(-1)" : "none",
        animation: "drift2 15s ease-in-out infinite",
      }}
    >
      <svg
        viewBox="0 0 80 40"
        width={size}
        height={size / 2}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        opacity={0.35}
      >
        <ellipse cx="35" cy="20" rx="28" ry="10" />
        <path d="M63 20 L75 15 L75 25 Z" fill="var(--accent)" opacity={0.15} />
        <ellipse cx="35" cy="20" rx="12" ry="6" fill="var(--accent)" opacity={0.1} />
        <circle cx="35" cy="17" r="3" fill="var(--accent)" opacity={0.2} />
        <path d="M10 20 L5 28 M15 20 L10 28 M20 20 L15 28" strokeWidth="1" opacity={0.5} />
      </svg>
    </div>
  );
}

export function FloatingAlien({
  x,
  y,
  size = 50,
  className = "",
}: {
  x: string;
  y: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 1,
        animation: "float 6s ease-in-out infinite",
      }}
    >
      <svg
        viewBox="0 0 64 80"
        width={size}
        height={size * 1.25}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        opacity={0.25}
      >
        <ellipse cx="32" cy="30" rx="20" ry="26" />
        <ellipse cx="22" cy="26" rx="7" ry="9" fill="var(--accent)" opacity={0.15} />
        <ellipse cx="42" cy="26" rx="7" ry="9" fill="var(--accent)" opacity={0.15} />
        <circle cx="22" cy="26" r="3" fill="var(--accent)" opacity={0.3} />
        <circle cx="42" cy="26" r="3" fill="var(--accent)" opacity={0.3} />
        <path d="M28 40c2 3 6 3 8 0" strokeLinecap="round" />
        <path d="M12 16c-3-6-2-12 0-14" opacity={0.4} />
        <path d="M52 16c3-6 2-12 0-14" opacity={0.4} />
        <path d="M18 56 L14 72 M24 56 L22 72 M40 56 L42 72 M46 56 L50 72" strokeWidth="1" opacity={0.3} />
      </svg>
    </div>
  );
}

export function Nebula() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full blur-[80px]"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, var(--nebula1), transparent 70%)",
          top: "-10%",
          left: "20%",
        }}
      />
      <div
        className="absolute rounded-full blur-[60px]"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, var(--nebula2), transparent 70%)",
          bottom: "10%",
          right: "5%",
        }}
      />
      <div
        className="absolute rounded-full blur-[70px]"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, var(--nebula3), transparent 70%)",
          top: "40%",
          left: "60%",
        }}
      />
    </div>
  );
}

export function OrbitDot({
  radius = 120,
  duration = 20,
  size = 3,
  delay = 0,
}: {
  radius?: number;
  duration?: number;
  size?: number;
  delay?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--accent)",
        boxShadow: "0 0 8px var(--accent)",
        // @ts-expect-error CSS custom property
        "--orbit-r": `${radius}px`,
        animation: `orbit ${duration}s linear ${delay}s infinite`,
        zIndex: 1,
      }}
    />
  );
}
