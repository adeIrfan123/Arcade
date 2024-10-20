const productsTrending = document.getElementById("product-trending");
const necklaceProducts = document.getElementById("necklace-products");
const ringProducts = document.getElementById("ring-products");
const store = document.getElementById("store");
const comingSoon = document.getElementById("coming-soon");

for (let i = 0; i < 5; i++) {
  productsTrending.innerHTML += `
    <div
  class="relative overflow-hidden shadow-lg rounded-lg bg-yellow-400 hover:scale-110 transition duration-300"
>
  <img src="img/T1.jpg" alt="" class="h-40" />
  <div class="w-20 absolute flex top-0 mt-2 ml-2">
    <div
      class="w-[50%] rounded-l-full bg-slate-100/45 text-xl flex items-center justify-center mr-[1px]"
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 hover:fill-red-600 hover:text-red-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
    <div
      class="w-[40%] flex items-center justify-center rounded-r-full bg-slate-100/45"
    >
      <span class="font-semibold">9</span>
    </div>
  </div>
  <div
    class="bg-slate-100/45 w-10 flex justify-center absolute top-0 mt-2 right-0 rounded-full h-6 items-center mr-2 cursor-pointer"
  >
    <button class="font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </button>
  </div>
  <div class="flex mt-3 items-center">
    <div class="flex w-[80%]">
      <div class="my-2 px-2">
        <img src="img/T2.jpg" alt="" class="w-6 h-6 rounded-full" />
      </div>
      <div class="-mx-1">
        <p class="text-xs font-semibold text-slate-700">
          Dreamer
          <span class="text-slate-600 font-thin">| Maker</span>
        </p>
        <a href="" class="text-sm font-bold">Annie Clark</a>
      </div>
    </div>
    <div class="">
      <span class="font-bold">$39</span>
    </div>
  </div>
</div>`;
}

for (let i = 0; i < 8; i++) {
  necklaceProducts.innerHTML += `
  <div
  class="relative overflow-hidden shadow-lg rounded-lg bg-yellow-400 hover:scale-110 transition duration-300"
>
  <img src="img/T1.jpg" alt="" class="h-40" />
  <div class="w-20 absolute flex top-0 mt-2 ml-2">
    <div
      class="w-[50%] rounded-l-full bg-slate-100/45 text-xl flex items-center justify-center mr-[1px]"
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 hover:fill-red-600 hover:text-red-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
    <div
      class="w-[40%] flex items-center justify-center rounded-r-full bg-slate-100/45"
    >
      <span class="font-semibold">9</span>
    </div>
  </div>
  <div
    class="bg-slate-100/45 w-10 flex justify-center absolute top-0 mt-2 right-0 rounded-full h-6 items-center mr-2 cursor-pointer"
  >
    <button class="font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </button>
  </div>
  <div class="flex mt-3 items-center">
    <div class="flex w-[80%]">
      <div class="my-2 px-2">
        <img src="img/T2.jpg" alt="" class="w-6 h-6 rounded-full" />
      </div>
      <div class="-mx-1">
        <p class="text-xs font-semibold text-slate-700">
          Dreamer
          <span class="text-slate-600 font-thin">| Maker</span>
        </p>
        <a href="" class="text-sm font-bold">Annie Clark</a>
      </div>
    </div>
    <div class="">
      <span class="font-bold">$39</span>
    </div>
  </div>
</div>`;
}

for (let i = 0; i < 8; i++) {
  ringProducts.innerHTML += `
  <div
  class="relative overflow-hidden shadow-lg rounded-lg bg-yellow-400 hover:scale-110 transition duration-300"
>
  <img src="img/T1.jpg" alt="" class="h-40" />
  <div class="w-20 absolute flex top-0 mt-2 ml-2">
    <div
      class="w-[50%] rounded-l-full bg-slate-100/45 text-xl flex items-center justify-center mr-[1px]"
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 hover:fill-red-600 hover:text-red-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
    <div
      class="w-[40%] flex items-center justify-center rounded-r-full bg-slate-100/45"
    >
      <span class="font-semibold">9</span>
    </div>
  </div>
  <div
    class="bg-slate-100/45 w-10 flex justify-center absolute top-0 mt-2 right-0 rounded-full h-6 items-center mr-2 cursor-pointer"
  >
    <button class="font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </button>
  </div>
  <div class="flex mt-3 items-center">
    <div class="flex w-[80%]">
      <div class="my-2 px-2">
        <img src="img/T2.jpg" alt="" class="w-6 h-6 rounded-full" />
      </div>
      <div class="-mx-1">
        <p class="text-xs font-semibold text-slate-700">
          Dreamer
          <span class="text-slate-600 font-thin">| Maker</span>
        </p>
        <a href="" class="text-sm font-bold">Annie Clark</a>
      </div>
    </div>
    <div class="">
      <span class="font-bold">$39</span>
    </div>
  </div>
</div>`;
}

for (let i = 0; i < 8; i++) {
  store.innerHTML += `
  <div
              class="w-full min-h-[480px] mt-3 rounded-lg lg:w-96 border border-slate-300 shadow-lg"
            >
              <div id="ring-products" class="grid grid-cols-2 p-4 gap-4">
                <img
                  src="img/T5.jpg"
                  alt=""
                  class="h-40 rounded-lg hover:scale-105 hover:opacity-90 shadow-md shadow-slate-500/80 transition duration-300"
                />
                <img
                  src="img/T5.jpg"
                  alt=""
                  class="h-40 rounded-lg hover:scale-105 hover:opacity-90 shadow-md shadow-slate-500/80 transition duration-300"
                />
                <img
                  src="img/T5.jpg"
                  alt=""
                  class="h-40 rounded-lg hover:scale-105 hover:opacity-90 shadow-md shadow-slate-500/80 transition duration-300"
                />
                <img
                  src="img/T5.jpg"
                  alt=""
                  class="h-40 rounded-lg hover:scale-105 hover:opacity-90 shadow-md shadow-slate-500/80 transition duration-300"
                />
              </div>
              <h3 class="text-center font-medium text-2xl italic">Passtele</h3>
              <div class="p-4 flex items-center justify-between">
                <div class="flex items-center">
                  <img src="img/T5.jpg" alt="" class="w-20 h-20 rounded-full" />
                  <div class="ml-3">
                    <h4 class="font-bold text-2xl">Scorpion Sorbet</h4>
                    <p class="font-semibold text-xl text-zinc-400">
                      18 creation
                    </p>
                  </div>
                </div>
                <button
                  class="p-4 bg-slate-300/25 text-2xl font-semibold rounded-full hover:bg-amber-300 transition ease-in-out duration-500"
                >
                  Follow
                </button>
              </div>
            </div>
  `;
}

for (let i = 0; i < 8; i++) {
  comingSoon.innerHTML += `
  <div
            class="relative overflow-hidden shadow-lg rounded-lg hover:scale-105 transition duration-300"
          >
            <img src="img/T1.jpg" alt="" class="w-[380px] min-h-max" />
            <div class="mx-3 my-2 absolute top-0 left-0">
              <h4 class="font-semibold text-4xl">Brio</h4>
              <p class="text-xl">October 21</p>
            </div>
            <button
              class="text-2xl font-semibold mb-2 py-4 px-10 bg-white border border-slate-300 shadow-lg rounded-full absolute left-1/4 bottom-0"
            >
              Remaind Me
            </button>
          </div>
  `;
}
