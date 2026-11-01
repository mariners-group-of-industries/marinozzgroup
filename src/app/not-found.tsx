import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#f7f6f2]">
      <div className="max-w-md w-full bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm text-center space-y-6">
        <div className="p-4 rounded-2xl bg-red-50 text-[#c71b27] w-fit mx-auto">
          <Compass className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27]">Error 404</span>
          <h1 className="text-2xl font-extrabold text-[#0b3674]">Page Not Found</h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is currently unavailable.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-bold rounded-xl text-white bg-[#0b3674] hover:bg-[#072147] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Marinozz Group Homepage</span>
        </Link>
      </div>
    </div>
  );
}
