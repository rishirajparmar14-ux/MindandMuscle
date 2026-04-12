export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 text-center py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[0.78rem] text-muted mb-2 uppercase tracking-widest">
          Created for an English Multimodal Project &nbsp;|&nbsp; Topic: <span className="text-green">Balance Between Academics & Fitness</span>
        </p>
        <p className="text-[0.78rem] text-muted uppercase tracking-widest">
          Uses <strong className="text-accent">Ethos</strong> · <strong className="text-rose-400">Pathos</strong> · <strong className="text-green">Logos</strong> to persuade student audiences.
        </p>
        <div className="mt-8 pt-8 border-t border-white/5 text-[0.7rem] text-muted/50 uppercase tracking-[2px]">
          © 2026 Mind & Muscle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
