document.addEventListener("DOMContentLoaded", function () {

    const completeButtons =
        document.querySelectorAll(".complete-btn");

    const progressFill =
        document.getElementById("progress-fill");

    const progressPercent =
        document.getElementById("progress-percent");

    const savedSteps =
    JSON.parse(
        localStorage.getItem(
            "frontendRoadmapProgress"
        )
    ) || [];

    function updateProgress() {

        const completedSteps =
            document.querySelectorAll(
                ".learning-card.completed"
            ).length;

        const totalSteps =
            document.querySelectorAll(
                ".learning-card"
            ).length;

        const progress =
            Math.round(
                (completedSteps / totalSteps) * 100
            );

        progressFill.style.width =
            progress + "%";

        progressPercent.textContent =
            progress + "%";

    }
    const completedSteps =
    Array.from(
        document.querySelectorAll(
            ".learning-card.completed"
        )
    ).map(function (card) {

        return card.querySelector(
            ".complete-btn"
        ).dataset.step;

    });

    localStorage.setItem(
         "frontendRoadmapProgress",
         JSON.stringify(completedSteps)
    );
    completeButtons.forEach(function (button) {

    const step =
        button.dataset.step;

    if (savedSteps.includes(step)) {

        const card =
            button.closest(".learning-card");

        card.classList.add("completed");

        button.textContent =
            "Completed";

    }

});

    completeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    button.closest(".learning-card");

                card.classList.toggle("completed");

                if (card.classList.contains("completed")) {

                    button.textContent =
                        "Completed";

                } else {

                    button.textContent =
                        "Mark Complete";

                }

                updateProgress();

            }
        );

    });

    updateProgress();

});