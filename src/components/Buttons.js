import { listOptions } from "../api/moviesUtilities";

export function createButtons() {
    const buttons = [
        { text: "Popular", class: "popular-button" },
        { text: "Upcoming Movies", class: "upcoming-button" },
        { text: "Top Rated", class: "topRated-button" },
        { text: "Now Playing", class: "nowPlaying-button" },
    ];

    buttons.forEach(buttonInfo => {
        const button = document.createElement("button");
        button.textContent = buttonInfo.text;
        button.classList.add(buttonInfo.class);

        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.appendChild(button);
    });

    // Ahora vamos a añadirle un evento click a cada boton
    // Mapeamos las clases de los botones a sus respectivas opciones en listOptions
    const buttonActions = {
        'popular-button': listOptions.popular,
        'upcoming-button': listOptions.upcoming,
        'topRated-button': listOptions.topRated,
        'nowPlaying-button': listOptions.nowPlaying
    };

    // Iteramos sobre el objeto y agregamos los evetListeners a cada botón
    Object.keys(buttonActions).forEach(className => {
        const button = document.querySelector(`.${className}`);
        if (button) {
            button.addEventListener('click', () => {
                currentListOption = buttonActions[className];
                getFetchMovies(currentListOption, language.es);
            });
        }
    });
}