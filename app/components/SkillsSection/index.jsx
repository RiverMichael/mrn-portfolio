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
            <Image src="/html.svg" alt="HTML" width={40} height={40} />
            <he className="text-sm">HTML</he>
          </div>
        </Link>

        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <div className="skill-item">
            <Image src="/css.svg" alt="CSS" width={40} height={40} />
            <h3 className="text-sm">CSS</h3>
          </div>
        </Link>

        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
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

        <Link href="https://react.dev" target="_blank">
          <div className="skill-item">
            <Image src="/reactjs.svg" alt="React" width={40} height={40} />
            <h3 className="text-sm">React</h3>
          </div>
        </Link>

        <Link href="https://nextjs.org" target="_blank">
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

        <Link href="https://vitejs.dev" target="_blank">
          <div className="skill-item">
            <Image src="/vite.svg" alt="Vite" width={40} height={40} />
            <h3 className="text-sm">Vite</h3>
          </div>
        </Link>

        <Link href="https://tailwindcss.com" target="_blank">
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

        <Link href="https://getbootstrap.com" target="_blank">
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

        <Link href="https://sass-lang.com/" target="_blank">
          <div className="skill-item">
            <Image src="/sass.svg" alt="Sass" width={40} height={40} />
            <h3 className="text-sm">Sass</h3>
          </div>
        </Link>

        <Link href="https://daisyui.com" target="_blank">
          <div className="skill-item">
            <Image src="/daisyui.svg" alt="DaisyUi" width={40} height={40} />
            <h3 className="text-sm">DaisyUi</h3>
          </div>
        </Link>

        <Link href="https://flowbite.com" target="_blank">
          <div className="skill-item">
            <Image src="/flowbite.svg" alt="Flowbite" width={40} height={40} />
            <h3 className="text-sm">Flowbite</h3>
          </div>
        </Link>

        <Link href="https://vitest.dev" target="_blank">
          <div className="skill-item">
            <Image src="/vitest.svg" alt="Vitest" width={40} height={40} />
            <h3 className="text-sm">Vitest</h3>
          </div>
        </Link>

        <Link href="https://cypress.io" target="_blank">
          <div className="skill-item">
            <Image src="/cypress.svg" alt="Cypress" width={40} height={40} />
            <h3 className="text-sm">Cypress</h3>
          </div>
        </Link>

        <Link href="https://jestjs.io" target="_blank">
          <div className="skill-item">
            <Image src="/jest.svg" alt="Jest" width={40} height={40} />
            <h3 className="text-sm">Jest</h3>
          </div>
        </Link>

        <Link href="https://git-scm.com" target="_blank">
          <div className="skill-item">
            <Image src="/git.svg" alt="Git" width={40} height={40} />
            <h3 className="text-sm">Git</h3>
          </div>
        </Link>

        <Link href="https://github.com" target="_blank">
          <div className="skill-item">
            <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            <h3 className="text-sm">GitHub</h3>
          </div>
        </Link>

        <Link href="https://wordpress.org" target="_blank">
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

        <Link href="https://figma.com" target="_blank">
          <div className="skill-item">
            <Image src="/figma.svg" alt="Figma" width={40} height={40} />
            <h3 className="text-sm">Figma</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
