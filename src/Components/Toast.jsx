import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Toast.css";

const Toast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the toast this session
    const hasSeenToast = sessionStorage.getItem("hasSeenTerminalToast");

    if (!hasSeenToast) {
      // Small delay before showing the toast to let the Hero load
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("hasSeenTerminalToast", "true");
      }, 2000);

      // Auto-hide after 6 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="terminal-toast"
        >
          <div className="toast-content">
            <span className="toast-icon">⌨️</span>
            <p>
              Press <kbd className="toast-kbd">Ctrl</kbd> + <kbd className="toast-kbd">K</kbd> to explore the terminal
            </p>
            <button className="toast-close" onClick={() => setIsVisible(false)}>
              &times;
            </button>
          </div>
          {/* Animated Progress Bar (Timer) */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="toast-progress"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;