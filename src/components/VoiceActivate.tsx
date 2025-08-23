import { Mic, Volume2 } from "lucide-react";

const VoiceActivate = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      {/* Full-width container (fills outlet) */}
      <div className="w-full bg-white border border-orange-300 rounded-2xl p-6 sm:p-10 text-center">
        {/* Header Section */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Voice-Activated Companion
        </h1>
        <p className="text-gray-600 mb-8">
          Speak naturally: "hey Carebot, what do I do if a resident falls?"
        </p>

        {/* Microphone Button */}
        <div className="flex justify-center items-center mb-6">
          <button className="flex justify-center items-center w-24 h-24 rounded-full bg-[#40C7B4] text-white shadow-xl hover:bg-[#32a08f] transition-colors focus:outline-none focus:ring-4 focus:ring-[#40C7B4]/50">
            <Mic size={48} strokeWidth={1.5} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-12">
          Tap to speak or say "Hey CareBot"
        </p>

        {/* Real-time Response Section */}
        <div className=" border border-gray-300 rounded-xl p-6 text-left relative">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Real-time Response
          </h2>
          <div className="space-y-4 text-gray-700">
            {/* Step 1 */}
            <div>
              <h3 className="font-semibold text-base mb-1">
                01. Ensure Safety First
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Do not move the resident unless there's immediate danger
                  (e.g. fire, water hazard).
                </li>
                <li>
                  Check surroundings to make sure it's safe for you and the
                  resident.
                </li>
              </ul>
            </div>
            {/* Step 2 */}
            <div>
              <h3 className="font-semibold text-base mb-1">
                02. Assess the Resident
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Check if the resident is conscious and responsive.</li>
                <li>
                  Look for signs of injury: bleeding, pain, swelling, or
                  deformity.
                </li>
                <li>Ask if they feel pain or dizziness.</li>
              </ul>
            </div>
            {/* Step 3 - Truncated */}
            <div >
              <h3 className="font-semibold text-base mb-1">
                03. Call for Help
              </h3>
            </div>
          </div>
          {/* Volume icon */}
          <div className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
            <Volume2 size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceActivate;
