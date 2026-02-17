// for active tabs in the nab bar

const activetabs = () => {
  const tabs = document.querySelectorAll(".nav-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
    });
  });
};
activetabs();

// Trending Products section
const loadTrendingProducts = async () => {
  const url = `https://fakestoreapi.com/products`;

  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  showTendingProducts(data);
};

// showing trending Products

const showTendingProducts = (products) => {
  //   console.log(products);
  const expensiveProducts = products
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);
  console.log(expensiveProducts);

  const trendingContainer = document.getElementById("trending-container");

  expensiveProducts.forEach((product) => {
    const trendingCard = document.createElement("div");

    trendingCard.innerHTML = `
      <div class="shadow-md  pb-6 rounded-md">
                    <div class=''>
                        <img class=" h-72 w-4/5 mx-auto" src=${product.image} alt="">
                    </div>
                    <div class="box-border px-5">
                        <div class="flex items-center justify-between box-border my-4">
                            <div class="badge badge-soft badge-primary">${product.category}</div>
                            <div><i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}  (${product.rating.count})</div>
                        </div>
                        <h3 class="my-1 text-lg font-semibold" title= ${product.title}>${product.title.slice(0, 20)}...</h3>
                        <h2 class="my-1 text-xl font-bold">$${product.price}</h2>
                        <div class="space-x-6 my-3 flex items-center justify-center">
                            <button class="btn "><i class="fa-solid fa-circle-info"></i>Details</button>
                            <button class="btn btn-primary "><i class="fa-solid fa-cart-shopping "></i>Add</button>
                        </div>

                    </div>
                </div>
      
      `;
    trendingContainer.append(trendingCard);
  });
};

loadTrendingProducts();
