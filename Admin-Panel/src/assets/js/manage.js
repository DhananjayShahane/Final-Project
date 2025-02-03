$(document).ready(function () {
  // Fetch data from JSON file
  fetch("../assets/js/foodData.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.foodArray.forEach((item) => {

        // Create HTML for the food item
        var html = `
          <div class="rounded-lg bg-gray-500/5 p-4">
            <div class="flex justify-center gap-3 xl:flex-col">
              <div class="shrink">
                    <div class="h-20 w-20 overflow-hidden rounded-lg bg-white">
                        <img
                          src="../${item.image}" class="w-full" height="100" width="50"
                          alt="${item.name}">
                    </div>
                </div>
              <div class="grow">
                <h4 class="mb-2 text-lg font-medium text-gray-950">${item.name}</h4>
                <p class="text-sm text-gray-600">${item.description}</p>
              </div>
            </div>
          </div>`;

        // Append the HTML to the food menu
        $("#upcomingMenu").append(html);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});
