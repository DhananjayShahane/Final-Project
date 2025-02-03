import foodArray from "./foodData";

$(document).ready(function () {
  // Loop through each item in foodArray
  foodArray.forEach(function (item) {
    // Determine class based on payment status
    var FoodStatus = "";
    switch (item.status) {
      case "Available":
        FoodStatus = "bg-green-500/10 text-green-500";
        break;
      case "NotAvailable":
        FoodStatus = "bg-red-500/10 text-red-500";
        break;
    }

    // Create HTML for the food item
    var html = `
      <tr>
        <td
            class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
            <a class="flex items-center gap-3" href="">
                <div class="h-12 w-12 shrink"><img
                        src="../${item.image}" height="48"
                        width="48" alt="${item.name}"
                        class="h-full max-w-full">
                </div>
                <p
                    class="text-base text-gray-500 transition-all hover:text-orange-400">
                    ${item.name}
                </p>
            </a></td>
        <td
            class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
            ${item.category}
        </td>
        <td
            class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
            ${item.price}
        </td>
        <td
            class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
            ${item.quantity}
        </td>
        <td
            class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
            ${item.created_by}
        </td>
        <td class="px-6 py-4"><span
                class="rounded-md px-3 py-1 text-xs font-medium ${FoodStatus}">${item.status}</span>
        </td>
        <td class="px-6 py-4">
            <div class="flex gap-3">
                <a href="../../pages/dishes/edit-dish.html">
                    <svg stroke="currentColor" fill="none"
                        stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="cursor-pointer transition-colors hover:text-orange-400"
                        height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z">
                        </path>
                        <path d="m15 5 4 4"></path>
                    </svg>
                </a>
                <a href="../../pages/dishes/dish-details.html">
                    <svg stroke="currentColor" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="cursor-pointer transition-colors hover:text-orange-400"
                        height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z">
                        </path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </a>
                <svg stroke="currentColor" fill="none" stroke-width="2"
                    viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round"
                    class="cursor-pointer transition-colors hover:text-red-500"
                    height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                </svg></div>
        </td>
    </tr>`;

    // Append the HTML to the food menu
    $("#dishesList").append(html);
  });
});
