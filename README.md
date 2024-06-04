<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://michaelriver.dev"> 
    <img src="/public/m-logo.png" alt="Logo" width="100" height="100">
  </a>

<h3>Michael River Nilsson | Frontend Developer</h3>
<p><i>Portfolio page for Michael (River)
 Nilsson.</i></p>

[Link to project][github-repo] - [Link to live site][live-site]

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#description">Description</a>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#environment-variables">Environment Variables</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#issues">Issues</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![MRN portfolio screenshot][product-screenshot]][live-site]

### Description

My personal portfolio website, a part of the course _Portfolio 2_ at [Noroff][noroff-url]. It is a responsive website built with Next.js, Tailwind CSS, and DaisyUi.

This project is deployed using Vercel.

### Built With

<a href="https://nextjs.org"><img src="public/nextjs.svg" height="30" width="40"></a> <a href="https://tailwindcss.com/" target="_blank"><img src="/public/tailwind.svg" alt="tailwindcss" height="30" width="40"></a> <a href="https://daisyui.com/" target="_blank"><img src="/public/daisyui.svg" alt="daisyui" height="30" width="40"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps:

<!-- PREREQUISITES -->

### Prerequisites

- [Node.JS](https://nodejs.org/) version 20.11.1 or higher
- [NPM](https://npmjs.com/) version 10.2.4 or higher

<!-- INSTALLATION -->

### Installation

1. Open a CLI (Command Line Interface) and navigate to your desired folder

```sh
cd replace-with-your-desired-folder
```

2. Initialize a local Git repository

```sh
git init
```

3. Clone the repo

```sh
git clone https://github.com/RiverMichael/mrn-portfolio.git
```

4. Navigate to the project folder

```sh
cd mrn-portfolio
```

5. Install NPM packages

```sh
npm i
```

6. Run the development server

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

7. To open the project locally, visit [http://localhost:3000](http://localhost:3000) in your browser

<!-- ENVIRONMENT VARIABLES -->

### Environment Variables

This project is set up to use _Google Analytics_, you will need to set up environment variables to be able to use it.

Create a _.env_ file in the root directory of the project:

1. Use the provided _.env.example_ file as a template.

```sh
cp .env.example .env
```

2. Fill in the necessary values in the _.env_ file.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you want to help me make this project better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch

```sh
git checkout -b feature/AmazingFeature
```

3. Commit your Changes

```sh
git commit -m 'Add some AmazingFeature'
```

4. Push to the Branch

```sh
git push origin feature/AmazingFeature
```

5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ISSUES -->

## Issues

Please report any issues [here][github-issues] by following this steps:

1. **Check Existing Issues**: Before creating a new issue, please check the existing issues to avoid duplicates.
2. **Provide Detailed Information**: When reporting an issue, please provide as much information as possible, like the version of the project, steps to reproduce the issue, and any error messages or screenshots.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Michael (River) Nilsson - [mrn@michaelriver.dev][mrn-mail] | [michaelriver.dev][mrn-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

[Link to project][github-repo] - [Link to live site][live-site]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AACKNOWLEDGMENTS -->

## Acknowledgments

- [Next.js](https://nextj.org)
- [Vercel](https://vercel.com)
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy Ui](https://daisyui.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[github-repo]: https://github.com/RiverMichael/mrn-portfolio.git
[github-issues]: https://github.com/RiverMichael/mrn-portfolio/issues
[live-site]: https://michaelriver.dev/
[product-screenshot]: /public/screenshot.jpg
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/michaelrivernilsson
[mrn-url]: https://michaelriver.dev
[mrn-mail]: mailto:mrn@michaelriver.dev
[noroff-url]: https://noroff.no
