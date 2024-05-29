import Link from "next/link";

export default function Footer() {
  return (
    <footer className="animate-fade-in-sections mt-auto p-5 duration-500">
      <p className="text-center text-sm">
        Copyright &copy; 2024 |{" "}
        <Link href="mailto:mrn@michaelriver.dev" className="link">
          Michael River Nilsson
        </Link>
      </p>
    </footer>
  );
}
