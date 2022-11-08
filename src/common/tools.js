module.exports = {
    change: {
        theme: (newTheme) => {
            newTheme = newTheme?.toLowerCase();
            localStorage.setItem("theme-color", newTheme);
            document
                .querySelector("body")
                .classList.remove(newTheme === "dark" ? "light" : "dark");
            document.querySelector("body").classList.add(newTheme);
        },

        language: (newLang) => {
            newLang = newLang?.toLowerCase();
            if (newLang === "en") {
                document.querySelector("body").classList.remove("ltr");
                localStorage.setItem("lang", "en");
                // and language change precedure
            } else {
                document.querySelector("body").classList.add("rtl");
                localStorage.setItem("lang", "fa");
                // and language change precedure
            }
        },
    },
};
