import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "@components/TimePicker";

interface DateTimeProps {
  label: String;
  initialDate: Date;
}

const DateTime = ({ label, initialDate }: DateTimeProps) => {
  const [date, setDate] = useState<any>(initialDate);

  const handleChange = (date: any) => {
    setDate(date);
  };

  return (
    <div className="border-dashed border-b-2">
      <div className="py-2">
        <label className="font-bold text-[#777]">{label}</label>
      </div>
      <div className=" flex justify-between pb-2.5">
        <DatePicker
          className="border border-gray-300 text-gray-900 w-20 focus:outline-none p-1"
          selected={date}
          onChange={handleChange}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        <TimePicker date={date} />
      </div>
    </div>
  );
};

export default DateTime;
