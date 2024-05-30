import Image from "next/image";
import Link from "next/link";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex max-w-4xl animate-fade-in-sections flex-col items-center justify-center gap-12 duration-500"
    >
      <h2 className="text-4xl font-bold capitalize text-primary sm:text-5xl xl:text-6xl">
        Skills
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="https://www.nextjs.org" target="_blank">
          <div className="skill-item">
            <Image
              src="/nextjs.svg"
              alt="Next js"
              width={40}
              height={40}
              className="invert"
            />
            <h3 className="text-sm">Next.js</h3>
          </div>
        </Link>

        <Link href="https://www.react.dev">
          <div className="skill-item">
            <Image src="/reactjs.svg" alt="React" width={40} height={40} />
            <h3 className="text-sm">React</h3>
          </div>
        </Link>

        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <div className="skill-item">
            <Image
              src="/javascript.svg"
              alt="Javascript"
              width={40}
              height={40}
            />
            <h3 className="text-sm">JavaScript</h3>
          </div>
        </Link>

        <Link href="https://www.vitejs.dev">
          <div className="skill-item">
            <Image src="/vite.svg" alt="Vite" width={40} height={40} />
            <h3 className="text-sm">Vite</h3>
          </div>
        </Link>

        <Link href="https://www.tailwindcss.com">
          <div className="skill-item">
            <Image
              src="/tailwind.svg"
              alt="Tailwind CSS"
              width={40}
              height={40}
            />
            <h3 className="text-sm">Tailwind</h3>
          </div>
        </Link>

        <Link href="https://www.getbootstrap.com">
          <div className="skill-item">
            <Image
              src="/bootstrap.svg"
              alt="Bootstrap"
              width={40}
              height={40}
            />
            <h3 className="text-sm">Bootstrap</h3>
          </div>
        </Link>

        <Link href="https://sass-lang.com/">
          <div className="skill-item">
            <Image src="/sass.svg" alt="Sass" width={40} height={40} />
            <h3 className="text-sm">Sass</h3>
          </div>
        </Link>

        <Link href="https://www.daisyui.com">
          <div className="skill-item">
            <Image src="/daisyui.svg" alt="DaisyUi" width={40} height={40} />
            <h3 className="text-sm">DaisyUi</h3>
          </div>
        </Link>

        <Link href="https://www.flowbite.com">
          <div className="skill-item">
            <Image src="/flowbite.svg" alt="Flowbite" width={40} height={40} />
            <h3 className="text-sm">Flowbite</h3>
          </div>
        </Link>

        <Link href="https://www.vitest.dev">
          <div className="skill-item">
            <Image src="/vitest.svg" alt="Vitest" width={40} height={40} />
            <h3 className="text-sm">Vitest</h3>
          </div>
        </Link>

        <Link href="https://www.cypress.io">
          <div className="skill-item">
            <Image
              src="/cypress.svg"
              alt="Cypress"
              width={40}
              height={40}
              className="invert"
            />
            <h3 className="text-sm">Cypress</h3>
          </div>
        </Link>

        <Link href="https://jestjs.io">
          <div className="skill-item">
            <Image src="/jest.svg" alt="Jest" width={40} height={40} />
            <h3 className="text-sm">Jest</h3>
          </div>
        </Link>

        <Link href="https://www.git-scm.com">
          <div className="skill-item">
            <Image src="/git.svg" alt="Git" width={40} height={40} />
            <h3 className="text-sm">Git</h3>
          </div>
        </Link>

        <Link href="www.github.com">
          <div className="skill-item">
            <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            <h3 className="text-sm">GitHub</h3>
          </div>
        </Link>

        <Link href="https://www.wordpress.org">
          <div className="skill-item">
            <Image
              src="/wordpress.svg"
              alt="WordPress"
              width={40}
              height={40}
            />
            <h3 className="text-sm">WordPress</h3>
          </div>
        </Link>

        <Link href="https://www.figma.com">
          <div className="skill-item">
            <Image src="/figma.svg" alt="Figma" width={40} height={40} />
            <h3 className="text-sm">Figma</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
