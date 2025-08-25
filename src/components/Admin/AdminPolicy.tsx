import { useState } from "react";
import { Search, Upload, FileText, Download, AlertTriangle } from "lucide-react";
import AdminTable from "./AdminTable";
import UploadPolicyModal from "./AdminComponents/UploadPolicyModal";

export default function AdminPolicy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<"upload" | "generate" | "download" | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="space-y-6">
        {/* Disclaimer + Actions */}
        <div className="bg-orange-50 rounded-lg border border-yellow-400 p-6">
          {/* Disclaimer */}
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-orange-800 font-medium mb-1">Disclaimer</h3>
              <p className="text-orange-700 text-sm leading-relaxed">
                This feature uses Generative AI to support content creation...
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {/* Upload New Policy */}
            <button
              onClick={() => {
                setIsModalOpen(true);
                setActiveAction("upload");
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-medium transition-colors
                ${activeAction === "upload"
                  ? "bg-teal-500 hover:bg-teal-600 text-white"
                  : activeAction === "generate" || activeAction === "download"
                  ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600 text-white"
                }`}
            >
              <Upload className="h-4 w-4" />
              Upload New Policy
            </button>

            {/* Generate Policy (AI) */}
            <button
              onClick={() =>
                setActiveAction(activeAction === "generate" ? null : "generate")
              }
              className={`flex items-center gap-2 border-2 border-dashed border-teal-400 px-4 py-2.5 rounded-md font-medium transition-colors
                ${activeAction === "generate"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-gray-700 hover:bg-teal-50"
                }`}
            >
              <FileText className="h-4 w-4" />
              Generate Policy (AI)
            </button>

            {/* Download All */}
            <button
              onClick={() => setActiveAction("download")}
              className={`flex items-center gap-2 border-2 border-dashed border-teal-400 px-4 py-2.5 rounded-md font-medium transition-colors
                ${activeAction === "download"
                  ? "bg-teal-500 text-white"
                  : activeAction === "generate"
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-teal-50"
                }`}
            >
              <Download className="h-4 w-4" />
              Download All
            </button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-teal-500 rounded-full p-1.5">
              <Search className="h-4 w-4 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search Documents"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 bg-white"
            />
          </div>
        </div>

        <AdminTable />

        {/* Smart Policy Editor (AI) */}
        {activeAction === "generate" && (
          <div className="mt-6 border border-orange-300 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Smart Policy Editor (AI-Powered)
            </h2>

            <div className="space-y-4">
              {/* Policy Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Policy Title:
                </label>
                <input
                  type="text"
                  placeholder="e.g., Incident Reporting Policy"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Policy Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Policy Content:
                </label>
                <textarea
                  placeholder="Start typing your policy or use AI to generate..."
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Generate Button */}
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Generate Policy
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Reusable Modal */}
      <UploadPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
