// components/AppLink.tsx

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
rel?: string;
}

export default function AppLink({
  children,
  className,
  ...props
}: AppLinkProps) {
  return (
    <Link
      {...props}
      prefetch={false}
      className={className}
    >
      {children}
    </Link>
  );
}