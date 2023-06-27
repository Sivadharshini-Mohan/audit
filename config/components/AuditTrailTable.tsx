"use client";

import { ColumnDef } from "@models/types";
import React, { useState } from "react";
import ColumnDefintion from "@config/AuditTableConfig";
import AuditResponses from "@data/AuditResponses";
import ActivityHistoryResponses from "@data/ActivityHistoryResponses";
import { useGetTest } from "@hook/useGetTest";

const logEntityType: string = "activityHistory";
const columns: ColumnDef[] = ColumnDefintion(logEntityType, {}, {}, {}, {});

const getChildRowText = (data: any, entitytype: string): any => {
  let rowData: any = { fieldName: "", oldValue: "", newValue: "" };
  if (entitytype === "activityHistory") {
    rowData.fieldName = data.field_name;
    rowData.oldValue = data.old_value;
    rowData.newValue = data.new_value;
  }
  return rowData;
};

const getChildTableData = (data: any, entitytype: string): any => {
  let rowData: any = [];
  if (entitytype === "activityHistory" && data.activity_value_histories) {
    rowData = data.activity_value_histories;
  } else {
    rowData = data;
  }
  return rowData;
};

const getChildTableColSpan = (entitytype: string): any => {
  let colSpan: any = { span1: 1, span2: 3 };

  if (entitytype === "activityHistory") {
    colSpan = { span1: 2, span2: 4 };
  } else {
    colSpan = { span1: 1, span2: 3 };
  }
  return colSpan;
};

const ChildTableRowCollapse = (props: any) => {
  const { data: test } = useGetTest();
  const childdata: any = getChildTableData(
    props.rowdata.data ? props.rowdata.data : {},
    props.entitytype
  );
  console.log("test", test?.data);

  const colSpan = getChildTableColSpan(props.entitytype);
  return (
    <>
      {childdata && childdata.length > 0 ? (
        <tr>
          <td colSpan={colSpan.span1}></td>
          <td colSpan={colSpan.span2}>
            <table className="border shadow-xl" width="100%">
              <thead>
                <tr className="border">
                  <th className="px-2 py-2 font-bold text-left">Field Name</th>
                  <th className="px-2 py-2 font-bold text-left">Old Value</th>
                  <th className="px-2 py-2 font-bold text-left">New Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {childdata &&
                  childdata.map((childrow: any) => {
                    var columnData = getChildRowText(
                      childrow,
                      props.entitytype
                    );
                    return (
                      <tr>
                        <td className="px-2 py-2 font-medium">
                          {columnData.fieldName}
                        </td>
                        <td className="px-2 py-2 font-medium">
                          {columnData.oldValue}
                        </td>
                        <td className="px-2 py-2 font-medium">
                          {columnData.newValue}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </td>
        </tr>
      ) : (
        ""
      )}
    </>
  );
};

const setColumnText = (rowData: any, colKey: string): string => {
  let columnText: string = rowData[colKey];
  return columnText;
};

const getWindowSize: any = () => {
  const { innerWidth, innerHeight } = globalThis.window;
  return { innerWidth, innerHeight };
};

const setTableHeight = (): string => {
  const tableSize = getWindowSize().innerHeight - 113;
  return tableSize + "px";
};

const TableRow = (props: any) => {
  console.log("---TableRowTableRow--props.isOpen--", props.isOpen);
  const [isOpen, setOpen] = React.useState(true);

  return (
    <>
      <tr className="border-b dark:border-neutral-500 bg-[#f9f9f9]">
        {columns.map((col) => {
          return (
            <>
              {col.property !== "toggle" ? (
                <td className="px-1 py-1 font-medium border">
                  {" "}
                  {setColumnText(props.rowdata, col.property)}{" "}
                </td>
              ) : (
                <td className="px-1 py-1 font-medium border">
                  <div onClick={() => setOpen(!isOpen)}>
                    {!props.isOpen || !isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#337ab7]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#337ab7]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </div>
                </td>
              )}
            </>
          );
        })}
      </tr>
      {props.isOpen && isOpen ? (
        <ChildTableRowCollapse
          rowdata={props.rowdata}
          entitytype={props.rowdata.logEntityType}
        />
      ) : (
        ""
      )}
    </>
  );
};

const getColumnWidth = (width: string): string => {
  return width + "%";
};
const AuditTrailTable = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  console.log("-----windowSize----", windowSize.innerHeight);
  const [isOpen, setOpen] = React.useState(true);

  const tableData = ActivityHistoryResponses;
  const colSpan = 7;
  return (
    <>
      <div className="py-3 pr-5 pl-1 flex">
        <span> Showing 0 results </span>
        <div className="justify-around ml-auto flex w-28">
          <a className="border border-gray-300 px-1 rounded-s cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <div className="border border-gray-300 px-3 py-1 hover:bg-gray-300">
            1
          </div>
          <a className="border border-gray-300 px-1 rounded-e cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className="flex-grow overflow-auto"
          style={{ height: setTableHeight() }}
        >
          <table className="relative w-full border">
            <thead className="h-12">
              <tr>
                {columns.map((data) => {
                  return (
                    <>
                      {data.property !== "toggle" ? (
                        <th
                          key={data.colHeader}
                          className="pl-1 px-1 py-1 font-bold text-left border border-slate-400 break-keep bg-[#1379a5] sticky top-0 text-white"
                          style={{ width: getColumnWidth(data.width) }}
                        >
                          {data.colHeader}
                        </th>
                      ) : (
                        <th
                          key={data.colHeader}
                          className="px-1 py-1 font-bold text-left border border-slate-400 break-keep bg-[#1379a5] sticky top-0 text-white"
                          style={{ width: getColumnWidth(data.width) }}
                        >
                          <div onClick={() => setOpen(!isOpen)}>
                            {!isOpen ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-[#fff]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-[#fff]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            )}
                          </div>
                        </th>
                      )}
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData && tableData.length > 0 ? (
                tableData.map((row) => {
                  return <TableRow rowdata={row} isOpen={isOpen} />;
                })
              ) : (
                <tr className="border-b dark:border-neutral-500 bg-[#f9f9f9]">
                  <td
                    colSpan={colSpan}
                    className="px-1 py-1 text-sm font-medium border text-center"
                  >
                    {" "}
                    No results found{" "}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-slate-300 h-[2px]"></div>
    </>
  );
};

export default AuditTrailTable;
