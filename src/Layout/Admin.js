import AdminStat from "campusplantlens/Components/AdminStat";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";
import Link from "next/link";
import React from "react";

const Admin = ({ children }) => {
  const { user, allUserDetail } = useUserAuth();

  if (allUserDetail.role === process.env.NEXT_PUBLIC_ADMINKEY) {
    return (
      <div className="px-5 container  justify-between mt-20 m-auto flex md:flex-row flex-col-reverse  gap-5 ">
        <div className=" w-full md:w-1/5 p-5  bg-white">
          <div className="flex flex-col gap-5">
            <button className=" w-full text-left  font-semibold">
              <Link href="/Admin/AddPlant" className="  ">
                Add Plant
              </Link>
            </button>

            <button className=" w-full text-left  font-semibold">
              <Link href="/Admin/AllPlants" className="  ">
                All Plants
              </Link>
            </button>

            <button className=" w-full text-left  font-semibold">
              <Link href="/Admin/AddImages" className="  ">
                Add Plant Images
              </Link>
            </button>

            <button className=" w-full text-left  font-semibold">
              <Link href="" className="  ">
                Plants
              </Link>
            </button>

            <button className=" w-full text-left  font-semibold">
              <Link href="" className="  ">
                Feedback
              </Link>
            </button>
          </div>
        </div>
        <div className="  w-full md:w-4/5 p-5  bg-white">
          <AdminStat />
          <div className="mt-10">{children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container m-auto p-5    bg-white mt-16">
        <div>Access Denied</div>
      </div>
    );
  }
};

export default Admin;
