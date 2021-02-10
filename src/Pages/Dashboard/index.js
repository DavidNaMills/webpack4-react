import React, { useEffect } from "react";
import useInitialiseAll from "../../hooks/useInitialiseAll";
import axios from "../../Axios/axiosInstance";

const Dashboard = () => {
  const { fetchAll } = useInitialiseAll({ axios });

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      <h1>This is the dashboard</h1>
    </div>
  );
};

export default Dashboard;
