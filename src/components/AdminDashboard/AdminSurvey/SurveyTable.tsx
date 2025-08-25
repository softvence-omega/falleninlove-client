import React from "react";

interface Survey {
  id: number;
  title: string;
  type: string;
  responses: string;
  createdDate: string;
  status: "Active" | "Draft";
}
interface SurveyTableProps {
  onCreateNewSurvey?: () => void;
}


const surveys: Survey[] = [
  {
    id: 1,
    title: "Staff Wellbeing Check-in Q3",
    type: "Wellbeing",
    responses: "32/45 (71%)",
    createdDate: "2025-07-01",
    status: "Active",
  },
  {
    id: 2,
    title: "Induction Feedback Survey",
    type: "Feedback",
    responses: "0/--",
    createdDate: "2025-06-20",
    status: "Draft",
  },
  {
    id: 3,
    title: "Staff Wellbeing Check-in Q3",
    type: "Wellbeing",
    responses: "32/45 (71%)",
    createdDate: "2025-07-01",
    status: "Active",
  },
];

const SurveyTable: React.FC<SurveyTableProps> = ({ onCreateNewSurvey }) => {
  return (
    <div className="p-4">
      <div className="rounded-xl shadow-md p-6 w-full border border-[#FFC399]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Surveys</h2>
          <button
            onClick={onCreateNewSurvey} // ✅ show form on click
            className="bg-[#2CBCA4] text-white px-4 py-2 rounded cursor-pointer"
          >
            + Create New Survey
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead className="rounded-xl">
              <tr className="bg-gray-50 text-left  font-medium text-[#6B7280] ">
                <th className="px-4 py-3">Survey Title</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Responses</th>
                <th className="px-4 py-3">Created Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map((survey) => (
                <tr
                  key={survey.id}
                  className=" border-b border-[#DEC9BA] "
                >
                  <td className=" py-3">{survey.title}</td>
                  <td className=" py-3">{survey.type}</td>
                  <td className="px-4 py-3">{survey.responses}</td>
                  <td className="px-4 py-3">{survey.createdDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`${
                        survey.status === "Active"
                          ? "text-[#FFBB33]"
                          : "text-[#FFBB33]"
                      } font-medium`}
                    >
                      {survey.status}
                    </span>
                  </td>
                  <td className=" py-3 text-center">
                    <div className="flex justify-center  font-medium space-x-4 ">
                      <button className="text-[#2F80ED] cursor-pointer  hover:underline">View</button>
                      <button className="text-[#2F80ED] cursor-pointer   hover:underline">Edit</button>
                      <button className="text-[#2CBCA4] cursor-pointer  hover:underline">Download</button>
                      <button className="text-[#D64545] cursor-pointer  hover:underline">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-3 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-400 w-[70%]"></div>
          <div className="h-full bg-gray-800 w-[30%]"></div>
        </div>
      </div>
    </div>
  );
};

export default SurveyTable;
