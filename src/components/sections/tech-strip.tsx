"use client";

export function TechStrip() {
  return (
    <section className="py-12">
      <div className="container-wide text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 mb-8">
          Built with cutting-edge technology
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {/* Next.js */}
          <div className="flex items-center gap-2.5 group">
            <svg width="18" height="18" viewBox="0 0 180 180" className="opacity-40 group-hover:opacity-80 transition-opacity duration-300">
              <circle cx="90" cy="90" r="90" fill="white"/>
              <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" fill="black"/>
              <path d="M115 54h12v72h-12z" fill="black"/>
            </svg>
            <span className="text-[14px] font-medium text-white/30 group-hover:text-white/70 transition-colors duration-300">Next.js</span>
          </div>

          <span className="text-white/10 hidden sm:inline">|</span>

          {/* React */}
          <div className="flex items-center gap-2.5 group">
            <svg width="18" height="18" viewBox="-11.5 -10.232 23 20.463" className="opacity-40 group-hover:opacity-80 transition-opacity duration-300">
              <circle r="2.05" fill="white"/><g stroke="white" fill="none" strokeWidth="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g>
            </svg>
            <span className="text-[14px] font-medium text-white/30 group-hover:text-white/70 transition-colors duration-300">React</span>
          </div>

          <span className="text-white/10 hidden sm:inline">|</span>

          {/* Tailwind CSS */}
          <div className="flex items-center gap-2.5 group">
            <svg width="18" height="12" viewBox="0 0 54 33" className="opacity-40 group-hover:opacity-80 transition-opacity duration-300" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/>
            </svg>
            <span className="text-[14px] font-medium text-white/30 group-hover:text-white/70 transition-colors duration-300">Tailwind CSS</span>
          </div>

          <span className="text-white/10 hidden sm:inline">|</span>

          {/* TypeScript */}
          <div className="flex items-center gap-2.5 group">
            <svg width="16" height="16" viewBox="0 0 128 128" className="opacity-40 group-hover:opacity-80 transition-opacity duration-300">
              <rect width="128" height="128" rx="12" fill="white"/>
              <path d="M82.1 89.6c2.8 4.2 6.8 7.2 12.4 9 5.4 1.8 11 2 16.6.4 5-1.4 9-4 11.8-7.6 2.6-3.4 4-7.6 4-12.4 0-4-1-7.4-3-10.2s-4.6-5.2-7.8-7c-3.2-1.8-7.4-3.6-12.6-5.4-3.4-1.2-6-2.2-7.6-3.2-1.6-.8-2.8-1.8-3.4-2.8-.6-1-.8-2.2-.8-3.8 0-2.2.8-4 2.6-5.2 1.8-1.4 4.2-2 7.2-2 3.2 0 5.8.8 7.6 2.4 1.8 1.6 3 3.6 3.6 6.2l12.4-3.2c-1.4-5.2-4.2-9.4-8.6-12.2-4.4-3-9.6-4.4-15.6-4.4-4.8 0-9 .8-12.6 2.6-3.6 1.8-6.4 4.2-8.4 7.2-2 3-3 6.4-3 10.2 0 6 2 10.6 6 14 4 3.2 9.6 6 16.8 8.2 4.4 1.4 7.6 2.6 9.6 3.8 2 1 3.4 2.2 4.2 3.4.8 1.2 1.2 2.6 1.2 4.4 0 2.6-1.2 4.6-3.4 6.2-2.2 1.6-5.2 2.4-8.8 2.4-3.8 0-7-.8-9.4-2.8-2.4-1.8-4-4.4-4.8-7.8L69 80.4c1.4 5.8 4.4 10.6 9 14.2h4.1zM54 47.6H36v52h-13V47.6H5.6V37H54v10.6z" fill="black"/>
            </svg>
            <span className="text-[14px] font-medium text-white/30 group-hover:text-white/70 transition-colors duration-300">TypeScript</span>
          </div>

          <span className="text-white/10 hidden sm:inline">|</span>

          {/* Vercel */}
          <div className="flex items-center gap-2.5 group">
            <svg width="16" height="14" viewBox="0 0 76 65" className="opacity-40 group-hover:opacity-80 transition-opacity duration-300" fill="white">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
            </svg>
            <span className="text-[14px] font-medium text-white/30 group-hover:text-white/70 transition-colors duration-300">Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
