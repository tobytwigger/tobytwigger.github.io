const STORAGE_KEY = "theme";
const THEME_ATTR = "data-theme";
const QUERY_KEY = "(prefers-color-scheme: dark)";

const themes = {
    LIGHT: "light",
    DARK: "dark",
};

initTheme();

function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme) {
        // Storage theme
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia(QUERY_KEY).matches) {
        // system theme
        setTheme(themes.DARK);
    } else {
        // Default theme
        setTheme(themes.LIGHT);
    }

    window.onload = function () {
        updateThemeImages(getTheme())
        updateDarkToggles(getTheme())
    };

    // Watch for system theme changes
    window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
        const newTheme = e.matches ? themes.DARK : themes.LIGHT;
        setTheme(newTheme);
    });
}

function toggleTheme() {
    const theme = getTheme();
    const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
    setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
}

function getTheme() {
    return document.documentElement.getAttribute(THEME_ATTR);
}

function updateThemeImages(theme) {
    document.querySelectorAll('img.theme-img').forEach(img => {
        const src = img.getAttribute('src');
        if (theme === themes.DARK) {
            if (!src.includes('_dark')) {
                img.setAttribute('src', src.replace(/(\.\w+)$/, '_dark$1'));
            }
        } else {
            img.setAttribute('src', src.replace('_dark', ''));
        }
    });
}

function updateDarkToggles(theme) {
    if (theme === themes.DARK) {
        document.querySelectorAll('.dark-toggle').forEach(toggle => {
            toggle.classList.remove('dark'); // We want 'dark' to be active if it is NOT dark mode, so that it shows darker colors for a lighter background
        });
    } else {
        document.querySelectorAll('.dark-toggle').forEach(toggle => {
            toggle.classList.add('dark');
        });
    }
}

function setTheme(value) {
    document.documentElement.setAttribute(THEME_ATTR, value);
    updateThemeImages(value);
    updateDarkToggles(value);
}
