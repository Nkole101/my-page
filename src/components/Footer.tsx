export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface/50 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Martin Nkole Mwanza. Crafted with care.
        </p>
        <p className="text-xs text-text-muted">
          Software Engineer · Lusaka, Zambia
        </p>
      </div>
    </footer>
  );
}
