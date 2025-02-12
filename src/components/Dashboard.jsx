import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import OptionNavBar from "./OptionNavBar";
import DashboardCenter from "./DashboardCenter";

function Dashboard({ setLikedProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <OptionNavBar
        setLikedProducts={setLikedProducts}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="grid grid-cols-12 gap-0">
        <DashboardSidebar
          isOpen={isOpen}
        />
        <DashboardCenter isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Dashboard;

