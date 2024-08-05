import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex max-w-5xl animate-fade-in-sections flex-col items-center justify-center gap-12 pt-28 duration-500"
    >
      <h2 className="text-4xl font-bold capitalize text-primary sm:text-5xl xl:text-6xl">
        About me
      </h2>
      <article className="flex flex-col justify-center gap-12">
        <section className="flex flex-wrap justify-evenly gap-8">
          <figure>
            <Image
              src="/mrn_avatar.png"
              alt="Avatar"
              width={500}
              height={500}
              className="h-72 w-72 rounded-full object-cover object-top ps-8 pt-3 shadow-primary sm:h-80 sm:w-80"
            />
          </figure>

          <div className="flex max-w-lg flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg text-primary">Name</h3>
                <p>Michael River Nilsson</p>
              </div>

              <div>
                <h3 className="text-lg text-primary">Location</h3>
                <p>Stockholm, Sweden</p>
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
                <h3 className="text-lg text-primary">LinkedIn</h3>
                <Link
                  href="https://www.linkedin.com/in/michaelrivernilsson/"
                  target="_blank"
                  className="link"
                >
                  Michael River Nilsson
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
          </div>
        </section>

        <div className="h-px bg-zinc-500"></div>

        <section className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-primary">My journey</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p>
                Recently, my career journey has taken me from managing bars to
                graduating from a two-year Frontend Development program at{" "}
                <Link href="https://noroff.no" target="_blank" className="link">
                  Noroff
                </Link>
                , where I developed strong foundations in technologies such as
                React, Next.js, Tailwind CSS, and Bootstrap, as well as design
                and testing.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                In my spare time, I love to travel. I recently lived for seven
                months in Bangkok and several months in Spain, broadening my
                horizons and inspiring my creativity.
              </p>
              <p>
                I also enjoy outdoor activities like hiking, camping, and
                fishing, and I am an avid football fan and F1 enthusiast.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-zinc-500"></div>

        <section className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-primary">Why work with me</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p>
                I am passionate about creating beautiful websites and web
                applications that are accessible, responsive, and user-friendly.
              </p>
              <p>
                I thrive in team settings and am eager to contribute to dynamic
                and innovative tech environments. Collaboration and
                communication are at the heart of my workflow, and I enjoy
                working closely with clients, designers, and other developers to
                bring ideas to life.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                My background managing high-pressure environments in hospitality
                has sharpen my ability to work effectively under pressure, be
                detail-oriented, and communicate clearly — all essential
                qualities in web development.
              </p>
              <p>
                I am committed to lifelong learning and constantly seek
                opportunities to expand my knowledge and skills, ensuring that
                my work remains cutting-edge and adheres to best practices.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-zinc-500"></div>

        <div className="flex justify-center">
          <p className="w-4/5 max-w-3xl text-xl md:text-center">
            Thank you for visiting my portfolio. Feel free to browse through my
            projects and{" "}
            <Link href="#contact" className="link">
              get in touch
            </Link>{" "}
            if you`d like to collaborate or learn more about my work.
          </p>
        </div>
      </article>
    </section>
  );
}
