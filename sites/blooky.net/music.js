const GITHUB_API_BASE_URL = 'https://api.github.com';
const REPO_OWNER = 'your-repo-owner';
const REPO_NAME = 'your-repo-name';
const FOLDER_PATH = 'sites/blooky.net/music';

const musicList = document.getElementById('music-list');

function fetchFolderContents(path) {
  fetch(`${GITHUB_API_BASE_URL}/repos/PandaP17/OpenNet/contents/${path}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        if (item.type === 'file' && item.name.endsWith('.mp3')) {
          createMusicItem(item.name, item.download_url);
        } else if (item.type === 'dir') {
          createFolderLink(item.name, item.path);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching folder contents:', error);
    });
}

function createMusicItem(title, path) {
  const musicItem = document.createElement('div');
  const header = document.createElement('h3');
  const link = document.createElement('a');
  const audio = document.createElement('audio');
  const source = document.createElement('source');

  header.textContent = title;
  link.href = path;
  link.textContent = 'Download Music';
  link.download = '';

  audio.controls = true;
  audio.preload = 'metadata'; // Add this line
  source.src = path;
  source.type = 'audio/mpeg';
  audio.appendChild(source);
  audio.innerHTML = 'Your browser does not support the audio element.';

  musicItem.appendChild(header);
  musicItem.appendChild(link);
  musicItem.appendChild(audio);
  musicList.appendChild(musicItem);
}

function createFolderLink(name, path) {
  const folderLink = document.createElement('a');
  folderLink.href = '#';
  folderLink.textContent = name;
  folderLink.addEventListener('click', (e) => {
    e.preventDefault();
    musicList.innerHTML = '';
    fetchFolderContents(path);
  });

  musicList.appendChild(folderLink);
}

fetchFolderContents(FOLDER_PATH);