import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="flex animate-fade-in-sections flex-col items-center justify-center gap-12 pt-28 duration-500"
    >
      <h2 className="text-4xl font-bold capitalize text-primary sm:text-5xl xl:text-6xl">
        Portfolio
      </h2>

      <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        <div className="group card card-compact max-w-80 shadow-card">
          <Link href="https://holidaze.michaelriver.dev" target="_blank">
            <figure className="h-48 w-full rounded-t-2xl">
              <Image
                src="/screenshot_holidaze.jpg"
                alt="Holidaze"
                width={200}
                height={200}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </Link>

          <article className="card-body flex flex-col gap-6">
            <div>
              <h3 className="card-title text-2xl text-zinc-300 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-3xl xl:text-4xl">
                Holidaze
              </h3>
              <p className="text-base text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                A fictional accommodation booking website, built with React,
                Vite, Tailwind CSS, Flowbite, and the Noroff API.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-xl">
                Tech stack
              </h4>
              <ul className="flex flex-wrap gap-4 text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://www.react.dev" target="_blank">
                    <Image
                      src="/reactjs.svg"
                      alt="React"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <Image
                      src="/javascript.svg"
                      alt="Javascript"
                      width={30}
                      height={30}
                      className="rounded"
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://tailwindcss.com" target="_blank">
                    <Image
                      src="/tailwind.svg"
                      alt="Tailwind CSS"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://flowbite.com" target="_blank">
                    <Image
                      src="/flowbite.svg"
                      alt="Flowbite"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://vitejs.dev" target="_blank">
                    <Image src="/vite.svg" alt="Vite" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://vitest.dev" target="_blank">
                    <Image
                      src="/vitest.svg"
                      alt="Vitest"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 text-base">
              <Link
                href="https://holidaze.michaelriver.dev"
                target="_blank"
                className="link w-max"
              >
                Live project
              </Link>
              <Link
                href="https://github.com/rivermichael/holidaze"
                target="_blank"
                className="link w-max"
              >
                GitHub repo
              </Link>
            </div>
          </article>
        </div>

        <div className="group card card-compact max-w-80 shadow-card">
          <Link href="https://buyme.michaelriver.dev" target="_blank">
            <figure className="h-48 w-full rounded-t-2xl">
              <Image
                src="/screenshot_buyme.jpg"
                alt="Buyme"
                width={200}
                height={200}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </Link>

          <article className="card-body flex flex-col gap-6">
            <div>
              <h3 className="card-title text-2xl text-zinc-300 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-3xl xl:text-4xl">
                BuyMe
              </h3>
              <p className="text-base text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                An eCom store built with React, Vite, Tailwind CSS, DaisyUi, and
                the Noroff API.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-xl">
                Tech stack
              </h4>
              <ul className="flex flex-wrap gap-4 text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://react.dev" target="_blank">
                    <Image
                      src="/reactjs.svg"
                      alt="React"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <Image
                      src="/javascript.svg"
                      alt="Javascript"
                      width={30}
                      height={30}
                      className="rounded"
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://tailwindcss.com" target="_blank">
                    <Image
                      src="/tailwind.svg"
                      alt="Tailwind CSS"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://daisyui.com" target="_blank">
                    <Image
                      src="/daisyui.svg"
                      alt="DaisyUi"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://vitejs.dev" target="_blank">
                    <Image src="/vite.svg" alt="Vite" width={30} height={30} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 text-base">
              <Link
                href="https://buyme.michaelriver.dev"
                target="_blank"
                className="link w-max"
              >
                Live project
              </Link>
              <Link
                href="https://github.com/rivermichael/buyme"
                target="_blank"
                className="link w-max"
              >
                GitHub repo
              </Link>
            </div>
          </article>
        </div>

        <div className="group card card-compact max-w-80 shadow-card">
          <Link href="https://auctionhub.michaelriver.dev" target="_blank">
            <figure className="h-48 w-full rounded-t-2xl">
              <Image
                src="/screenshot_auction-hub.jpg"
                alt="Auction hub"
                width={200}
                height={200}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </Link>

          <article className="card-body flex flex-col gap-6">
            <div>
              <h3 className="card-title text-2xl text-zinc-300 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-3xl xl:text-4xl">
                Auction Hub
              </h3>
              <p className="text-base text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                A fictional auction website built with JavaScript, Bootstrap and
                the Noroff API.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-xl">
                Tech stack
              </h4>
              <ul className="flex flex-wrap gap-4 text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                  >
                    <Image src="/html.svg" alt="HTML" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    <Image src="/css.svg" alt="CSS" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <Image
                      src="/javascript.svg"
                      alt="Javascript"
                      width={30}
                      height={30}
                      className="rounded"
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://getbootstrap.com" target="_blank">
                    <Image
                      src="/bootstrap.svg"
                      alt="Bootstrap"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://sass-lang.com/" target="_blank">
                    <Image src="/sass.svg" alt="Sass" width={30} height={30} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 text-base">
              <Link
                href="https://auctionhub.michaelriver.dev"
                target="_blank"
                className="link w-max"
              >
                Live project
              </Link>
              <Link
                href="https://github.com/RiverMichael/SP2-Auction"
                target="_blank"
                className="link w-max"
              >
                GitHub repo
              </Link>
            </div>
          </article>
        </div>

        <div className="group card card-compact max-w-80 shadow-card">
          <Link href="https://xplor.michaelriver.dev" target="_blank">
            <figure className="h-48 w-full rounded-t-2xl">
              <Image
                src="/screenshot_xplor.jpg"
                alt="Holidaze"
                width={200}
                height={200}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </Link>

          <article className="card-body flex flex-col gap-6">
            <div>
              <h3 className="card-title text-2xl text-zinc-300 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-3xl xl:text-4xl">
                Xplor
              </h3>
              <p className="text-base text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                A fictional social media application built with JavaScript,
                Bootstrap, Sass, and the Noroff API.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-xl">
                Tech stack
              </h4>
              <ul className="flex flex-wrap gap-4 text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                  >
                    <Image src="/html.svg" alt="HTML" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    <Image src="/css.svg" alt="CSS" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <Image
                      src="/javascript.svg"
                      alt="Javascript"
                      width={30}
                      height={30}
                      className="rounded"
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://getbootstrap.com" target="_blank">
                    <Image
                      src="/bootstrap.svg"
                      alt="Bootstrap"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://sass-lang.com/" target="_blank">
                    <Image src="/sass.svg" alt="Sass" width={30} height={30} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 text-base">
              <Link
                href="https://xplor.michaelriver.dev"
                target="_blank"
                className="link w-max"
              >
                Live project
              </Link>
              <Link
                href="https://github.com/RiverMichael/JS2-Xplor"
                target="_blank"
                className="link w-max"
              >
                GitHub repo
              </Link>
            </div>
          </article>
        </div>

        <div className="group card card-compact max-w-80 shadow-card">
          <Link href="https://theflavorfiles.michaelriver.dev/" target="_blank">
            <figure className="h-48 w-full rounded-t-2xl">
              <Image
                src="/screenshot_flavor-files.jpg"
                alt="The Flavor Files"
                width={200}
                height={200}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </Link>

          <article className="card-body flex flex-col gap-6">
            <div>
              <h3 className="card-title text-2xl text-zinc-300 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-3xl xl:text-4xl">
                The Flavor Files
              </h3>
              <p className="text-base text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                A blog built with HTML, CSS, JavaScript, and the WordPress API.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-xl">
                Tech stack
              </h4>
              <ul className="flex flex-wrap gap-4 text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                  >
                    <Image src="/html.svg" alt="HTML" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    <Image src="/css.svg" alt="CSS" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <Image
                      src="/javascript.svg"
                      alt="Javascript"
                      width={30}
                      height={30}
                      className="rounded"
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://wordpress.org" target="_blank">
                    <Image
                      src="/wordpress.svg"
                      alt="WordPress"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://digitalocean.com" target="_blank">
                    <Image
                      src="/digitalocean.svg"
                      alt="Digitalocean"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 text-base">
              <Link
                href="https://theflavorfiles.michaelriver.dev/"
                target="_blank"
                className="link w-max"
              >
                Live project
              </Link>
              <Link
                href="https://github.com/RiverMichael/project-exam-1-RiverMichael"
                target="_blank"
                className="link w-max"
              >
                GitHub repo
              </Link>
            </div>
          </article>
        </div>

        <div className="group card card-compact max-w-80 shadow-card">
          <Link href="https://rainydays.michaelriver.dev" target="_blank">
            <figure className="h-48 w-full rounded-t-2xl">
              <Image
                src="/screenshot_rainydays.jpg"
                alt="Rainydays"
                width={200}
                height={200}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </Link>

          <article className="card-body flex flex-col gap-6">
            <div>
              <h3 className="card-title text-2xl text-zinc-300 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-3xl xl:text-4xl">
                Rainydays
              </h3>
              <p className="text-base text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                A fictional eCom store built with HTML, CSS, JavaScript, and the
                WordPress WooCommerce API.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-200 sm:text-xl">
                Tech stack
              </h4>
              <ul className="flex flex-wrap gap-4 text-zinc-400 transition-all duration-200 ease-in-out group-hover:text-zinc-300">
                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                  >
                    <Image src="/html.svg" alt="HTML" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    <Image src="/css.svg" alt="CSS" width={30} height={30} />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <Image
                      src="/javascript.svg"
                      alt="Javascript"
                      width={30}
                      height={30}
                      className="rounded"
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://wordpress.org" target="_blank">
                    <Image
                      src="/wordpress.svg"
                      alt="WordPress"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>

                <li className="transition-all duration-200 ease-in-out hover:scale-90">
                  <Link href="https://digitalocean.com" target="_blank">
                    <Image
                      src="/digitalocean.svg"
                      alt="Digitalocean"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 text-base">
              <Link
                href="https://rainydays.michaelriver.dev/"
                target="_blank"
                className="link w-max"
              >
                Live project
              </Link>
              <Link
                href="https://github.com/RiverMichael/CA-RainyDays"
                target="_blank"
                className="link w-max"
              >
                GitHub repo
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
