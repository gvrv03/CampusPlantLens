import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PlantsLayout = ({ children }) => {
  return (
    <section className="h-screen mt-20   ">
      <div className=" container gap-5 flex-col md:flex-row flex    m-auto">
        <div className="w-full  overflow-y-scroll h-screen  sm:w-9/12">{children}</div>
        <div className="w-full flex flex-col gap-2 p-5 md:w-3/12 bg-white ">
          <Category
            category="Ayurvedic"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-O8zvpqr-Cx3T8MkxR7YDvyilQdggwudP6yYrFRdZU3940Ir2wA1sLTIktV2SNiJF__U&usqp=CAU"
          />

          <Category
            category="Fruits"
            image="https://wallpaperaccess.com/full/2446201.jpg"
          />

          <Category
            category="Flowers"
            image="https://w0.peakpx.com/wallpaper/275/227/HD-wallpaper-nature-flowers-macro-plants.jpg"
          />

          <Category
            category="Decorative"
            image="https://images.jdmagicbox.com/quickquotes/images_main/artificial-plant-2216557070-zv7iztnz.jpg"
          />

          <Category
            category="Plants"
            image="https://previews.123rf.com/images/leksuperphoto/leksuperphoto1609/leksuperphoto160900034/65114098-wooden-and-climbing-plants-of-wall-contrast-background.jpg"
          />

          <Category
            category="Trees"
            image="https://static.vecteezy.com/system/resources/thumbnails/004/773/831/small/one-tree-in-the-meadow-love-nature-love-trees-3d-free-photo.jpg"
          />
        </div>
      </div>
    </section>
  );
};

const Category = (props) => {
  const router = useRouter();
  return (
    <Link
      href={`/Category/${props.category}`}
      className={` ${
        router.asPath === "/Category/" + props.category
      && "bg-green-400" } flex gap-5 border p-2 items-center`}
    >
      <img className="w-20 h-10" src={props.image} alt="" />
      <h2 className="font-semibold">{props.category}</h2>
    </Link>
  );
};

export default PlantsLayout;
