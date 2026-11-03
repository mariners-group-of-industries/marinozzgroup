interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#f7f6f2] via-white to-white py-10 sm:py-14 border-b border-gray-100 overflow-hidden">
      {/* Subtle architectural background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#0b3674_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="h-1 w-10 rounded-full bg-[#c71b27]" />
            <span className="h-1 w-3 rounded-full bg-[#0b3674]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3674] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
