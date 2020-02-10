import React from "react";

export interface ListLinkProps {
  title: string;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

export const ListLink: React.FC<ListLinkProps> = ({
  title,
  href,
  className = "link",
  target = "_blank",
  rel = "noopener noreferrer"
}: ListLinkProps) => (
  <a className={className} href={href} target={target} rel={rel}>
    {title}
  </a>
);
