import { useState } from "react";
import { Search, Upload, FileText, Download, AlertTriangle } from "lucide-react";
import AdminTable from "./AdminTable";
import UploadPolicyModal from "./AdminComponents/UploadPolicyModal";

export default function AdminSops() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2.5 rounded-md font-medium transition-colors"
            >
              <Upload className="h-4 w-4" />
              Upload New Policy
            </button>
            <button className="flex items-center gap-2 border-2 border-dashed border-teal-400 text-gray-700 px-4 py-2.5 rounded-md bg-white">
              <FileText className="h-4 w-4" />
              Generate Policy (Ai)
            </button>
            <button className="flex items-center gap-2 border-2 border-dashed border-teal-400 text-gray-700 px-4 py-2.5 rounded-md bg-white">
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
      </div>

      {/* Reusable Modal */}
      <UploadPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
