import { Logo } from "./logo";

export function Header() {
  return (
    <div className="fixed z-10 w-full inset-x-0 top-0 px-8 py-4">
      <Logo />
    </div>
  );
}
