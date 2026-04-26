const { useState, useEffect } = React;

function Hero() {
  return (
    <section className="py-32 text-center bg-neutral-950">
      <h1 className="text-8xl font-semibold text-blue-500">Hack UPC 2026</h1>
      <p className="text-lg text-neutral-400 mt-4 max-w-2xl mx-auto">Join the premier hackathon that brings together the most innovative minds for a weekend of collaboration, creativity, and technology.</p>
      <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39b?w=1600&q=80&auto=format&fit=crop" alt="Technology theme" className="mt-12 rounded-2xl shadow-lg max-w-full h-auto border border-neutral-800" />
    </section>
  );
}

function Schedule() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-6xl font-semibold text-yellow-500">Schedule</h2>
      <ul className="text-neutral-400 mt-8 grid gap-8">
        <li className="border p-6 rounded-2xl hover:border-blue-500 transition duration-300">
          <h3 className="text-white text-lg">Day 1: Introduction & Networking</h3>
          <p className="text-neutral-400">Get to know your fellow hackers <span className="block text-blue-500">8:00AM - 10:00AM</span></p>
        </li>
        <li className="border p-6 rounded-2xl hover:border-blue-500 transition duration-300">
          <h3 className="text-white text-lg">Day 2: Hack & Develop</h3>
          <p className="text-neutral-400">Build your dream project <span className="block text-blue-500">10:00AM - 8:00PM</span></p>
        </li>
        <li className="border p-6 rounded-2xl hover:border-blue-500 transition duration-300">
          <h3 className="text-white text-lg">Day 3: Showcase & Awards</h3>
          <p className="text-neutral-400">Present your work and win prizes <span className="block text-blue-500">10:00AM - 5:00PM</span></p>
        </li>
      </ul>
    </section>
  );
}

function Sponsors() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-semibold text-white text-center">Our Sponsors</h2>
        <p className="text-neutral-400 text-center mt-4">We proudly partner with industry leaders to bring you an unforgettable event.</p>
        <div className="mt-12 grid gap-12 grid-cols-2 md:grid-cols-4">
          <div className="border p-4 rounded-2xl hover:border-blue-500 transition duration-300">
            <img src="https://images.unsplash.com/photo-1552566626-52b7c8941e6b?w=800&q=80&auto=format&fit=crop" alt="Sponsor logo" className="max-w-full h-auto" />
          </div>
          <div className="border p-4 rounded-2xl hover:border-blue-500 transition duration-300">
            <img src="https://images.unsplash.com/photo-1562105110-92ee09866c39?w=800&q=80&auto=format&fit=crop" alt="Sponsor logo" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-32 text-center bg-neutral-950">
      <h2 className="text-6xl font-semibold text-white">Ready to Hack?</h2>
      <p className="text-lg text-neutral-400 mt-4">Register now to secure your spot at the premier event for innovation and technology.</p>
      <button className="mt-8 bg-blue-500 text-white py-4 px-8 rounded-full shadow-lg hover:scale-105 transition duration-300">Register Now</button>
    </section>
  );
}

function App() {
  return (
    <>
      <Hero />
      <Schedule />
      <Sponsors />
      <CallToAction />
    </>
  );
}