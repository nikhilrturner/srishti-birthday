import React, { useState } from "react";
import './App.css'
import CountdownTimer from "./components/CountdownTimer";
import PhotoSlider from "./components/PhotoSlider";
import JSConfetti from "js-confetti"; // Import js-confetti

const App = () => {
  const birthday = "2025-02-10T18:30:00Z" // 2025-02-11 IST
  const [wishCount, setWishCount] = useState(0);
  const jsConfetti = new JSConfetti(); // Create an instance of JSConfetti

  const incrementWishCount = () => {
    setWishCount(wishCount + 1);
    jsConfetti.addConfetti(); // Trigger confetti effect
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 p-8 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 text-center">
        Happy Birthday Srishti ❤️
      </h1>

      {/* Countdown Timer */}
      <CountdownTimer targetDate={birthday} />

      {/* Sliding Photos */}
      <PhotoSlider />

      {/* Wish a Happy Birthday Button */}
      <button
        onClick={incrementWishCount}
        className="mt-6 px-6 py-3 bg-white text-purple-600 font-bold text-lg rounded-full shadow-lg hover:bg-purple-200 transition duration-200 sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
      >
        Wish a Happy Birthday
      </button>

      {/* Total Birthday Wishes */}
      <div className="mt-6 text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
        <p>
          Total Birthday Wishes:{" "}
          <span className="text-xl sm:text-lg md:text-xl lg:text-2xl text-yellow-400">
            {wishCount}
          </span>
        </p>
      </div>
    </div>
  );
};

export default App;
