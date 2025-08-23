

import headphone from "../../../assets/user/earphone.png"




interface ProcedureCard {
    id: string;
    title: string;
    description: string;

    featured?: boolean;
}

const procedures: ProcedureCard[] = [
    {
        id: 'fire-evacuation',
        title: 'Fire Evacuation Plan',
        description: 'Step-by-step guide for fire emergencies and evacuation routes.',
     
        featured: true
    },
    {
        id: 'medical-emergency',
        title: 'Medical Emergency Protocol',
        description: 'Procedures for responding to sudden medical incidents or injuries.',
       
    },
    {
        id: 'missing-person',
        title: 'Missing Person Protocol',
        description: 'Steps to take if a client or resident is reported missing.',
       
    },
    {
        id: 'aggressive-behaviour',
        title: 'Aggressive Behaviour Management',
        description: 'Guidelines for de-escalating and managing aggressive situations safely.',
      
    },
    {
        id: 'infection-control',
        title: 'Infection Control Protocol',
        description: 'Procedures for preventing and managing infectious disease outbreaks.',
    
    },
    {
        id: 'disaster-preparedness',
        title: 'Disaster Preparedness Plan',
        description: 'Comprehensive plan for natural disasters and other widespread emergencies.',
     
    }
];

function EmergencyProceduer() {
    const handleContinueModule = (procedureId: string) => {
        console.log(`Continuing module: ${procedureId}`);
        // Add your navigation logic here
    };

    return (
        <div className="  px-4 ">
            <div className=" mx-auto">
                <h1 className="text-2xl font-bold text-[#6B7280] my-8 text-center sm:text-left">
                    Critical Emergency Procedures
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {procedures.map((procedure) => (
                        <div
                            key={procedure.id}
                            className=" rounded-lg shadow-sm border border-[#FF6A0066]  flex flex-col h-full hover:shadow-md transition-shadow duration-200"
                            style={{ minHeight: '250px' }} // minimum height ensure
                        >
                            <div className="flex items-start justify-center  gap-4 mb-4 p-6 flex-1">
                                <div className="flex-shrink-0 text-gray-600 mt-1">
                                  <img src={headphone} alt="headphone" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                                        {procedure.title}
                                    </h2>
                                    <p className=" text-[#6B7280] leading-relaxed">
                                        {procedure.description}
                                    </p>
                                </div>
                            </div>

                            <div className=" pt-4">
                                <button
                                    onClick={() => handleContinueModule(procedure.id)}
                                    className={`w-full py-2.5  rounded-md font-medium text-sm transition-colors duration-200 ${procedure.featured
                                            ? 'bg-[#2CBCA4] text-white  '
                                            : 'border border-gray-300 text-gray-700 bg-white '
                                        }`}
                                >
                                    Continue Module
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default EmergencyProceduer;