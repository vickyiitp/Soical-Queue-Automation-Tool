"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Image as ImageIcon, 
  Smile, 
  Calendar as CalendarIcon,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ComposerModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["twitter"]);
  const [previewPlatform, setPreviewPlatform] = useState("twitter");

  const togglePlatform = (p: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="glass w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex h-[600px]"
      >
        {/* Left: Editor */}
        <div className="flex-1 p-8 flex flex-col border-r border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">New Post</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            {[
              { id: "twitter", icon: TwitterIcon, color: "text-twitter" },
              { id: "linkedin", icon: LinkedinIcon, color: "text-linkedin" },
              { id: "instagram", icon: InstagramIcon, color: "text-pink-500" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => togglePlatform(p.id)}
                className={cn(
                  "p-3 rounded-2xl border transition-all flex items-center gap-2",
                  selectedPlatforms.includes(p.id)
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-transparent border-white/5 text-slate-500 grayscale opacity-50"
                )}
              >
                <p.icon className={cn("w-5 h-5", selectedPlatforms.includes(p.id) ? p.color : "")} />
                <span className="text-xs font-semibold uppercase">{p.id}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full h-full bg-white/5 rounded-2xl p-4 resize-none focus:outline-none focus:ring-1 focus:ring-indigo-500/50 border border-white/5 text-lg placeholder:text-slate-600"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                <ImageIcon className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                <Smile className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                <CalendarIcon className="w-5 h-5" />
              </button>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95">
              <span>Schedule</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Live Preview */}
        <div className="w-[40%] bg-slate-900/50 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Live Preview</span>
            <div className="flex bg-white/5 p-1 rounded-lg">
              {["twitter", "linkedin", "instagram"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPreviewPlatform(p)}
                  className={cn(
                    "px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all",
                    previewPlatform === p ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-400"
                  )}
                >
                  {p.slice(0, 2)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            {/* Mock Phone/UI Frame */}
            <div className="w-full aspect-[4/5] bg-white text-slate-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden transition-all duration-500">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-bold text-sm">Social Creator</p>
                    <p className="text-xs text-slate-500">@creator • Just now</p>
                  </div>
               </div>
               <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {content || "Your post content will appear here..."}
               </div>
               <div className="absolute top-4 right-4">
                  {previewPlatform === "twitter" && <TwitterIcon className="w-5 h-5 text-twitter" />}
                  {previewPlatform === "linkedin" && <LinkedinIcon className="w-5 h-5 text-linkedin" />}
                  {previewPlatform === "instagram" && <InstagramIcon className="w-5 h-5 text-pink-500" />}
               </div>
               
               {/* Platform Specific Mock UI */}
               {previewPlatform === "twitter" && (
                 <div className="absolute bottom-6 left-6 right-6 flex justify-between text-slate-400 border-t border-slate-100 pt-4">
                    <div className="flex gap-4">
                       <span className="text-[10px]">0 RT</span>
                       <span className="text-[10px]">0 Likes</span>
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
