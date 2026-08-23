document.addEventListener("DOMContentLoaded", function () {

    const completeButtons =
        document.querySelectorAll(".complete-btn");

    const progressFill =
        document.getElementById("progress-fill");

    const progressPercent =
        document.getElementById("progress-percent");

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