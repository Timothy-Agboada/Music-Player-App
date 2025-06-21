## 🚀 30-Day Coding Challenge: Day 12

This project is the twelfth entry in my 30-day coding challenge. Today's goal was to build a beautiful and functional music player, focusing on the HTML5 Audio API and creating a polished, media-centric user interface with vanilla JavaScript.

### 📖 Project Overview

This is a sleek, modern music player application that allows users to play a curated playlist of songs. It features standard media controls including play, pause, and skip (next/previous). The UI includes a dynamic progress bar that shows the current track's progress and can be clicked to seek to different points in the song. The album art also animates while a song is playing.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface while a song is playing.
![Jun-20-2025 21-39-05](https://github.com/user-attachments/assets/fd83b110-884d-4eb6-8e8c-f3e81bec152f)


### 🌟 Key Features

* **Full Audio Controls:** Play, pause, skip to the next track, or go to the previous track.
* **Dynamic Progress Bar:** A visual progress bar updates in real-time and allows the user to seek by clicking.
* **Time Display:** Shows the current time and total duration of the track.
* **Playlist Logic:** The player cycles through a predefined playlist of songs, automatically playing the next song when the current one ends.
* **Animated UI:** The album art smoothly rotates when music is playing, providing an engaging visual cue.
* **Dynamic Content:** Song title, artist, and album art are all dynamically updated from a JavaScript array of objects.
* **Modern Design:** A clean, visually appealing UI with a gradient background and modern aesthetics.

### 💻 Technologies Used

This project was built entirely with vanilla front-end technologies to demonstrate a strong command of core web features.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **HTML5 Audio API:** Used for all media playback control.
* **Google Fonts:** For the 'Montserrat' font family.
* **Font Awesome:** For player control icons.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/music-player-app.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd music-player-app
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No special installations or dependencies are required. The audio and image files are linked from external sources for this demo.

### 🎯 Learning Objectives

This project was a valuable exercise in several key areas of front-end development:

* **HTML5 Audio API:** Gaining mastery over the properties (`currentTime`, `duration`) and methods (`play()`, `pause()`) of the HTML `<audio>` element.
* **Event Handling for Media:** Listening to audio-specific events like `timeupdate` and `ended` to create a responsive UI.
* **State Management:** Using a CSS class (`.playing`) to manage the visual state of the player and its components.
* **UI/UX for Media Players:** Designing an intuitive and familiar interface for controlling media playback.
* **Data-Driven UI:** Populating the entire player UI from a structured array of song objects in JavaScript.
