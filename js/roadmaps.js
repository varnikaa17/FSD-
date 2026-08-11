document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("roadmap-search");

    const searchButton =
        document.getElementById("search-roadmaps");

    const roadmapCards =
        document.querySelectorAll(".roadmap-card");

    const noResults =
        document.getElementById("no-results");


    function searchRoadmaps() {

        const searchValue =
            searchInput.value.trim().toLowerCase();

        let visibleCards = 0;

        roadmapCards.forEach(function (card) {

            const title =
                card.dataset.title.toLowerCase();

            if (title.includes(searchValue)) {

                card.style.display = "block";

                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });

        if (visibleCards === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }


    searchButton.addEventListener(
        "click",
        searchRoadmaps
    );

});
const categoryButtons =
    document.querySelectorAll(".category-btn");

let selectedCategory = "all";


function filterByCategory() {

    const searchValue =
        searchInput.value.trim().toLowerCase();

    let visibleCards = 0;

    roadmapCards.forEach(function (card) {

        const title =
            card.dataset.title.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        const matchesSearch =
            title.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "block";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


categoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            categoryButtons.forEach(
                function (item) {

                    item.classList.remove("active");

                }
            );

            button.classList.add("active");

            selectedCategory =
                button.dataset.category;

            filterByCategory();

        }
    );

});