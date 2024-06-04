import Image from "next/image";
import Link from "next/link";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex max-w-6xl animate-fade-in-sections flex-col items-center justify-center gap-12 pt-28 duration-500"
    >
      <h2 className="text-4xl font-bold capitalize text-primary sm:text-5xl xl:text-6xl">
        Skills
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
        >
          <div className="skill-item">
            <Image src="/html.svg" alt="HTML icon" width={40} height={40} />
            <span className="text-sm">HTML</span>
          </div>
        </Link>

        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <div className="skill-item">
            <Image src="/css.svg" alt="CSS icon" width={40} height={40} />
            <span className="text-sm">CSS</span>
          </div>
        </Link>

        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <div className="skill-item">
            <Image
              src="/javascript.svg"
              alt="Javascript icon"
              width={40}
              height={40}
            />
            <span className="text-sm">JavaScript</span>
          </div>
        </Link>

        <Link href="https://react.dev" target="_blank">
          <div className="skill-item">
            <Image src="/reactjs.svg" alt="React icon" width={40} height={40} />
            <span className="text-sm">React</span>
          </div>
        </Link>

        <Link href="https://nextjs.org" target="_blank">
          <div className="skill-item">
            <Image
              src="/nextjs.svg"
              alt="Next js icon"
              width={40}
              height={40}
              className="invert"
            />
            <span className="text-sm">Next.js</span>
          </div>
        </Link>

        <Link href="https://vitejs.dev" target="_blank">
          <div className="skill-item">
            <Image src="/vite.svg" alt="Vite icon" width={40} height={40} />
            <span className="text-sm">Vite</span>
          </div>
        </Link>

        <Link href="https://tailwindcss.com" target="_blank">
          <div className="skill-item">
            <Image
              src="/tailwind.svg"
              alt="Tailwind icon"
              width={40}
              height={40}
            />
            <span className="text-sm">Tailwind</span>
          </div>
        </Link>

        <Link href="https://getbootstrap.com" target="_blank">
          <div className="skill-item">
            <Image
              src="/bootstrap.svg"
              alt="Bootstrap icon"
              width={40}
              height={40}
            />
            <span className="text-sm">Bootstrap</span>
          </div>
        </Link>

        <Link href="https://sass-lang.com/" target="_blank">
          <div className="skill-item">
            <Image src="/sass.svg" alt="Sass icon" width={40} height={40} />
            <span className="text-sm">Sass</span>
          </div>
        </Link>

        <Link href="https://daisyui.com" target="_blank">
          <div className="skill-item">
            <Image
              src="/daisyui.svg"
              alt="DaisyUi icon"
              width={40}
              height={40}
            />
            <span className="text-sm">DaisyUi</span>
          </div>
        </Link>

        <Link href="https://flowbite.com" target="_blank">
          <div className="skill-item">
            <Image
              src="/flowbite.svg"
              alt="Flowbite icon"
              width={40}
              height={40}
            />
            <span className="text-sm">Flowbite</span>
          </div>
        </Link>

        <Link href="https://vitest.dev" target="_blank">
          <div className="skill-item">
            <Image src="/vitest.svg" alt="Vitest icon" width={40} height={40} />
            <span className="text-sm">Vitest</span>
          </div>
        </Link>

        <Link href="https://cypress.io" target="_blank">
          <div className="skill-item">
            <Image
              src="/cypress.svg"
              alt="Cypress icon"
              width={40}
              height={40}
            />
            <span className="text-sm">Cypress</span>
          </div>
        </Link>

        <Link href="https://jestjs.io" target="_blank">
          <div className="skill-item">
            <Image src="/jest.svg" alt="Jest icon" width={40} height={40} />
            <span className="text-sm">Jest</span>
          </div>
        </Link>

        <Link href="https://git-scm.com" target="_blank">
          <div className="skill-item">
            <Image src="/git.svg" alt="Git icon" width={40} height={40} />
            <span className="text-sm">Git</span>
          </div>
        </Link>

        <Link href="https://github.com" target="_blank">
          <div className="skill-item">
            <Image src="/github.svg" alt="GitHub icon" width={40} height={40} />
            <span className="text-sm">GitHub</span>
          </div>
        </Link>

        <Link href="https://wordpress.org" target="_blank">
          <div className="skill-item">
            <Image
              src="/wordpress.svg"
              alt="WordPress icon"
              width={40}
              height={40}
            />
            <span className="text-sm">WordPress</span>
          </div>
        </Link>

        <Link href="https://figma.com" target="_blank">
          <div className="skill-item">
            <Image src="/figma.svg" alt="Figma icon" width={40} height={40} />
            <span className="text-sm">Figma</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
