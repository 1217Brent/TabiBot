import React, { JSX } from "react";

function Hero(): JSX.Element {
  return (
    <section className="fixed bottom-0 top-0 right-0 left-0 bg-white px-4 pt-24 text-center sm:pt-32 lg:pt-40">
      <div className="mx-auto max-w-screen-lg space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Welcome To TabiBot!
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
          TabiBot helps you find the best places to visit in Japan based on your interests – from hidden mountain trails to Tokyo’s trendiest shopping spots.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/start"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500"
          >
            Start Exploring
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
