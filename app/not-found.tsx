import Link from "next/link";

export default function NotFound() {
  return <main className="container grid min-h-[55vh] place-items-center py-20 text-center"><div><p className="eyebrow">Page not found</p><h1 className="display mt-4 text-5xl font-semibold">This page is not available.</h1><p className="mx-auto mt-5 max-w-md leading-7 text-slate">The page may have moved, or the address may be incorrect.</p><Link className="mt-8 inline-block bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-blue" href="/">Return home →</Link></div></main>;
}
