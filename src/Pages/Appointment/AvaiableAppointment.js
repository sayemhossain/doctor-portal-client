import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const AvaiableAppointment = ({ date }) => {
  const [services, setSevices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSevices(data));
  }, []);

  return (
    <div className="my-10 md:my-20">
      <div>
        <h4 className="text-center mb-10 text-secondary">
          Available Appointments on {format(date, "PP")}
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AvaiableAppointment;
