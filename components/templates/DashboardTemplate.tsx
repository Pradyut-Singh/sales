import React from 'react';

interface DashboardTemplateProps {
  header: React.ReactNode;
  stats: React.ReactNode;
  controls: React.ReactNode;
  chart: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function DashboardTemplate({
  header,
  stats,
  controls,
  chart,
  sidebar
}: DashboardTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          {header}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Section */}
            <div className="animate-fade-in-up">
              {stats}
            </div>

            {/* Controls Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {controls}
            </div>

            {/* Chart Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {chart}
            </div>
          </div>

          {/* Sidebar */}
          {sidebar && (
            <div className="lg:col-span-1 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              {sidebar}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}