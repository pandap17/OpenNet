const videoList = document.getElementById('video-list');
const videoPlayer = document.getElementById('video-player');

// Fetch video list from the GitHub API
fetch('https://api.github.com/repos/pandap17/OpenNet/contents/sites/opentube.com/videos')
    .then(response => response.json())
    .then(videos => {
        videos.forEach(video => {
            // Create a link element for each video
            const videoLink = document.createElement('a');
            videoLink.href = '#';
            videoLink.textContent = video.name;
            videoLink.onclick = () => {
                // Update the video player source and play the video
                videoPlayer.src = video.download_url;
                videoPlayer.play();
            };

            // Add the video link to the video list
            videoList.appendChild(videoLink);
            videoList.appendChild(document.createElement('br'));
        });
    });