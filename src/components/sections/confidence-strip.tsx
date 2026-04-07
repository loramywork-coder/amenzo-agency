export function ConfidenceStrip() {
  const items = [
    "Custom-Built Code",
    "No Templates",
    "No WordPress",
    "Lighthouse 95+",
    "Delivered in Weeks, Not Months",
  ];

  return (
    <section className="py-12">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              <span className="text-[13px] uppercase tracking-[0.12em] text-[#888] font-medium">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="text-[#444] text-sm hidden sm:inline">&middot;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
