import React from "react";

import DataTable from "react-data-table-component";
import { customStyles } from "../../constants";
import { SiPanasonic } from "react-icons/si";
import NoticeBoard from "../../NoticeBoard";
import { noticeBoardData } from "../../constants";

const columns = [
  {
    name: "Name",
    selector: (row) => row.Name,
    center: true,
  },
  {
    name: "Subject",
    selector: (row) => row.Subject,
    center: true,
  },
  {
    name: "Qualification",
    selector: (row) => row.Qualification,
    center: true,
  },
  {
    name: "Salary",
    selector: (row) => row.Salary,
    center: true,
  },
  {
    name: "Perfomance",
    center: true,
    selector: (row) => {
      return (
        <div>
          <h1
            className={`px-4 py-1 rounded-md text-center relative z-10 w-[100px] ${
              row.Perfomance === "Good"
                ? "bg-green-300 text-green-600"
                : "bg-red-300 text-red-600"
            }`}
          >
            {row?.Perfomance}
          </h1>
        </div>
      );
    },
  },
];

const data = [
  {
    id: 1,
    Name: "Abhishek",
    Subject: "Maths",
    Qualification: "B.tech",
    Salary: "10000",
    Perfomance: "Bad",
  },
  {
    id: 2,
    Name: "Bhanu",
    Subject: "Science",
    Qualification: "Graduate",
    Salary: "11000",
    Perfomance: "Good",
  },
  {
    id: 3,
    Name: "Yash",
    Subject: "English",
    Qualification: "B.Ed",
    Salary: "14000",
    Perfomance: "Bad",
  },
  {
    id: 4,
    Name: "Ankit",
    Subject: "Computers",
    Qualification: "B.Sc",
    Salary: "10000",
    Perfomance: "Good",
  },
  {
    id: 5,
    Name: "Srinu",
    Subject: "Hindi",
    Qualification: "B.tech",
    Salary: "17000",
    Perfomance: "Bad",
  },
  {
    id: 6,
    Name: "raj",
    Subject: "English",
    Qualification: "B.Ed",
    Salary: "14000",
    Perfomance: "Bad",
  },
  {
    id: 7,
    Name: "Gopal",
    Subject: "Computers",
    Qualification: "B.Sc",
    Salary: "10000",
    Perfomance: "Bad",
  },
  // {
  // 	id: 8,
  // 	Name: 'Mahesh',
  // 	Subject:"Hindi",
  //     Qualification:"B.tech",
  //     Salary:"17000",
  //     Perfomance:"Good"
  // },
];

const TeacherTable = () => {
  return (
    <div className=" mt-2">
      <h1 className="mb-2 text-base font-bold">Teacher Details</h1>
      <div className="w-full flex gap-1">
        <div className="w-9/12 flex">
          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </div>
        <div className="w-[25%] mr-1 flex">
          <NoticeBoard NoticeBoard={noticeBoardData} />
        </div>
      </div>
    </div>
  );
};

export default TeacherTable;
