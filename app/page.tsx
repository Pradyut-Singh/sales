import Link from "next/link";
import { BarChart3, TrendingUp, DollarSign, Sparkles, ArrowRight, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 animate-float"></div>
      <div className="hidden md:block absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="hidden md:block absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-4xl blur-xl opacity-30 animate-glow"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 p-6 sm:p-8 rounded-4xl shadow-2xl">
                <BarChart3 className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
            </div>
          </div>
          
          <div className="mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text mb-6 sm:mb-8">
              Sales Dashboard
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-primary-500" />
              <span className="text-primary-600 font-semibold text-base sm:text-lg">Modern Analytics Platform</span>
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-primary-500" />
            </div>
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Transform your sales data into actionable insights with our comprehensive analytics platform. 
            Built with cutting-edge technologies for the modern business.
          </p>
          
          <Link 
            href="/dashboard"
            className="group inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-3xl font-bold text-lg sm:text-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-2xl hover:shadow-glow-lg transform hover:scale-105 active:scale-95"
            aria-label="Navigate to the sales dashboard"
          >
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
            Explore Dashboard
            <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-20 sm:mb-24">
          {[
            {
              icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10" />,
              title: "Advanced Analytics",
              description: "Deep dive into sales performance with multi-dimensional analysis, trend identification, and predictive insights.",
              gradient: "from-accent-500 to-accent-600",
              bgGradient: "from-accent-50 to-accent-100"
            },
            {
              icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10" />,
              title: "Interactive Visualizations",
              description: "Dynamic charts that respond to your needs. Switch between multiple chart types with real-time filtering capabilities.",
              gradient: "from-secondary-500 to-secondary-600",
              bgGradient: "from-secondary-50 to-secondary-100"
            },
            {
              icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
              title: "Real-time Intelligence",
              description: "Get instant insights with live data processing, automated trend detection, and intelligent recommendations.",
              gradient: "from-primary-500 to-primary-600",
              bgGradient: "from-primary-50 to-primary-100"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 border border-white/20 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-r ${feature.bgGradient} p-4 sm:p-5 rounded-3xl w-fit mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10 sm:mb-12">
            Powered by Modern Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: "Next.js 15", color: "from-gray-800 to-gray-900", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { name: "TypeScript", color: "from-primary-500 to-primary-600", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { name: "Tailwind CSS", color: "from-cyan-500 to-cyan-600", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { name: "Recharts", color: "from-accent-500 to-accent-600", icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { name: "Lucide Icons", color: "from-secondary-500 to-secondary-600", icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> }
            ].map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${tech.color} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105 cursor-default flex items-center gap-2 sm:gap-3 text-sm sm:text-base`}
              >
                {tech.icon}
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
