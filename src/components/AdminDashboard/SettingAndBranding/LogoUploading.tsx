
import { useState } from "react"

export default function LogoUpLoading() {
  const [isUploading, setIsUploading] = useState(false)
  const [logo, setLogo] = useState<string | null>(null) // store uploaded logo

  const handleUploadLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)

      const reader = new FileReader()
      reader.onloadend = () => {
        setLogo(reader.result as string) // set logo preview
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveSettings = () => {
    console.log("Saving branding settings with logo:", logo)
    // Save functionality here (API call)
  }

  return (
    <div className="space-y-6  p-4">
      {/* Card */}
      <div className="border border-[#FFC399] rounded-xl shadow-sm bg-white">
        {/* Card Header */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Branding & Visual Identity
          </h2>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Organisation Logo
            </h3>

            <div className="flex items-center gap-6">
              {/* Logo Display Area */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 border border-[#FFC399] rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  {logo ? (
                    <img
                      src={logo}
                      alt="Organisation Logo"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-[#2CBCA4] rounded transform rotate-45 relative">
                          <div className="absolute inset-1 bg-white rounded-sm transform -rotate-45"></div>
                        </div>
                        <span className="text-lg font-semibold text-gray-900">
                          CareBot
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        Admin Panel
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Section */}
              <div className="flex-1 space-y-3">
                <label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleUploadLogo}
                    className="hidden"
                  />
                  <span
                    className={`inline-block px-6 py-2 rounded-lg font-medium text-white cursor-pointer transition-colors ${
                      isUploading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#2CBCA4] "
                    }`}
                  >
                    {isUploading ? "Uploading..." : "Upload New Logo"}
                  </span>
                </label>

                <p className="text-sm text-gray-500">
                  Recommended size: 200×200px, PNG or JPG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mx-12">
        <button
          onClick={handleSaveSettings}
          className="bg-[#2CBCA4] cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Save Branding Settings
        </button>
      </div>
    </div>
  )
}
