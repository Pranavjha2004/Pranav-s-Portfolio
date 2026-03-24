import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import "./CommandPalette.css";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const inputRef = useRef(null);

  // --- RECRUITER MODE LOGIC ---
  const toggleRecruiterMode = () => {
    const newState = !isRecruiterMode;
    setIsRecruiterMode(newState);
    document.documentElement.setAttribute("data-recruiter", newState.toString());
    
    // Auto-scroll to About to show the "Recruiter" view immediately
    if (newState) {
      scroller.scrollTo("about", {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: -100,
      });
    }
  };

  // --- COMMAND LIST ---
  const commands = [
    { 
      id: "recruiter", 
      label: isRecruiterMode ? "Disable: Recruiter Mode" : "Toggle: Recruiter Mode", 
      icon: "🕵️‍♂️", 
      action: toggleRecruiterMode, 
      highlight: true,
      desc: "Optimizes UI for fast scanning"
    },
    { id: "hero", label: "Goto: Home", icon: "🏠", section: "hero" },
    { id: "about", label: "Goto: About", icon: "👤", section: "about" },
    { id: "projects", label: "Goto: Projects", icon: "💻", section: "projects" },
    { id: "exp", label: "Goto: Experience", icon: "💼", section: "experience" },
    { id: "contact", label: "Goto: Contact", icon: "📧", section: "contact" },
    { 
      id: "resume", 
      label: "Download Resume", 
      icon: "📄", 
      action: () => window.open("YOUR_RESUME_LINK", "_blank") 
    },
  ];

  // --- KEYBOARD SHORTCUTS ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // --- FOCUS MANAGEMENT ---
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const executeCommand = (cmd) => {
    if (cmd.section) {
      scroller.scrollTo(cmd.section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100,
      });
    } else if (cmd.action) {
      cmd.action();
    }
    setIsOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="command-palette-overlay">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="command-palette-window"
          >
            <div className="command-input-wrapper">
              <span className="terminal-prompt">
                {isRecruiterMode ? "👁️" : "🚀"}
              </span>
              <input
                ref={inputRef}
                type="text"
                placeholder={isRecruiterMode ? "Recruiter Mode Active..." : "Type a command or search..."}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <kbd className="esc-hint">ESC</kbd>
            </div>

            <div className="command-list">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => (
                  <div
                    key={cmd.id}
                    className={`command-item ${cmd.highlight ? 'cmd-highlight' : ''}`}
                    onClick={() => executeCommand(cmd)}
                  >
                    <span className="cmd-icon">{cmd.icon}</span>
                    <div className="flex flex-col flex-1">
                      <span className="cmd-label">{cmd.label}</span>
                      {cmd.desc && <span className="cmd-desc">{cmd.desc}</span>}
                    </div>
                    <span className="cmd-shortcut">Enter</span>
                  </div>
                ))
              ) : (
                <div className="no-results">No transmission found...</div>
              )}
            </div>
            
            <div className="command-footer">
              <span>TIP: Use <span className="highlight">↑↓</span> to navigate and <span className="highlight">Enter</span> to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;