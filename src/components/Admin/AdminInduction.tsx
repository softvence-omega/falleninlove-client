import { useState, JSX } from "react";
import { Plus } from "lucide-react";
import bgIcon1 from "../../assets/icons-bg/bg-file1.png";
import bgIcon2 from "../../assets/icons-bg/bg-clock2.png";
import bgIcon3 from "../../assets/icons-bg/bg-data3.png";
import {
  Flow,
  mockFlows,
  mockPerformanceData,
  PerformanceOverview,
} from "@/common/demodata";

type Step = {
  title: string;
  description: string;
  content: string;
  dueDate: string;
};

const getStatusColor = (status: Flow["status"]): string => {
  switch (status) {
    case "Publish":
    case "Draft":
      return "text-orange-500";
    case "Inactive":
    default:
      return "text-gray-500";
  }
};

export default function AdminInduction(): JSX.Element {
  const performanceData: PerformanceOverview = mockPerformanceData;
  const flows: Flow[] = mockFlows;

  // state for showing the new flow form
  const [showNewFlowForm, setShowNewFlowForm] = useState(false);

  // typed steps state
  const [steps, setSteps] = useState<Step[]>([
    { title: "", description: "", content: "", dueDate: "" },
  ]);

  const handleCreateNewFlow = (): void => {
    setShowNewFlowForm(true);
  };

  const handleCancel = (): void => {
    setShowNewFlowForm(false);
    setSteps([{ title: "", description: "", content: "", dueDate: "" }]); // reset steps
  };

  const handleAddStep = (): void => {
    setSteps((prev) => [
      ...prev,
      { title: "", description: "", content: "", dueDate: "" },
    ]);
  };

  //  no `any`; strongly typed field and value
  const handleStepChange = <K extends keyof Step>(
    index: number,
    field: K,
    value: Step[K]
  ) => {
    setSteps((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Induction Flow Builder
          </h1>
        </div>

        {/* Performance Overview */}
        <div className="mb-8">
          <div className="bg-white rounded-xl border border-orange-400 p-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-8">
              AI Performance Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Total Flows */}
              <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src={bgIcon3} alt="" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  Total Flows
                </p>
                <p className="text-4xl font-bold text-red-500">
                  {performanceData.totalFlows}
                </p>
              </div>

              {/* Active Flows */}
              <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src={bgIcon2} alt="" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  Active Flows
                </p>
                <p className="text-4xl font-bold text-green-500">
                  {performanceData.activeFlows}
                </p>
              </div>

              {/* Draft Flows */}
              <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src={bgIcon1} alt="" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  Draft Flows
                </p>
                <p className="text-4xl font-bold text-green-500">
                  {performanceData.draftFlows}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Library (table layout) */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-400">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Your Document Library
            </h2>
            <button
              onClick={handleCreateNewFlow}
              className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Create New Flow</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-50 text-gray-700 font-medium">
                <tr>
                  <th className="px-6 py-3">Flow Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Assigned Roles</th>
                  <th className="px-6 py-3 text-center">Steps</th>
                  <th className="px-6 py-3 text-center">Status</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {flows.map((flow: Flow) => (
                  <tr key={flow.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {flow.name}
                    </td>
                    <td className="px-6 py-4">{flow.description}</td>
                    <td className="px-6 py-4">{flow.assignedRoles.join(", ")}</td>
                    <td className="px-6 py-4 text-center">{flow.steps}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`font-medium ${getStatusColor(flow.status)}`}
                      >
                        {flow.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center space-x-4">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                      <button className="text-indigo-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-green-600 hover:underline">
                        Download
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Progress Bar */}
          <div className="p-6">
            <div className="w-full bg-gray-600 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-red-400"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* ✅ FORM BELOW THE DOCUMENT LIBRARY */}
        {showNewFlowForm && (
          <div className="mt-8 border border-orange-300 rounded-xl bg-white p-6">
            <h3 className="text-lg font-semibold mb-4">
              Build / Edit Induction Flow
            </h3>

            {/* Flow Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Flow Name
              </label>
              <input
                type="text"
                placeholder="New Carer Induction"
                className="w-full mt-1 p-2 border border-orange-300 rounded-md"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Brief Description of This Induction Flow."
                className="w-full mt-1 p-2 border border-orange-300 rounded-md"
              ></textarea>
            </div>

            {/* Assign Roles */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Assign to Roles
              </label>
              <div className="p-3 border border-orange-300 rounded-md">
                All Staff, Carer, Support Worker, Registered Nurse, Facility
                Manager, Compliance Officer
              </div>
            </div>

            {/* Flow Steps */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 py-2">
                Flow Steps
              </label>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="p-4 border border-orange-300 rounded-md space-y-2"
                  >
                    <p className="font-semibold text-gray-800">
                      Step {index + 1}
                    </p>
                    <input
                      type="text"
                      placeholder="Step Title"
                      value={step.title}
                      onChange={(e) =>
                        handleStepChange(index, "title", e.target.value)
                      }
                      className="w-full p-2 border border-orange-300 rounded-md"
                    />
                    <textarea
                      placeholder="Step Description"
                      value={step.description}
                      onChange={(e) =>
                        handleStepChange(index, "description", e.target.value)
                      }
                      className="w-full p-2 border border-orange-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Assign Content: Select Policy / Training"
                      value={step.content}
                      onChange={(e) =>
                        handleStepChange(index, "content", e.target.value)
                      }
                      className="w-full p-2 border border-orange-300 rounded-md"
                    />
                    <input
                      type="date"
                      value={step.dueDate}
                      onChange={(e) =>
                        handleStepChange(index, "dueDate", e.target.value)
                      }
                      className="w-full p-2 border border-orange-300 rounded-md"
                    />
                  </div>
                ))}
              </div>

              {/* Add New Step Button */}
              <button
                type="button"
                onClick={handleAddStep}
                className="mt-4 flex items-center space-x-2 bg-[#1A2E42] text-white px-4 py-2 rounded-lg font-medium"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Step</span>
              </button>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg bg-red-400 text-white"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white">
                Save Flow
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">
                Publish Flow
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
