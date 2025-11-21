import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const LinkItem = ({ href, icon: Icon, label, sublabel }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between p-8 mb-6 border border-ayanokoji-gray bg-ayanokoji-dark/90 backdrop-blur-md overflow-hidden hover:border-ayanokoji-crimson hover:shadow-[0_0_25px_rgba(220,20,60,0.6)] transition-all duration-300 rounded-sm"
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover Fill Effect */}
      <div className="absolute inset-0 bg-ayanokoji-crimson/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />

      <div className="flex items-center gap-8 z-10">
        <div className="p-4 bg-ayanokoji-black border border-ayanokoji-gray group-hover:border-ayanokoji-red group-hover:bg-ayanokoji-red/10 transition-colors">
          <Icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-2xl font-bold tracking-wider text-gray-100 group-hover:text-white font-mono uppercase group-hover:tracking-widest transition-all duration-300">
            {label}
          </span>
          {sublabel && (
            <span className="text-base text-gray-500 group-hover:text-gray-300 font-mono uppercase tracking-widest mt-1">
              {sublabel}
            </span>
          )}
        </div>
      </div>

      <div className="z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-8 h-8 text-ayanokoji-crimson group-hover:text-white" />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-ayanokoji-gray group-hover:bg-ayanokoji-red transition-colors group-hover:w-4 group-hover:h-4" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-ayanokoji-gray group-hover:bg-ayanokoji-red transition-colors group-hover:w-4 group-hover:h-4" />
    </motion.a>
  );
};

export default LinkItem;
