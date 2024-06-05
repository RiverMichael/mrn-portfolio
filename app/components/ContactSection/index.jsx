import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-2xl animate-fade-in-sections flex-col items-center justify-center gap-12 pt-28 duration-500"
    >
      <h2 className="xl:text-6cl text-4xl font-bold capitalize text-primary sm:text-5xl">
        Contact me
      </h2>

      <div className="flex flex-col gap-8">
        <p className="text-lg">
          Please feel free to contact me on my email{" "}
          <Link href="mailto:mrn@michaelriver.dev" className="link">
            mrn@michaelriver.dev
          </Link>{" "}
          or hit me up on social media if you have any questions, want to
          collaborate or maybe you have an exciting new project for me?
        </p>

        <div className="flex flex-col items-center justify-center gap-8">
          <h3 className="text-center text-3xl">
            I am open for new opportunities!
          </h3>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/rivermichael"
              target="_blank"
              className="rounded-full p-2 transition-all duration-200 hover:animate-shake hover:shadow-primary"
            >
              <Image src="/github.svg" alt="Github" width={60} height={60} />
            </Link>

            <Link
              href="https://linkedin.com/in/michaelrivernilsson/"
              target="_blank"
              className="rounded-full p-2 transition-all duration-200 hover:animate-shake hover:shadow-primary"
            >
              <Image
                src="/icon_linkedin.svg"
                alt="Linkedin"
                width={60}
                height={60}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
