'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';



export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 md:py-32 min-h-[60vh] overflow-hidden">
        <Image
          src="/your-background.jpg"
          alt="Background"
          fill
          className="object-cover absolute inset-0 z-0 blur-sm brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div
          className="relative z-20 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-md mb-4 tracking-tight">
            Glammed by Omaa
          </h1>
          <p className="text-white text-lg md:text-xl max-w-xl mx-auto drop-shadow">
            Enhancing beauty, one face at a time ✨ Let your glow be your signature.
          </p>
        </motion.div>
      </section>

      {/* About Me */}
      <section className="py-16 px-4 sm:px-8 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/nomzi.jpg"
            alt="Makeup Artist"
            width={400}
            height={500}
            className="rounded-xl shadow-xl object-cover w-full max-w-sm hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I'm Prisca, a passionate and certified makeup artist with a heart for beauty that radiates from the inside out. Whether it's a wedding, photoshoot, birthday, or a day where you just want to feel your best, I've got you covered with tailored looks that enhance and empower 💄
          </p>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section className="px-4 sm:px-8 md:px-20 py-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <Image
              key={i}
              src={`/Portfolio/Portfolio%20(${i + 1}).jpg`}
              alt={`Portfolio ${i + 1}`}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-[220px] shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
            />
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
<section className="py-16 bg-gray-100 text-center px-6">
  <motion.h2
    className="text-3xl font-bold mb-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Book or Chat With Me
  </motion.h2>

  <motion.p
    className="text-gray-600 text-lg mb-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Ready for glam? Reach out on any platform below:
  </motion.p>

  <motion.div
    className="flex flex-wrap justify-center gap-8 text-3xl text-pink-600"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <Link
      href="https://www.instagram.com/glammedbyomaa?utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <FaInstagram title="Instagram" />
    </Link>

    <Link
      href="https://www.tiktok.com/@glammedby.omaa?_t=ZM-8xtMnv5q9U0&_r=1"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <FaTiktok title="TikTok" />
    </Link>

    <Link
      href="https://wa.me/message/6QWRH7VJOED5E1"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <FaWhatsapp title="WhatsApp" />
    </Link>
  </motion.div>
</section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center text-sm tracking-wider">
        &copy; {new Date().getFullYear()} Glammed by PRISCA. All rights reserved.
      </footer>
    </main>
  );
}
