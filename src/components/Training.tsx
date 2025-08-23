
// Mock data for the training modules
const pendingModules = [
  {
    id: 1,
    title: 'Mandatory Compliance Training',
    description: 'Essential training covering ACQSC standards and regulatory requirements.',
    progress: 40,
    date: '2024-06-15',
    buttonText: 'Continue Module',
  },
  {
    id: 2,
    title: 'Care Documentation Best Practices',
    description: 'Learn how to accurately and efficiently document client care.',
    progress: 0,
    date: '2024-06-15',
    buttonText: 'Start Module',
  },
  {
    id: 3,
    title: 'First Aid & CPR Refresher',
    description: 'Annual refresher for essential first aid and CPR techniques.',
    progress: 70,
    date: '2024-06-15',
    buttonText: 'Continue Module',
  },
];

const completedModules = [
  {
    id: 4,
    title: 'Manual Handling & Ergonomics',
    description: 'Training on safe lifting and movement techniques.',
    progress: 100,
    date: '2024-06-15',
    buttonText: 'View Certificate',
  },
  {
    id: 5,
    title: 'Infection Control Principles',
    description: 'Understanding and applying best practices for infection prevention.',
    progress: 100,
    date: '2024-06-15',
    buttonText: 'View Certificate',
  },
];
/**
 * Reusable progress bar component
 */
type ProgressBarProps = {
  progress: number;
  className?: string;
};

const ProgressBar = ({ progress, className = "" }: ProgressBarProps) => {
  return (
    <div className={`w-full bg-gray-600 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-500 ease-out bg-[#FF715B]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

/**
 * Training module card component
 */
type TrainingCardProps = {
  title: string;
  description: string;
  progress: number;
  date: string;
  buttonText: string;
  isCompleted: boolean;
};

const TrainingCard = ({
  title,
  description,
  progress,
  date,
  buttonText,
  isCompleted,
}: TrainingCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <div className="flex-1 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>
          <p className=" text-[#6B7280] text-base font-semibold leading-relaxed">
            {description}
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={progress} />

        {/* Progress Info */}
        <div className="flex justify-between items-center  text-gray-500">
          <span>Progress: {progress}%</span>
          <span>Date: {date}</span>
        </div>
      </div>

      {/* Action Button - Always at bottom */}
      <button
        className={`w-full py-3 px-4 rounded-lg font-medium  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-6 ${
          isCompleted
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300 border border-gray-300'
            : 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 shadow-sm'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const Training = () => {
  // Calculate overall progress
  const allModules = [...pendingModules, ...completedModules];
  const totalProgress = allModules.reduce((sum, module) => sum + module.progress, 0) / allModules.length;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Induction & Training
          </h1>
        </div>

        {/* Overall Progress Section */}
        <div className="bg-[#E9F2FE] rounded-xl border border-gray-200 p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              Your progress
            </h2>
            <ProgressBar progress={totalProgress} className="h-3 mb-3" />
            <p className=" text-gray-600">
              {Math.round(totalProgress)}% Complete - Keep up the great work!
            </p>
          </div>
        </div>

        {/* Pending Modules Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Pending Induction Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {pendingModules.map((module) => (
              <TrainingCard
                key={module.id}
                title={module.title}
                description={module.description}
                progress={module.progress}
                date={module.date}
                buttonText={module.buttonText}
                isCompleted={false}
              />
            ))}
          </div>
        </section>

        {/* Completed Modules Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Completed Training Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {completedModules.map((module) => (
              <TrainingCard
                key={module.id}
                title={module.title}
                description={module.description}
                progress={module.progress}
                date={module.date}
                buttonText={module.buttonText}
                isCompleted={true}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Training;