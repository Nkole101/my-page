export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-8 text-center">
      <span className="font-mono text-[10px] tracking-[0.3em] text-slate-500 uppercase">
        Designed &amp; built by Martin Nkole Mwanza — {new Date().getFullYear()}
      </span>
    </footer>
  );
}
