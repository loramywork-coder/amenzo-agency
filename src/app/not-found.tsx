import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p
          className="font-display font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontSize: "100px", lineHeight: 1 }}
        >
          404
        </p>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-6">
          Page not found
        </h1>

        <p className="text-text-secondary mt-4 text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 text-text-primary font-medium hover:border-white/20 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
