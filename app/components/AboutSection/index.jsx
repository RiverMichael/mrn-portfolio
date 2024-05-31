import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex max-w-5xl animate-fade-in-sections flex-col items-center justify-center gap-12 duration-500"
    >
      <h2 className="text-4xl font-bold capitalize text-primary sm:text-5xl xl:text-6xl">
        About me
      </h2>
      <div className="flex flex-wrap justify-center gap-12 px-10">
        <figure>
          <Image
            src="/mrn_avatar.png"
            alt="Avatar"
            width={500}
            height={500}
            className="h-72 w-72 rounded-full object-cover object-top ps-8 pt-3 shadow-primary sm:h-80 sm:w-80"
          />
        </figure>

        <article className="flex max-w-lg flex-col gap-8">
          <p>
            I`m passionate about creating beautiful websites and web
            applications that are accessible, responsive, and user-friendly.
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg text-primary">Name</h3>
              <p>Michael River Nilsson</p>
            </div>

            <div>
              <h3 className="text-lg text-primary">Location</h3>
              <p>Stockholm, Sweden / Oslo, Norway</p>
            </div>

            <div>
              <h3 className="text-lg text-primary">GitHub</h3>
              <Link
                href="https://www.github.com/rivermichael"
                target="_blank"
                className="link"
              >
                RiverMichael
              </Link>
            </div>

            <div>
              <h3 className="text-lg text-primary">Education</h3>
              <p>
                Frontend development at{" "}
                <Link
                  href="https://www.noroff.no"
                  className="link"
                  target="_blank"
                >
                  Noroff - School of technology and digital design
                </Link>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
