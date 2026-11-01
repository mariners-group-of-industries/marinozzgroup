import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#f7f6f2] via-white to-white py-14 sm:py-20 border-b border-gray-100 overflow-hidden">
      {/* Subtle architectural background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#0b3674_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-gray-300" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gray-700 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#0b3674] font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#c71b27] bg-red-50 border border-red-200/60 mb-3">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3674] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
