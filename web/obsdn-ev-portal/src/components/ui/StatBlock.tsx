interface StatBlockProps {
  value: string;
  label: string;
  sub?: string;
}

export function StatBlock({ value, label, sub }: StatBlockProps) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <span className="font-mono text-4xl lg:text-5xl font-medium text-cobalt tracking-tight">{value}</span>
      <span className="font-syncopate text-xs tracking-widest text-neural-white uppercase">{label}</span>
      {sub && <span className="font-mono text-xs text-neural-muted">{sub}</span>}
    </div>
  );
}
