# OpenNet

[![License](https://img.shields.io/badge/license-GPLv3-blue.svg)](https://github.com/PandaP17/opennet/blob/master/LICENSE)

The OpenNet is an independent, open-source ecosystem alternative to the typical internet, where any user can create and host their own site entirely for free, with no ifs, buts, or ands. Say goodbye to domain registrars and costly hosting services — on the OpenNet, creating a website is as simple as submitting a pull request with your site's code.

## How is it accessible?

To access and browse the OpenNet easily and properly, it is recommended to use an OpenNet browser. OpenNet browsers are specifically designed to provide the best experience for navigating websites within the OpenNet ecosystem, and allow for navigating websites with their actual domain names.

OpenNet browsers are available in the `/browsers/` directory of this repository. To get started, simply go into the folder, find a browser you want that's compatible with your system, and download it. To contribute your own browser to the OpenNet, follow the instructions in the "Contributing a Browser" section.

## Creating a Site

To create a site on the OpenNet, follow these steps:

1. Fork this repository to your GitHub account. Ensure your forked repository is up-to-date with the current repository. Any changes to sites that don't have you in the creator.txt file will result in your pull request being dismissed.
2. Create a new folder in the `/sites/` directory of your forked repository. This folder will serve as the main directory for your site.
3. Name your site. It's heavily recommended you name it with the format of `site.extension` (e.g. `zephyr.com`, `weather.com`, `blooky.net`). Your extension can be anything, just don't make it too long.
4. Add your website's HTML, CSS, and any other necessary files to the folder you created.
5. In the main directory of your site, create a file named `creator.txt`. This file will serve as your "identification", so that in future pull requests, it can be verified that you have proper permission to change the site you're submitting. If you would like to allow other individuals to edit your site too, make sure to include them as allowed editors.

    ```
    Created by (username)
    Allowed editors:
    (Usernames here)
    ```

   Without a `creator.txt` file, any pull request modifying your site will be accepted, which can pose security risks.

   ***It is heavily recommended you create a creator.txt file.***

7. Optionally, you can include an `info.txt` file in your main site folder to provide basic information about your site that search engines can use to describe it.

8. Once your site is ready, submit a pull request to have it added to the OpenNet.

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

## Documentation

Documentation for the OpenNet can be found over at the OpenNet wiki on Miraheze:
https://opennet.miraheze.org/wiki/Main_Page

## License

The OpenNet is released under the GNU General Public License v3.0. Please see the [LICENSE](LICENSE) file for more details.

## Contributing

We welcome contributions to the OpenNet! Feel free to submit pull requests with enhancements or new features. Please ensure that your contributions align with common sense and don't destroy anything.

## Contact

If you have any questions, suggestions, or feedback, please reach out to us by opening an issue in the [OpenNet repository](https://github.com/pandap17/OpenNet/).
