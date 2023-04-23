import React from "react";

const AdminStat = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="grid md:grid-cols-4 grid-cols-2 gap-5 -m-4 text-center">
          <div class="p-2 w-full bg-gray-100">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              2.7K
            </h2>
            <p class="leading-relaxed">Users</p>
          </div>
          <div class="p-2 w-full bg-gray-100">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              1.8K
            </h2>
            <p class="leading-relaxed">Subscribes</p>
          </div>
          <div class="p-2 w-full bg-gray-100">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              35
            </h2>
            <p class="leading-relaxed">Downloads</p>
          </div>
          <div class="p-2 w-full bg-gray-100">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              4
            </h2>
            <p class="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminStat;
