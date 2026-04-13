/* eslint-disable no-unused-vars */
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-slate-900">PRIVACY POLICY</h1>
      <p className="text-slate-600 mb-6 text-sm">
        <strong>Last Updated:</strong> April 2026
      </p>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 mb-6">
          Flying Chittal ("App," "we," "us," or "our") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our mobile
          application and related services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            1. INFORMATION WE COLLECT
          </h2>

          <h3 className="text-lg font-semibold mb-3 text-slate-800">
            1.1 Information You Provide
          </h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Account credentials (name, phone, email, password)</li>
            <li>Profile details (company, role, address)</li>
            <li>
              Document uploads (driver license, RC book, fitness certificate,
              insurance)
            </li>
            <li>Photo captures (vehicle, driver, load)</li>
            <li>Trip details (source, destination, cargo, weight, material)</li>
            <li>QR code scans and manual data entries</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 text-slate-800">
            1.2 Location Data
          </h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Real-time GPS location during trips (with your consent)</li>
            <li>
              Used for route tracking, ETA calculation, and trip monitoring
            </li>
            <li>Collected via Geolocator plugin</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 text-slate-800">
            1.3 Device Information
          </h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Device model, OS version, unique device ID</li>
            <li>App version, crash logs, diagnostic data</li>
            <li>Collected for troubleshooting and analytics</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 text-slate-800">
            1.4 Usage Analytics
          </h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>App interactions, screen visits, feature usage</li>
            <li>Trip creation, document upload, scan events</li>
            <li>
              Collected via Sentry and Firebase for crash reporting and
              diagnostics
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-3 text-slate-800">
            1.5 Notifications
          </h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Push notification delivery and engagement data</li>
            <li>Via Firebase Cloud Messaging</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            2. HOW WE USE YOUR INFORMATION
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Process trip creation, assignment, and execution</li>
            <li>Validate documents and verify user authenticity</li>
            <li>Provide real-time tracking and ETA predictions</li>
            <li>Improve app performance and troubleshoot crashes</li>
            <li>Send operational notifications and alerts</li>
            <li>Generate analytics reports for operations teams</li>
            <li>Fraud detection and risk assessment</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            3. DATA SHARING
          </h2>
          <p className="text-slate-700 mb-4">
            <strong>We do NOT sell your personal data.</strong> We share
            information only with:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Transporter/logistics partners (for trip execution)</li>
            <li>Backend servers (for trip and operational data)</li>
            <li>
              Third-party services:
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>
                  <strong>Sentry:</strong> Error tracking and diagnostics
                </li>
                <li>
                  <strong>Firebase:</strong> Cloud messaging and analytics
                </li>
                <li>
                  <strong>Google:</strong> Location services, analytics
                </li>
              </ul>
            </li>
            <li>Legal authorities (if required by law)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            4. DATA SECURITY
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>HTTPS encryption for all data in transit</li>
            <li>Secure local storage on device</li>
            <li>Access controls and user authentication</li>
            <li>Regular security audits and updates</li>
          </ul>
          <p className="text-slate-700 mt-4 italic">
            However, no method of transmission is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            5. DATA RETENTION
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>
              <strong>Trip data:</strong> retained for operational and audit
              purposes (minimum 2 years)
            </li>
            <li>
              <strong>Documents:</strong> retained per India cargo/logistics
              regulations
            </li>
            <li>
              <strong>Crash logs:</strong> retained for 3-6 months
            </li>
            <li>
              <strong>User request:</strong> data can be deleted upon written
              request (subject to legal holds)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            6. YOUR RIGHTS
          </h2>
          <p className="text-slate-700 mb-3">You have the right to:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>
              Request deletion (subject to legal and operational requirements)
            </li>
            <li>Opt-out of non-critical notifications</li>
            <li>Withdraw location permission at any time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            7. LOCATION PRIVACY
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Location is collected only during active trip execution</li>
            <li>You can disable location at any time in app settings</li>
            <li>Disabling may affect trip functionality</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            8. CHILDREN'S PRIVACY
          </h2>
          <p className="text-slate-700">
            This App is not intended for users under 18 years. We do not
            knowingly collect data from children. If we discover such data, we
            will delete it immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            9. THIRD-PARTY SERVICES
          </h2>
          <p className="text-slate-700 mb-3">This App uses:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Google Play Services:</strong> authentication, location,
              analytics
            </li>
            <li>
              <strong>Firebase:</strong> push notifications, crash reporting
            </li>
            <li>
              <strong>Sentry:</strong> error tracking
            </li>
          </ul>
          <p className="text-slate-700">
            Please review their privacy policies independently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            10. CHANGES TO THIS POLICY
          </h2>
          <p className="text-slate-700">
            We may update this Privacy Policy periodically. Changes are
            effective upon posting in the App. Your continued use constitutes
            acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            11. CONTACT US
          </h2>
          <p className="text-slate-700 mb-4">
            For privacy questions, requests, or complaints:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
            <p className="text-slate-700 font-semibold">
              Flying Chittal Support
            </p>
            <p className="text-slate-700">
              Email:{" "}
              <span className="text-indigo-600">info@flyingchital.com</span>
            </p>
            <p className="text-slate-700">
              Address:{" "}
              <span className="text-indigo-600">Flying Chital Private Limited, Odisha, India</span>
            </p>
            <p className="text-slate-700">
              Phone:{" "}
              <span className="text-indigo-600">+91 78945 67778</span>
            </p>
          </div>

          <p className="text-slate-700 mb-3 font-semibold">
            For data deletion or complaint escalation under India's Digital
            Personal Data Protection Act (DPDP), please contact:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="text-slate-700 font-semibold">
              Data Protection Officer
            </p>
            <p className="text-slate-700">
              Email: <span className="text-indigo-600">privacy@flyingchital.com</span>
            </p>
          </div>
        </section>

        <section className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-3 text-amber-900">
            SHORT VERSION FOR PLAY STORE (500 words max)
          </h2>
          <p className="text-amber-900 text-sm mb-3">
            We collect location data, photos, documents, and trip information to
            process shipments and improve operations. Data is encrypted and
            secure. We do not sell your data. You can request access or deletion
            at any time. Location can be disabled in settings.
          </p>
          <p className="text-amber-900 text-sm">
            For full policy, contact:{" "}
            <span className="font-semibold">info@flyingchital.com</span>
          </p>
        </section>
      </div>
    </div>
  );
}
