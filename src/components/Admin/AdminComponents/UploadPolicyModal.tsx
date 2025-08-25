import { useState, useRef } from "react";
import { X, ChevronDown } from "lucide-react";

interface UploadPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadPolicyModal({
  isOpen,
  onClose,
}: UploadPolicyModalProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFileType, setSelectedFileType] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [showForm, setShowForm] = useState(false);

  // File input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Form state
  const [summary, setSummary] = useState("AI Generated Summary............");
  const [category, setCategory] = useState("");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [tags, setTags] = useState("ACQS,NDIS,Training");
  const [version, setVersion] = useState("e.g.10.A1");
  const [expireDate, setExpireDate] = useState("");
  const [status, setStatus] = useState("Active");

  const categories = [
    "Safety",
    "HR",
    "Clinical",
    "Compliance",
    "Operations",
    "IT",
    "Governance",
    "Others",
  ];

  if (!isOpen) return null;

  // ✅ Dropdown select → open form
  const handleFileTypeSelect = (fileType: string) => {
    setSelectedFileType(fileType);
    setDropdownOpen(false);
    setShowForm(true);
  };

  // ✅ Choose File button → open file picker
  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0] || null;
    if (picked) {
      setFile(picked);

      // Infer type if not chosen manually
      if (!selectedFileType) {
        const ext = picked.name.split(".").pop()?.toLowerCase();
        if (ext === "pdf") setSelectedFileType("PDF");
        else if (ext === "doc") setSelectedFileType("DOC");
        else if (ext === "docx") setSelectedFileType("DOCX");
      }

      setShowForm(true); // ✅ open form
    }
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setCategoryDropdownOpen(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedFileType("");
    setFile(null);
    // Reset form
    setSummary("AI Generated Summary............");
    setCategory("");
    setTags("ACQS,NDIS,Training");
    setVersion("e.g.10.A1");
    setExpireDate("");
    setStatus("Active");
  };

  const handleUploadDocument = () => {
    console.log({
      fileType: selectedFileType,
      file,
      summary,
      category,
      tags,
      version,
      expireDate,
      status,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 mx-4 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Upload New Policy Document
        </h2>

        {!showForm ? (
          // File Selection Section
          <div className="mb-6">
            <label className="block text-base text-gray-600 mb-4">
              Select Document File:
            </label>

            <div className="flex gap-3 border rounded-xl border-yellow-400 items-center">
              {/* Choose File Button */}
              <div className="flex-1 flex items-center gap-3">
                <button
                  onClick={handleChooseFileClick}
                  className="w-36 bg-gray-700 hover:bg-gray-600 text-white text-left px-4 py-3 m-1 rounded-lg transition-colors text-base"
                >
                  Choose File
                </button>
                {file && (
                  <span className="text-sm text-gray-700 truncate">
                    {file.name}
                  </span>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-center text-black px-4 py-3 rounded-lg transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-0 mt-1 right-10 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                    <div className="bg-teal-500 text-white px-3 py-2 text-sm font-medium">
                      Select File
                    </div>
                    <button
                      onClick={() => handleFileTypeSelect("PDF")}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      PDF
                    </button>
                    <button
                      onClick={() => handleFileTypeSelect("DOC")}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      DOC
                    </button>
                    <button
                      onClick={() => handleFileTypeSelect("DOCX")}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      DOCX
                    </button>
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-red-500 mt-3">
              Accepted formats: PDF, DOC, DOCX. Max file size: 10MB.
            </p>
          </div>
        ) : (
          // Form
          <div className="space-y-6">
            {/* Summary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Summary:
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-3 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none bg-gray-50"
                rows={4}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category:
              </label>
              <div className="relative">
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="w-full px-3 py-2 border border-yellow-400 rounded-lg text-left bg-white hover:bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 flex items-center justify-between"
                >
                  <span
                    className={category ? "text-gray-900" : "text-gray-500"}
                  >
                    {category || "Select a category"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                    <div className="bg-emerald-500 text-white px-3 py-2 text-sm font-medium sticky top-0">
                      Select a Category
                    </div>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tags + Version */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (Comma-Separated):
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-3 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Version:
                </label>
                <input
                  type="text"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  className="w-full px-3 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Expire Date + Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expire Date:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={expireDate}
                    onChange={(e) => setExpireDate(e.target.value)}
                    placeholder="mm / dd / yyyy"
                    className="w-full px-3 py-2 pr-10 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status:
                </label>
                <div className="relative">
                  <button
                    onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                    className="w-full px-3 py-2 border border-yellow-400 rounded-lg text-left bg-white hover:bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 flex items-center justify-between"
                  >
                    <span className="text-gray-900">{status}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>

                  {statusDropdownOpen && (
                    <div className="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                      <button
                        onClick={() => {
                          setStatus("Active");
                          setStatusDropdownOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Active
                      </button>
                      <button
                        onClick={() => {
                          setStatus("Draft");
                          setStatusDropdownOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Draft
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={handleCancel}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadDocument}
                className="bg-teal-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors"
              >
                Upload Document
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
