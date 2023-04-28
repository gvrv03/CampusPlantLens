import { usePlantContext } from "campusplantlens/Context/PlantContext";
import Admin from "campusplantlens/Layout/Admin";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
  const { allPlants, allExisPlants } = usePlantContext();
  return (
    <Admin>
      <div className="grid place-items-center ">
        <div className=" md:w-96 h-full w-3/4">
          <PieChart
            // animate=
            data={[
              { title: "Plant", value: allPlants.length, color: "#abedc6" },
              {
                title: "Total Plant",
                value: allExisPlants.length,
                color: "#97e6b8",
              },
              { title: "Category", value: 6, color: "#6bc792" },
            ]}
            label={({ dataEntry }) =>
              dataEntry.title + " " + "(" + dataEntry.value + ")"
            }
            labelStyle={{ fontSize: "5px", color: "white", fontWeight: 500 }}
          />
        </div>
      </div>
    </Admin>
  );
};

export default Dashboard;
