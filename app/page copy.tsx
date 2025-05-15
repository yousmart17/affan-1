'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const months = [
  '1. Ay', '2. Ay', '3. Ay', '4. Ay', '5. Ay', '6. Ay',
  '7. Ay', '8. Ay', '9. Ay', '10. Ay', '11. Ay', '12. Ay'
];

const examplePhotos = [
  "/images/1.jpeg",
  "/images/2.jpg",  // 2. Ay
  "/images/3.jpg",  // 3. Ay
  "/images/4.jpg",  // 4. Ay
  "/images/5.jpg",  // 5. Ay
  "/images/6.jpg",  // 6. Ay
  "/images/7.jpg",  // 7. Ay
  "/images/8.jpg",  // 8. Ay
  "/images/9.jpg",  // 9. Ay
  "/images/10.jpg",  // 10. Ay
  "https://drive.google.com/uc?export=view&id=11A2B3C4D5E6F7G8H9I10", // 11. Ay
  "https://drive.google.com/uc?export=view&id=12B3C4D5E6F7G8H9I10J1"  // 12. Ay
];

export default function BirthdayInvite() {
  const [angle, setAngle] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: ""
  });

  const handleRotate = () => {
    const nextIndex = (selectedIndex + 1) % 12;
    setSelectedIndex(nextIndex);
    setAngle(angle + 30);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Geliyorum İnşallah!");
    // Burada formu bir backend servisine veya başka bir yere gönderebilirsiniz.
  };

  return (
    <div className="relative min-h-screen  flex flex-col items-center justify-center p-4 text-center">
  <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat opacity-100" />


      <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
        Faris Affan'ın
        <p>1. Yaş Gününü</p>
        <p>Birlikte Kutlayalım!</p>
      </h1>
      <div className="relative w-72 h-72 md:w-96 md:h-96 mb-6">
        <motion.div
          animate={{ rotate: angle }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute w-full h-full rounded-full border-4 border-orange-500 flex items-center justify-center"
          onClick={handleRotate}
        >
          <img
            src={examplePhotos[selectedIndex]}
            alt={`Ay ${selectedIndex + 1}`}
            className="rounded-full w-60 h-60 object-cover shadow-lg"
          />
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white/80 text-orange-800 font-semibold text-base px-3 py-1 rounded-full shadow">
              {months[selectedIndex]}
            </div>
        </motion.div>
        
      </div>

      <div className="bg-white/80 p-4 rounded-2xl shadow-md max-w-md">
        <p className="text-lg text-gray-800">
          📍 Avanos, Kapadokya <br />
          🗓️ 10 Haziran | 14:00 <br />
    
        </p>
        <div className="flex justify-center mt-2 gap-4">
          <img src="/peri-bacasi.svg" alt="Peri Bacası" className="w-20 h-20" />
        </div>

        {/* Google Maps Butonu */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.google.com/maps?q=Kapadokya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
          >
            Adresi Google Maps'te Gör
          </a>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-600">Çarkı çevirmek için fotoğrafın üstüne tıkla 🔄</p>
      
      {/* Form Bölümü */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Geliyorsan formu doldur:</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">İsim</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Soyisim</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telefon Numarası</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
              Geliyorum
            </button>
          </div>
        </form>
      </div>
      
      <p className="mt-6 text-sm text-gray-600">Bu bir YUSMAR ailesi projesi ❤️</p>
    </div>
  );
}