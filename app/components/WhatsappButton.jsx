'use client';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsappButton({ isVisible = false }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <motion.a
            href="https://wa.me/+5492944552114"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-4 bg-white hover:bg-green-500 hover:text-white border border-gray-300 text-black rounded-full cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="h-8 w-8 transition-transform duration-300 ease-out" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
