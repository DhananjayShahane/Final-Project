import foodArray from "./foodData";

$(document).ready(function() {
    // Loop through each item in foodArray
    foodArray.forEach(function(item) {
      // Determine class based on payment status
      var paymentClass = '';
      switch (item.payment_status) {
        case 'Paid':
          paymentClass = 'bg-green-500/10 text-green-500';
          break;
        case 'Refunded':
          paymentClass = 'bg-yellow-500/10 text-yellow-500';
          break;
        case 'Cancelled':
          paymentClass = 'bg-red-500/10 text-red-500';
          break;
        gray:
          paymentClass = '';
          break;
      }
  
      // Create HTML for the food item
      var html = `
      <tr>
            <td
                class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                ${item.date}</td>
            <td
                class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500 hover:text-orange-400">
                <a href="../../pages/orders/order-details.html">${item.order_id}</a>
            </td>
            <td
                class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                <div class="flex items-center gap-4">
                    <div class="shrink">
                        <div class="h-18 w-18"><img
                                src="../${item.image}"
                                class="h-full max-w-full" width="72"
                                height="72" alt="${item.name}">
                        </div>
                    </div>
                    <div class="grow">
                        <p class="mb-1 text-sm text-gray-500">
                        ${item.name}</p>
                        <div class="flex items-center gap-2">
                            <div class="flex gap-1.5"><svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 576 512"
                                    class="fill-yellow-400 text-yellow-400"
                                    height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                    </path>
                                </svg><svg stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 576 512"
                                    class="fill-yellow-400 text-yellow-400"
                                    height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                    </path>
                                </svg><svg stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 576 512"
                                    class="fill-yellow-400 text-yellow-400"
                                    height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                    </path>
                                </svg><svg stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 576 512"
                                    class="fill-yellow-400 text-yellow-400"
                                    height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                    </path>
                                </svg><svg stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 640 512"
                                    class="text-yellow-400"
                                    height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z">
                                    </path>
                                </svg></div>
                            <h6
                                class="mt-1 text-xs text-gray-500">
                                (${item.rating_count})</h6>
                        </div>
                    </div>
                </div>
            </td>
            <td
                class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                ${item.price}</td>
            <td class="px-6 py-4"><span
                    class="rounded-md px-3 py-1 text-xs font-medium ${paymentClass}">${item.payment_status}</span>
            </td>
        </tr>
      `;
  
      // Append the HTML to the food menu
      $('#orderList').append(html);
    });
    
  });
  