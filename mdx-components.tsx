import type { MDXComponents } from "mdx/types";
export function useMDXComponents(components: MDXComponents): MDXComponents { return { h1: (props) => <h1 className="display text-4xl font-semibold" {...props} />, p: (props) => <p className="my-5 leading-8 text-slate" {...props} />, ...components }; }
