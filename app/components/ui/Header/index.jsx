import NavBar from "../../NavBar";

export default function Header() {
  return (
    <header className="animate-fade-in-sections sticky top-0 z-40 flex w-full items-center justify-between  p-5 duration-500">
      <NavBar />
    </header>
  );
}
