"use client"
import React, { useState } from "react";
import DateTime from '@components/DateTime';
import Dropdown from '@components/Dropdown';

const Filter = () => {

  const date = new Date();
  const startDateOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dateWithouTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const startDateOfPreviousMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  const startDate = (dateWithouTime.toString() === startDateOfCurrentMonth.toString()) ? startDateOfPreviousMonth : startDateOfCurrentMonth;

  const getWindowSize: any = () => {
    const { innerWidth, innerHeight } = globalThis.window;
    return { innerWidth, innerHeight };
  }

  const setFilterHeight = (): string => {
    const tableSize = (getWindowSize().innerHeight - 165);
    return tableSize + 'px';
  }
  
  const options = [
      { value: "value", label: "label" },
      { value: "value", label: "label" },
      { value: "value", label: "label" },
      { value: "value", label: "label" }
  ];

  return (
    <form>
      <div className="h-10 bg-[#1379a5] text-white p-2 text-lg flex items-center">
        <span>Filters</span>
        <a className="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <div className="px-2.5 overflow-y-auto" style={{ height: setFilterHeight() }}>
        <DateTime label="From" initialDate={startDate} />
        <DateTime label="To" initialDate={date} />
        <Dropdown label="Log Type" placeholder="All History" isDisabled={false} dropPosition="auto" options={options} />
        <Dropdown label="Patients" placeholder="(Select a Patient)" hasLogo isDisabled={false} dropPosition="auto" options={options} />
        <Dropdown label="Users" placeholder="All Users" hasLogo isDisabled={false} dropPosition="auto" options={options} />
        <Dropdown label="Libraries" placeholder="(Select a library)" isDisabled dropPosition="top" options={options}/>
        <Dropdown label="User Types" placeholder="(Select an user type)" isDisabled dropPosition="top" options={options}/>
        <Dropdown label="Dashboard Reports" placeholder="(Select a report)" isDisabled dropPosition="top" options={options}/>
        <Dropdown label="Custom Reports" placeholder="(Select a report)" isDisabled dropPosition="top" options={options}/>
      </div>
      <div className="p-2 mt-2">
        <button type="submit" className="border rounded-lg p-1 w-16 flex gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
          </svg>
          <span className="font-bold">Go</span>
        </button>
      </div>
    </form>
  )
}

export default Filter