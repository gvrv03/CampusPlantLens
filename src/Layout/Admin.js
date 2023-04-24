import AdminStat from "campusplantlens/Components/AdminStat";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";
import Link from "next/link";
import React from "react";

const Admin = ({ children }) => {
  const { user } = useUserAuth();
  if (user) {
    return (
      <div className="container  justify-between mt-16 m-auto flex md:flex-row flex-col-reverse  gap-5 ">
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
        <div className=" w-full md:w-4/5 p-5  bg-white">
          <AdminStat />
          <div className="mt-10">{children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container m-auto p-5    bg-white mt-16">
        <div>You Need To Login</div>
      </div>
    );
  }
};

export default Admin;
