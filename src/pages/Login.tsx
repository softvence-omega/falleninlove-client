import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - CareBot Brand */}
      <div
        className="flex-1 relative overflow-hidden md:h-auto h-64 md:flex md:flex-col"
        style={{
          background: "linear-gradient(to bottom, #2CBCA4, #001D19, #000000)",
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
        {/* Background Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute -bottom-32 -left-32 w-64 md:w-96 h-64 md:h-96 border-2 border-white/20 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-48 md:w-72 h-48 md:h-72 border border-white/10 rounded-full"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-16 md:h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-32 left-1/2 transform -translate-x-8 w-10 md:w-16 h-10 md:h-16 border border-white/15 rounded-full"></div>
          <div className="absolute top-20 left-1/2 transform translate-x-12 w-8 md:w-12 h-8 md:h-12 bg-white/5 rounded-full"></div>

          <div className="absolute right-0 top-1/2 transform translate-x-20 md:translate-x-32 -translate-y-1/2">
            <div className="w-0 h-0 border-l-[200px] md:border-l-[400px] border-l-white/8 border-t-[125px] md:border-t-[250px] border-t-transparent border-b-[125px] md:border-b-[250px] border-b-transparent"></div>
          </div>

          <div className="absolute right-10 md:right-20 top-1/3 transform translate-x-8 md:translate-x-16 -translate-y-1/2">
            <div className="w-0 h-0 border-l-[75px] md:border-l-[150px] border-l-white/5 border-t-[50px] md:border-t-[100px] border-t-transparent border-b-[50px] md:border-b-[100px] border-b-transparent"></div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 py-6 md:py-0">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">CareBot</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              The most popular peer to peer lending at SEA
            </p>
            <button className="bg-[#2CBCA4] backdrop-blur-sm text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white/30 transition-colors border border-white/30">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Right Side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center px-8 py-8 md:py-0">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Hello Again!</h2>
            <p className="text-gray-600">Welcome Back</p>
          </div>
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50"
                />
              </div>
            </div>
            {/* Password Field */}
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50"
                />
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-orange-500 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Login
            </button>
            {/* Register Button */}
            <Link to="/signup">
              <button className="w-full bg-white border-2 cursor-pointer border-gray-300 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
