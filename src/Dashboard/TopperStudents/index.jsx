import React from "react";

import DataTable from "react-data-table-component";
import { customStyles } from "../../constants";
import { SiPanasonic } from "react-icons/si";
import NoticeBoard from "../../NoticeBoard";
import { noticeBoardDataTwo } from "../../constants";

const columns = [
  {
    name: "Name",
    selector: (row) => row.Name,
    center: true,
  },
  {
    name: "Id",
    selector: (row) => row.Id,
    center: true,
  },
  {
    name: "Class",
    selector: (row) => row.Class,
    center: true,
  },
  {
    name: "Rank",
    selector: (row) => row.Rank,
    center: true,
  },
  {
    name: "Fee",
    center: true,
    selector: (row) => {
      return (
        <div className="flex items-center gap-x-2">
          <h1>{row?.Fee}</h1>
          <span
            className={`w-[10px] h-[10px] rounded-full ${
              row.FeePaid ? "bg-green-700" : "bg-red-700"
            }`}
          />
        </div>
      );
    },
  },
];

const data = [
  {
    id: 1,
    Name: "Abhishek",
    Id: "739933",
    Class: "VIII 'A'",
    Rank: "First",
    FeePaid: true,
    Fee: "13000",
  },
  {
    id: 2,
    Name: "Ram",
    Id: "739933",
    Class: "VIII 'A'",
    Rank: "First",
    Fee: "13000",
    FeePaid: false,
  },
  {
    id: 3,
    Name: "Arun",
    Id: "739933",
    Class: "VIII 'A'",
    Rank: "First",
    FeePaid: false,
    Fee: "13000",
  },
  {
    id: 4,
    Name: "Vijay",

    Id: "739933",
    Class: "VIII 'A'",
    Rank: "First",
    FeePaid: true,
    Fee: "13000",
  },
  {
    id: 5,
    Name: "Mahesh",

    Id: "739933",
    Class: "VIII 'A'",
    Rank: "First",
    FeePaid: true,
    Fee: "13000",
  },
  {
    id: 6,
    Id: "739933",
    Name: "srinu",
    Class: "VIII 'A'",
    Rank: "First",
    FeePaid: true,
    Fee: "13000",
  },
  {
    id: 7,
    Id: "739933",
    Name: "raj",
    Class: "VIII 'A'",
    Rank: "First",
    FeePaid: false,
    Fee: "13000",
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

const TopperStudents = () => {
  return (
    <div className=" mt-2">
      <h1 className="mb-2 text-base font-bold">Topper Details</h1>
      <div className="w-full flex gap-1">
        <div className="w-9/12 flex">
          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </div>
        <div className="w-[25%] mr-1 flex">
          <NoticeBoard NoticeBoard={noticeBoardDataTwo} />
        </div>
      </div>
    </div>
  );
};

export default TopperStudents;
