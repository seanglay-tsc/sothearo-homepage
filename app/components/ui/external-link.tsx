import Link, { type LinkProps } from "next/link";

interface ExternalLinkProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  ...props
}) => {
  if (!props.href) {
    return null; // or you could render a fallback UI
  }

  return (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  );
};
