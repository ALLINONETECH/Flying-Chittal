import React from "react";

export default function Traks() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-primary/90 to-primary rounded-br-[80px]">
        <div className="container mx-auto px-6 py-14 text-white">
          <h1 className="text-3xl md:text-5xl font-heebo font-bold">
            Traks – Intelligent Field Force Management Suite
          </h1>
          <p className="mt-4 text-base md:text-xl max-w-5xl">
            An AI & Data Analytics Powered Solution by Flying Chital Private
            Limited. Traks is a comprehensive Field Force Management Software
            Suite designed to digitise, monitor, and optimise field sales,
            service, and security operations with real-time visibility,
            workforce accountability, and measurable performance.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10 grid gap-5">
        <div className="rounded-2xl border border-divider p-6 bg-gray-50">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Real-Time Attendance with Location Intelligence
          </h2>
          <ul className="mt-3 list-disc pl-6 text-body text-base md:text-lg space-y-1">
            <li>Real-time attendance with GPS validation</li>
            <li>Live headcount at every operational site</li>
            <li>Accurate working hours tracking with automated computation</li>
            <li>Flexible, policy-driven custom leave management</li>
            <li>Instant absentee notifications to supervisors</li>
            <li>
              Geo-fence enabled check-in and check-out with Latitude, Longitude,
              Date & Time stamps
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-divider p-6 bg-gray-50">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Real-Time Location Tracking & Geo-Spatial Control
          </h2>
          <ul className="mt-3 list-disc pl-6 text-body text-base md:text-lg space-y-1">
            <li>Continuous real-time location monitoring of all personnel</li>
            <li>Up to 95% accurate distance calculation across field routes</li>
            <li>
              Geo-fence creation with automated compliance and safety alerts
            </li>
            <li>Live headcount within each geo-fenced operational zone</li>
            <li>Entry and exit alerts with instant notifications</li>
            <li>
              Enhanced operational visibility for supervisors and command
              centres
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-divider p-6 bg-gray-50">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            System-Managed Efficiency & Alertness Monitoring
          </h2>
          <ul className="mt-3 list-disc pl-6 text-body text-base md:text-lg space-y-1">
            <li>Ensures all scheduled positions are visited as planned</li>
            <li>Patrol monitoring to track skipped or delayed checkpoints</li>
            <li>
              Static guard monitoring to confirm alertness at assigned posts
            </li>
            <li>Night shift oversight to reduce fatigue-related lapses</li>
            <li>Exception alerts for inactivity or missed patrols</li>
            <li>
              Promotes discipline, accountability, and performance benchmarking
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-divider p-6 bg-gray-50">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Financial Control & Workforce Cost Management
          </h2>
          <ul className="mt-3 list-disc pl-6 text-body text-base md:text-lg space-y-1">
            <li>
              Track and maintain detailed records of employee business expenses
            </li>
            <li>
              Digital submission, approval workflows, and expense analytics
            </li>
            <li>
              Automated salary and wage calculation based on actual attendance
              and working hours
            </li>
            <li>
              System-driven computation of statutory contributions including
              ESIC, EPFO, and other compliances
            </li>
            <li>
              Accurate payroll data generation to reduce errors and prevent
              revenue leakage
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-6">
          <h3 className="text-lg md:text-2xl font-bold text-[#30343F]">
            Smarter Supervision. Stronger Compliance. Measurable ROI.
          </h3>
          <p className="mt-2 text-base md:text-lg text-body">
            With integrated AI analytics, automated compliance, payroll
            accuracy, and real-time dashboards, Traks helps organisations reduce
            operational costs, prevent financial leakages, enhance workforce
            productivity, and achieve sustainable, data-driven growth through a
            secure and scalable platform.
          </p>
        </div>
      </section>
    </div>
  );
}
