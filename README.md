# OpenNet

[![License](https://img.shields.io/badge/license-GPLv3-blue.svg)](https://github.com/PandaP17/opennet/blob/master/LICENSE)

The OpenNet is an independent, open-source ecosystem alternative to the typical internet, where any user can create and host their own site entirely for free, with no ifs, buts, or ands. Say goodbye to domain registrars and costly hosting services — on the OpenNet, creating a website is as simple as submitting a pull request with your site's code.

## How is it accessible?

To access and browse the OpenNet easily and properly, it is recommended to use an OpenNet browser. OpenNet browsers are specifically designed to provide the best experience for navigating websites within the OpenNet ecosystem, and allow for navigating websites with their actual domain names.

OpenNet browsers are available in the `/browsers/` directory of this repository. To get started, simply go into the folder, find a browser you want that's compatible with your system, and download it. To contribute your own browser to the OpenNet, follow the instructions in the "Contributing a Browser" section.

## Creating a Site

To create a site on the OpenNet, refer to the "[Creating a site](https://github.com/pandap17/OpenNet/wiki/Creating-A-Site)" page on the Wiki.

## Updating a Site

To update your site on the OpenNet, follow these steps:

1. Ensure your forked repository is up-to-date with the current repository. Any changes to sites that don't have you in the `creator.txt` file will result in your pull request being dismissed.
2. Make the necessary changes to your website's code in your forked repository.
3. Ensure that the changes only affect your site and do not modify other sites unless you have permission in the creator.txt.
4. Submit a pull request with the updated code.

## Contributing a Browser

To contribute a browser to the OpenNet, follow these steps:

1. Fork this repository to your GitHub account.
2. Create a new folder in the `/browsers/` directory of your forked repository. Name the folder after the browser you are adding, with it's compatible systems after it (e.g., `/browsers/chromium (Windows, Linux, MacOS)/`).
3. Add the necessary files for the browser, including the browser's executable, libraries, or any other required resources.
4. In the main directory of the browser folder, create an `info.txt` file to provide compatibility information about the browser. Describe what it is compatible with and any additional details you find relevant.
5. Submit a pull request with the browser folder to have it added to the OpenNet repo.


## Structure of the OpenNet

- All sites are stored in the `/sites/` folder in the main repository directory.
- Sites can be submitted and edited through pull requests by anyone.
- The OpenNet is open-source and completely free.
- There are no domain registrars or costs involved. Creating a site is totally free and only requires a GitHub account and a pull request.
- More information regarding the OpenNet's structure can be found on the [wiki page.](https://github.com/pandap17/OpenNet/wiki/Structure-Of-The-OpenNet)

## Documentation

Documentation for the OpenNet can be found over on the OpenNet wiki:
https://github.com/pandap17/OpenNet/wiki/Structure-Of-The-OpenNet

## License

The OpenNet is released under the GNU General Public License v3.0. Please see the [LICENSE](LICENSE) file for more details.

## Contributing

We welcome contributions to the OpenNet! Feel free to submit pull requests with enhancements or new features. Please ensure that your contributions align with common sense and don't destroy anything.

## Contact

If you have any questions, suggestions, or feedback, please reach out to us by opening an issue in the [OpenNet repository](https://github.com/pandap17/OpenNet/).
