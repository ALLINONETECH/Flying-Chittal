import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Enterprise Application Development",
      description:
        "Custom web and mobile applications built with modern stacks (React, Node.js, Java) optimized for scale and performance.",
      link: "/flyingchital",
    },
    {
      title: "Field Force Management & Workforce Optimization",
      description:
        "Deploy intelligent field operations platforms with real-time tracking, attendance, and performance monitoring via Traks.",
      link: "/traks",
    },
    {
      title: "Vehicle Tracking & Mobility Intelligence",
      description:
        "Real-time fleet tracking, vehicle management, and mobility operations control with Mobilyt platform.",
      link: "/mobilyt",
    },
    {
      title: "AI & Data Analytics",
      description:
        "Transform raw operational data into actionable business intelligence with advanced analytics and predictive modeling.",
      link: "/blog",
    },
    {
      title: "Managed IT Services",
      description:
        "End-to-end managed IT support, cloud infrastructure, and system reliability for enterprise operations.",
      link: "/contact",
    },
    {
      title: "Digital Transformation Consulting",
      description:
        "Strategic guidance to reimagine your business processes and operations through technology and automation.",
      link: "/contact",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000048] via-indigo-900 to-purple-900">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Enterprise Technology Services
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Comprehensive software, automation, and consulting services to
              drive your digital transformation and operational excellence.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Service Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Explore Our Product Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/flyingchital"
              className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700">
                Flying Chital
              </h3>
              <p className="text-blue-800 mb-4">
                Intelligent multimodal logistics management platform with
                real-time visibility and AI-driven optimization.
              </p>
              <span className="text-blue-700 font-semibold">Explore →</span>
            </Link>
            <Link
              to="/traks"
              className="group text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-colors"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-3 group-hover:text-purple-700">
                Traks
              </h3>
              <p className="text-purple-800 mb-4">
                AI-powered field force management for sales, service, and
                security operations with real-time tracking.
              </p>
              <span className="text-purple-700 font-semibold">Explore →</span>
            </Link>
            <Link
              to="/mobilyt"
              className="group text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:from-orange-100 hover:to-orange-200 transition-colors"
            >
              <h3 className="text-2xl font-bold text-orange-900 mb-3 group-hover:text-orange-700">
                Mobilyt
              </h3>
              <p className="text-orange-800 mb-4">
                Smart mobility platform delivering vehicle tracking, fleet
                management, and operational insights.
              </p>
              <span className="text-orange-700 font-semibold">Explore →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can streamline your
            workflows, reduce costs, and unlock new growth opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-indigo-600 bg-white hover:bg-gray-100 rounded-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
