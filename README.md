<!-- PROJECT SHIELDS -->
<!--
*** This template uses markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]

<!-- ABOUT THE PROJECT -->
## Basic Web Worker

I couldn't find a proper example about how a simple but heavy computation would run with or without a web worker, so I made this one. You can check the online demo : https://NicolasBrondin.github.io/basic-web-worker-extension/

### Built With

* 🖊️ Javascript
* 💻 WebWorker

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Git
```sh
sudo apt-get install git
```
* Modern web browser

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/NicolasBrondin/basic-web-worker-extension
```
2. Open the repo
```
cd basic-web-worker-extension
```
3. Install globally a tiny web-server (if needed)
```
npm install --global tiny-server
```
4. Launch the server
```
tiny-server
```
5. Open http://localhost:3000/index.html

<!-- USAGE EXAMPLES -->
## Usage

You can use this example to understand the difference between running a heavy computation on the main thread compared to running it in a web-worker (separate thread). If you put a high-enough number, you should see your browser freezing for a while without the web-worker.

<!-- CONTACT -->
## Contact

Nicolas Brondin-Bernard - [@twitter_handle](https://twitter.com/NicolasBrondin) - nicolas@brondin.com

Project Link: [https://github.com/NicolasBrondin/basic-web-worker-extension](https://github.com/NicolasBrondin/basic-web-worker-extension)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* This project is mostly based on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) by Mozilla

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/NicolasBrondin/basic-web-worker-extension.svg?style=flat-square
[contributors-url]: https://github.com/NicolasBrondin/basic-web-worker-extension/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/NicolasBrondin/basic-web-worker-extension.svg?style=flat-square
[forks-url]: https://github.com/NicolasBrondin/basic-web-worker-extension/network/members
[stars-shield]: https://img.shields.io/github/stars/NicolasBrondin/basic-web-worker-extension.svg?style=flat-square
[stars-url]: https://github.com/NicolasBrondin/basic-web-worker-extension/stargazers
[issues-shield]: https://img.shields.io/github/issues/NicolasBrondin/basic-web-worker-extension.svg?style=flat-square
[issues-url]: https://github.com/NicolasBrondin/basic-web-worker-extension/issues
[license-shield]: https://img.shields.io/github/license/NicolasBrondin/basic-web-worker-extension.svg?style=flat-square
[license-url]: https://github.com/NicolasBrondin/basic-web-worker-extension/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: docs/cover.jpg
