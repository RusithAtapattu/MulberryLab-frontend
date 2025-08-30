import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Sun, Shield, Bug } from "lucide-react";
import { ArrowUp } from "lucide-react";

const Info = () => {
  const [scrolyLevel, setScrolyLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolyLevel(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center mx-auto pt-24">
      <button
        onClick={scrollToTop}
        className={`fixed z-10 bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg transition-transform duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <ArrowUp size={24} />
      </button>
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bold text-6xl pb-4"> Mulberry Insights</h2>
        <h3 className="text-3xl pb-8 text-green-700">
          Health Benefits, Nutritional Values and Farmer’s Guide
        </h3>
      </motion.div>

      {/* Health Benefits Section */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-center pb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Nutrient Benefits */}
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center justify-center">
          <div>
            <h2 className="text-3xl text-green-600 font-light flex items-center">
              <Leaf className="mr-2 text-green-600" /> Rich in Nutrients
            </h2>
            <hr className="w-20 border-green-600 my-4" />
            <ul className="text-gray-700 text-lg leading-relaxed space-y-2">
              <li>🍊 High in Vitamin C and Iron 💪</li>
              <li>🥬 Good source of Vitamin K and E ✨</li>
              <li>🧑‍🔬 Contains essential minerals 💎</li>
            </ul>
          </div>
        </div>

        {/* Health Properties */}
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center justify-center">
          <div>
            <h2 className="text-3xl text-green-600 font-light flex items-center">
              <Shield className="mr-2 text-green-600" /> Health Properties
            </h2>
            <hr className="w-20 border-green-600 my-4" />
            <ul className="text-gray-700 text-lg leading-relaxed space-y-2">
              <li>🛡️ Antioxidant properties 🍇</li>
              <li>🦠 Supports immune system 💪</li>
              <li>❤️ Promotes heart health 🍃</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Video Section with Dynamic Sizing */}
      <motion.div
        style={{
          width: `${Math.max((1000 - scrolyLevel * 1.5) / 10, 70)}vw`,
          maxWidth: "100%",
          transition: "width 0.2s ease, height 0.2s ease, ease",
          borderRadius: `${Math.min((scrolyLevel * 0.1), 16)}px`,
          overflow: "hidden",
        }}
      >
        <video src={`videos/heath_benifits.mp4`} autoPlay muted loop controls />
      </motion.div>

      {/* Farmer’s Guide Section */}
      <motion.div
        className="mt-20 w-full bg-green-100 rounded-lg shadow-md p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-green-900 text-center">
          Farmer’s Guide to Growing Healthy Mulberries 🌿
        </h2>
        <p className="text-center text-gray-700 mt-2 text-lg">
          Expert tips on cultivation, care, and pest control to maximize yield.
        </p>

        {/* Growing Conditions */}
        <div className="mt-10 flex flex-col md:flex-row items-center pl-20">
          <div className="md:w-full">
            <h3 className="text-3xl text-green-700 font-semibold flex items-center">
              <Sun className="mr-2" /> Growing Conditions 🌿
            </h3>
            <hr className="w-20 border-green-600 my-4" />
            <ul className="text-gray-700 text-lg space-y-2">
              <li>
                📌 <strong>Soil:</strong> Well-draining, pH 6-7 for best growth.
              </li>
              <li>
                💧 <strong>Watering:</strong> Regular, but avoid overwatering.
              </li>
              <li>
                🌞 <strong>Climate:</strong> Requires warm temperatures for
                optimal yield.
              </li>
              <li>
                🌱 <strong>Planting:</strong> Proper spacing and propagation
                methods.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            {/* Image */}
            <motion.div
              className="relative w-60 h-60 md:w-60 md:h-60 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden mt-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="growing.jpg"
                alt="Mulberries"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Mulberry Tree Care */}
        <div className="mt-10 flex flex-col md:flex-row items-center pl-20">
          <div className="md:w-full">
            <h3 className="text-3xl text-green-700 font-semibold flex items-center">
              <Leaf className="mr-2" /> Mulberry Tree Care Tips 🌱
            </h3>
            <hr className="w-20 border-green-600 my-4" />
            <ul className="text-gray-700 text-lg space-y-2">
              <li>
                🌿 <strong>Fertilization:</strong> Use organic or chemical
                fertilizers.
              </li>
              <li>
                ✂️ <strong>Pruning:</strong> Trim branches for better airflow
                and growth.
              </li>
              <li>
                📌 <strong>Support Structures:</strong> Stakes or trellises for
                tree stability.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            {/* Image */}
            <motion.div
              className="relative w-60 h-60 md:w-60 md:h-60 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden mt-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="mulberry-2.jpg"
                alt="Mulberry Tree Care"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Pests & Disease Management */}
        <div className="mt-10 flex flex-col md:flex-row items-center pl-20">
          <div className="md:w-full">
            <h3 className="text-3xl text-green-700 font-semibold flex items-center">
              <Bug className="mr-2" /> Common Pests & Disease Management 🦠🐛
            </h3>
            <hr className="w-20 border-green-600 my-4" />
            <ul className="text-gray-700 text-lg space-y-2">
              <li>
                🐞 <strong>Pests:</strong> Identify and prevent common mulberry
                pests.
              </li>
              <li>
                🍂 <strong>Diseases:</strong> Manage issues like leaf rust and
                powdery mildew.
              </li>
              <li>
                ⚖️ <strong>Organic vs Chemical Control:</strong> Know the pros
                and cons.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            {/* Image */}
            <motion.div
              className="relative w-60 h-60 md:w-60 md:h-60 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden mt-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="insects.png"
                alt="Pests and Disease Management"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Yield Improvement */}
        <div className="mt-10 flex flex-col md:flex-row items-center pl-20">
          <div className="md:w-full">
            <h3 className="text-3xl text-green-700 font-semibold flex items-center">
              🚜 Tips for Improving Yield
            </h3>
            <hr className="w-20 border-green-600 my-4" />
            <ul className="text-gray-700 text-lg space-y-2">
              <li>
                🐝 <strong>Pollination:</strong> Attract bees for better
                fruiting.
              </li>
              <li>
                🌦️ <strong>Seasonal Care:</strong> Adapt farming methods with
                climate changes.
              </li>
              <li>
                🧺 <strong>Harvesting:</strong> Best techniques for quality
                mulberries.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            {/* Image */}
            <motion.div
              className="relative w-60 h-60 md:w-60 md:h-60 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden mt-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="improve_yeild.png"
                alt="Yield Improvement"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
