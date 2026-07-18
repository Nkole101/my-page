export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-border-subtle py-6 text-center">
      <p className="text-[10px] uppercase tracking-[0.14em] text-text-muted">
        © {new Date().getFullYear()} Martin Nkole Mwanza
      </p>
    </footer>
  );
}
