import { ReactNode } from "react";

export default function BadLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

const Nav = () => {
  return <div>Link1 2 3</div>;
};
