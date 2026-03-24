import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.css";

const systemLogs = [
  { label: "BIOMETRIC_SCAN", status: "OK" },
  { label: "TERMINAL_CMD_PALETTE", status: "READY" },
  { label: "DYNAMIC_CURSOR_ENGINED", status: "ACTIVE" },
  { label: "GLASSMORPHIC_UI_LAYER", status: "STABLE" },
  { label: "PORTFOLIO_OS_V4.0", status: "BOOTING" },
];

const SplashScreen = ({ finishLoading }) => {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    if (logIndex < systemLogs.length) {
      const timeout = setTimeout(() => setLogIndex(logIndex + 1), 350);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => finishLoading(), 1200);
    }
  }, [logIndex, finishLoading]);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ 
        scale: 1.8,
        opacity: 0,
        filter: "blur(60px)",
        transition: { duration: 0.9, ease: [0.7, 0, 0.3, 1] } 
      }}
    >
      {/* INTENSE BACKGROUND COMMAND RAIN */}
      <div className="command-rain">
        {[...Array(25)].map((_, i) => {
          // Tiered speeds for intensity: fast, medium, slow
          const speedTier = i % 3 === 0 ? 'fast' : i % 3 === 1 ? 'medium' : 'slow';
          return (
            <div 
              key={i} 
              className={`rain-column ${speedTier}`} 
              style={{ 
                left: `${i * 4}%`, 
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.2 + 0.1
              }}
            >
              {["0x3F", "INT_80", "SYSCALL", "LOAD", "DRV_INIT", "EXEC", "00101", "QUERY", "ROOT", "FETCH"].map((txt, j) => (
                <span key={j} className={Math.random() > 0.8 ? 'flicker-text' : ''}>
                  {txt}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <div className="splash-content">
        <div className="system-header">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="loader-ring"
          />
          <h2 className="loading-title">CRITICAL_BOOT_SEQUENCE</h2>
        </div>

        {/* Features Checklist */}
        <div className="feature-checklist">
          {systemLogs.slice(0, logIndex).map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="check-item"
            >
              <span className="check-label">{log.label}</span>
              <span className="check-status">[{log.status}]</span>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="boot-progress-container">
          <motion.div 
            className="boot-progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="vignette"></div>
    </motion.div>
  );
};

export default SplashScreen;