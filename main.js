const setRandomSiteColor = function() {
    const randomColorIndex = Math.floor(Math.random() * colorPalettes.length);
    const colors = colorPalettes[randomColorIndex];
    const headerStyle = `background-color: ${colors.primary}; color: ${colors.secondary}`;
    const bodyStyle = `background-color: ${colors.secondary}; color: ${colors.primary}`;

    document.querySelector('nav').style = headerStyle;
    document.querySelector('main').style = bodyStyle;
}

const colorPalettes = [
    {
        primary: "#2E6171",
        secondary: "#D4AFCD",
    }, {
        primary: "#45503B",
        secondary: "#E5EBEA"
    }, {
        primary: "#031926",
        secondary: "#F4E9CD"
    }, {
        primary: "#000",
        secondary: "#8CFF98"
    }, {
        primary: "#2E4057",
        secondary: "#F4D35E"
    }, {
        primary: "#DA4167",
        secondary: "#F6D8AE"
    }, {
        primary: "#8F3985",
        secondary: "#CEA2AC"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    setRandomSiteColor();

    document.querySelector('#change-color').onclick = setRandomSiteColor;
});
