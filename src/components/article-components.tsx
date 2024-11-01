import AshLink from "@/components/ui/ash-link";
import { bricolage } from "@/lib/fonts";

export const H1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 style={bricolage.style}> {children} </h1>;
};
export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 style={bricolage.style}> {children} </h2>;
};

export const Link: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <AshLink href={href} target="_blank" color="blue" rel="noopener noreferrer">
      {children}
    </AshLink>
  );
};
