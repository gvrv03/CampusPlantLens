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
              { title: "Plant", value: allPlants.length, color: "#a0ff08" },
              {
                title: "Total Plant",
                value: allExisPlants.length,
                color: "#0040ff",
              },
              { title: "Category", value: 6, color: "#c20000" },
            ]}
            label={({ dataEntry }) => dataEntry.title}
            // className="text-xs"
            labelStyle={{ fontSize: "5px", color: "white " }}
          />
        </div>
      </div>
    </Admin>
  );
};

export default Dashboard;
