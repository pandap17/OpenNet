# Temprano Public Beta Release v0.1
# This is not complete. It's full of bugs and unoptimized stuff.

import os
import shutil
import webview
from git import Repo
import tkinter as tk
from tkinter import simpledialog
import screeninfo

# GitHub repository URL
repo_url = 'https://github.com/pandap17/OpenNet'

# Path to the cache folder where sites will be downloaded
cache_folder = './cache/'

def clone_repository():
    # Create the cache folder if it doesn't exist
    if not os.path.exists(cache_folder):
        os.makedirs(cache_folder)

    # Clone the repository or fetch the latest changes
    repo_path = os.path.join(cache_folder, 'repository')
    if os.path.exists(repo_path):
        repo = Repo(repo_path)
        repo.remotes.origin.pull()
    else:
        Repo.clone_from(repo_url, repo_path)

    return repo_path

def download_site(site, repo_path):
    # Path to the site folder within the repository
    site_folder_path = os.path.join(repo_path, 'sites', site)

    # Validate that the site folder exists
    if not os.path.exists(site_folder_path):
        print(f"Site '{site}' does not exist in the repository.")
        return None

    # Path to the cache folder for the site
    site_cache_folder = os.path.join(cache_folder, site)

    # Remove the existing site folder if it exists
    if os.path.exists(site_cache_folder):
        shutil.rmtree(site_cache_folder)

    # Copy the site folder to the cache folder
    shutil.copytree(site_folder_path, site_cache_folder)

    return site_cache_folder

def open_site(site_folder, site_name):
    index_file = os.path.join(site_folder, 'index.html')

    # Get screen resolution
    screen_info = screeninfo.get_monitors()[0]
    screen_width = screen_info.width
    screen_height = screen_info.height

    # Create a webview window to display the HTML file with the site name as the window title
    webview.create_window(site_name, url=index_file, confirm_close=False, width=screen_width, height=screen_height, resizable=True)
    webview.start()

def main():
    repo_path = clone_repository()

    root = tk.Tk()
    root.withdraw()

    while True:
        site = simpledialog.askstring("Enter Site", "Please enter a site (or 'exit' to quit):")
        if site is None or site.lower() == 'exit':
            break

        site_folder = download_site(site, repo_path)

        if site_folder:
            open_site(site_folder, site)

if __name__ == '__main__':
    main()
