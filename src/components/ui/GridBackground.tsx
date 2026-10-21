export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-dark/10 blur-[100px]" />

      {/* Radial glow top-left */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
    </div>
  );
}