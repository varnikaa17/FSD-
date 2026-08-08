/* =========================================================
   CAREERCONNECT
   LEVEL 3 - JAVASCRIPT FUNCTIONALITY
========================================================= */


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeTheme();
    initializeSearch();
    initializeNavigation();
    initializeDashboard();

});


/* =========================================================
   THEME TOGGLE
========================================================= */

function initializeTheme() {

    const themeButton = document.getElementById("theme-btn");

    if (!themeButton) {
        return;
    }

    const savedTheme = localStorage.getItem("careerconnect-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");

        themeButton.textContent = "☀️";
    }


    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");


        if (isLight) {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "careerconnect-theme",
                "light"
            );

        } else {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "careerconnect-theme",
                "dark"
            );

        }

    });

}


/* =========================================================
   HOMEPAGE SEARCH
========================================================= */

function initializeSearch() {

    const searchInput =
        document.querySelector(".search-box input");

    const searchButton =
        document.querySelector(".search-box button");


    if (!searchInput || !searchButton) {
        return;
    }


    function performSearch() {

        const searchValue =
            searchInput.value.trim().toLowerCase();


        if (searchValue === "") {

            showMessage(
                "Please enter a career, internship or course."
            );

            return;
        }


        const careerKeywords = [
            "frontend",
            "web development",
            "javascript",
            "html",
            "css",
            "python",
            "cybersecurity",
            "java",
            "ai",
            "machine learning",
            "data science"
        ];


        const found =
            careerKeywords.some(function (keyword) {

                return searchValue.includes(keyword);

            });


        if (found) {

            showMessage(
                "Great choice! Career resources for \"" +
                searchInput.value +
                "\" will be available soon."
            );

        } else {

            showMessage(
                "No exact result found. Try searching for Frontend, Python, Java, Cybersecurity or AI."
            );

        }

    }


    searchButton.addEventListener(
        "click",
        performSearch
    );


    searchInput.addEventListener(
        "keypress",
        function (event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


/* =========================================================
   MESSAGE / NOTIFICATION
========================================================= */

function showMessage(message) {

    let messageBox =
        document.querySelector(".cc-message");


    if (!messageBox) {

        messageBox =
            document.createElement("div");

        messageBox.className =
            "cc-message";


        document.body.appendChild(
            messageBox
        );

    }


    messageBox.textContent = message;


    setTimeout(function () {

        messageBox.classList.add(
            "show"
        );

    }, 10);


    setTimeout(function () {

        messageBox.classList.remove(
            "show"
        );

    }, 3500);

}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

    const navigationLinks =
        document.querySelectorAll(
            ".menu a, .nav-links a"
        );


    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const linkText =
                    link.textContent
                        .trim()
                        .toLowerCase();


                /*
                    Home already has its own page.
                */

                if (linkText === "home") {

                    return;

                }


                /*
                    Until individual pages are created,
                    show a small message instead of
                    navigating to '#'.
                */

                if (
                    link.getAttribute("href") === "#"
                ) {

                    event.preventDefault();


                    const formattedName =
                        link.textContent.trim();


                    showMessage(
                        formattedName +
                        " section is coming soon."
                    );

                }

            }
        );

    });

}


/* =========================================================
   DASHBOARD FUNCTIONALITY
========================================================= */

function initializeDashboard() {

    const dashboardPage =
        document.querySelector(
            ".dashboard-container"
        );


    /*
        Stop here if this is not dashboard.html.
    */

    if (!dashboardPage) {
        return;
    }


    initializeDashboardNotifications();

    initializeQuickActions();

    initializeCareerButtons();

    initializeProfileButton();

}


/* =========================================================
   DASHBOARD NOTIFICATION
========================================================= */

function initializeDashboardNotifications() {

    const notification =
        document.querySelector(
            ".notification"
        );


    if (!notification) {
        return;
    }


    notification.addEventListener(
        "click",
        function () {

            showMessage(
                "You are all caught up! No new notifications."
            );

        }
    );

}


/* =========================================================
   QUICK ACTIONS
========================================================= */

function initializeQuickActions() {

    const quickCards =
        document.querySelectorAll(
            ".quick-card"
        );


    quickCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function (event) {

                const title =
                    card.querySelector("h3");


                if (
                    card.getAttribute("href") === "#"
                ) {

                    event.preventDefault();

                }


                if (title) {

                    showMessage(
                        title.textContent.trim() +
                        " will be available in the next module."
                    );

                }

            }
        );

    });

}


/* =========================================================
   CAREER ROADMAP BUTTONS
========================================================= */

function initializeCareerButtons() {

    const careerButtons =
        document.querySelectorAll(
            ".career-button"
        );


    careerButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                if (
                    button.getAttribute("href") === "#"
                ) {

                    event.preventDefault();

                }


                const card =
                    button.closest(
                        ".career-path-card"
                    );


                if (!card) {
                    return;
                }


                const career =
                    card.querySelector("h3");


                if (career) {

                    showMessage(
                        career.textContent.trim() +
                        " roadmap will be added soon."
                    );

                }

            }
        );

    });

}


/* =========================================================
   PROFILE INTERACTION
========================================================= */

function initializeProfileButton() {

    const profile =
        document.querySelector(
            ".profile"
        );


    if (!profile) {
        return;
    }


    profile.style.cursor = "pointer";


    profile.addEventListener(
        "click",
        function () {

            showMessage(
                "Profile management will be available soon."
            );

        }
    );

}


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
            "/" focuses homepage search
        */

        if (
            event.key === "/" &&
            !isTyping()
        ) {

            const searchInput =
                document.querySelector(
                    ".search-box input"
                );


            if (searchInput) {

                event.preventDefault();

                searchInput.focus();

            }

        }

    }
);


/* =========================================================
   CHECK IF USER IS TYPING
========================================================= */

function isTyping() {

    const activeElement =
        document.activeElement;


    return (
        activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA"
    );

}