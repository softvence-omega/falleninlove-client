import { useRef, useEffect, useState, JSX } from 'react';

interface PolicyComplianceData {
  title: string;
  percentage: number;
  compliantCount: number;
  totalCount: number;
  color: string;
}

// Mock data - replace with your API integration
const mockChartData = {
  labels: ['Jan', 'Feb', 'Apr', 'May', 'Mar', 'Jun', 'Jul'],
  data: [75, 78, 80, 82, 81, 85, 88],
};

const mockPolicyData: PolicyComplianceData[] = [
  {
    title: 'Clinical Policies',
    percentage: 95,
    compliantCount: 19,
    totalCount: 20,
    color: 'bg-teal-500',
  },
  {
    title: 'HR & Staffing Policies',
    percentage: 88,
    compliantCount: 19,
    totalCount: 20,
    color: 'bg-green-500',
  },
  {
    title: 'Safety & Emergency Policies',
    percentage: 70,
    compliantCount: 19,
    totalCount: 20,
    color: 'bg-teal-500',
  },
  {
    title: 'Operations & Administration Policies',
    percentage: 92,
    compliantCount: 19,
    totalCount: 20,
    color: 'bg-red-400',
  },
];

function ComplianceChart(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for crisp rendering
    canvas.width = dimensions.width * window.devicePixelRatio;
    canvas.height = dimensions.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const width = dimensions.width;
    const height = dimensions.height;
    
    // Responsive padding based on screen size
    const basePadding = width < 640 ? 40 : width < 1024 ? 50 : 60;
    const leftPadding = width < 640 ? 35 : basePadding;
    const rightPadding = width < 640 ? 20 : 30;
    const topPadding = 30;
    const bottomPadding = width < 640 ? 40 : 50;
    
    const chartWidth = width - leftPadding - rightPadding;
    const chartHeight = height - topPadding - bottomPadding;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid lines
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;

    // Horizontal grid lines
    const gridLines = 5;
    for (let i = 0; i <= gridLines; i++) {
      const y = topPadding + (chartHeight / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(leftPadding, y);
      ctx.lineTo(leftPadding + chartWidth, y);
      ctx.stroke();
    }

    // Vertical grid lines
    const stepX = chartWidth / (mockChartData.labels.length - 1);
    for (let i = 0; i < mockChartData.labels.length; i++) {
      const x = leftPadding + stepX * i;
      ctx.beginPath();
      ctx.moveTo(x, topPadding);
      ctx.lineTo(x, topPadding + chartHeight);
      ctx.stroke();
    }

    // Draw Y-axis labels
    ctx.fillStyle = '#6B7280';
    const fontSize = width < 640 ? 10 : width < 1024 ? 11 : 12;
    ctx.font = `${fontSize}px sans-serif`;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    for (let i = 0; i <= gridLines; i++) {
      const y = topPadding + (chartHeight / gridLines) * i;
      const value = 100 - (i * 20);
      ctx.fillText(value.toString(), leftPadding - 8, y);
    }

    // Draw X-axis labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = 0; i < mockChartData.labels.length; i++) {
      const x = leftPadding + stepX * i;
      ctx.fillText(mockChartData.labels[i], x, topPadding + chartHeight + 10);
    }

    // Draw Y-axis label (only on larger screens)
    if (width >= 640) {
      ctx.save();
      ctx.translate(15, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillText('Compliance Score (%)', 0, 0);
      ctx.restore();
    }

    // Create gradient for area fill
    const gradient = ctx.createLinearGradient(0, topPadding, 0, topPadding + chartHeight);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(139, 92, 246, 0.05)');

    // Draw area fill
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(leftPadding, topPadding + chartHeight);

    for (let i = 0; i < mockChartData.data.length; i++) {
      const x = leftPadding + stepX * i;
      const y = topPadding + chartHeight - (mockChartData.data[i] / 100) * chartHeight;
      if (i === 0) {
        ctx.lineTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.lineTo(leftPadding + chartWidth, topPadding + chartHeight);
    ctx.closePath();
    ctx.fill();

    // Draw line
    ctx.strokeStyle = 'rgba(139, 92, 246, 1)';
    ctx.lineWidth = width < 640 ? 1.5 : 2;
    ctx.beginPath();

    for (let i = 0; i < mockChartData.data.length; i++) {
      const x = leftPadding + stepX * i;
      const y = topPadding + chartHeight - (mockChartData.data[i] / 100) * chartHeight;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // Draw points
    ctx.fillStyle = 'rgba(139, 92, 246, 1)';
    const pointRadius = width < 640 ? 3 : 4;
    const borderWidth = width < 640 ? 1.5 : 2;
    
    for (let i = 0; i < mockChartData.data.length; i++) {
      const x = leftPadding + stepX * i;
      const y = topPadding + chartHeight - (mockChartData.data[i] / 100) * chartHeight;
      
      ctx.beginPath();
      ctx.arc(x, y, pointRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // White border for points
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = borderWidth;
      ctx.stroke();
    }

  }, [dimensions]);

  return (
    <div className="space-y-6">
      {/* Compliance Score Trend Chart */}
      <div className="bg-white rounded-2xl border border-yellow-400 p-3 sm:p-4 lg:p-6">
        <h2 className="text-base sm:text-lg font-medium text-gray-500 mb-4">
          Compliance Score Trend
        </h2>
        
        <div className="mb-4">
          <p className="text-center text-xs sm:text-sm text-gray-600 font-medium">
            Overall Compliance Score ( % )
          </p>
        </div>

        {/* Responsive chart container with increased heights */}
        <div 
          ref={containerRef}
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
          />
        </div>
      </div>

      {/* Policy Compliance Status */}
      <div className="bg-white rounded-2xl border border-yellow-400 p-3 sm:p-4 lg:p-6">
        <h2 className="text-base sm:text-lg font-medium text-gray-500 mb-4 sm:mb-6">
          Policy Compliance Status
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-6">
          {mockPolicyData.map((policy, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-yellow-400">
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                {policy.title}
              </h3>
              
              {/* Progress Bar */}
              <div className="mb-3">
                <div className="w-full bg-gray-300 rounded-full h-1.5 sm:h-2 overflow-hidden">
                  <div
                    className={`h-full ${policy.color} transition-all duration-300`}
                    style={{ width: `${policy.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-gray-600 font-medium">
                  {policy.percentage}% Compliant
                </span>
                <span className="text-gray-500">
                  ( {policy.compliantCount}/{policy.totalCount} Policies )
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComplianceChart;