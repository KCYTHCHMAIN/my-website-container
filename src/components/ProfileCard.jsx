import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  Github,
  ShieldCheck,
  Database,
  Activity,
  Workflow,
  Box,
  Server,
  HardDrive,
} from "lucide-react";
import LinkItem from "./LinkItem";

const ProfileCard = () => {
  const links = [
    {
      icon: Facebook,
      label: "Facebook",
      sublabel: "Social Data",
      href: import.meta.env.VITE_FACEBOOK_URL,
    },
    {
      icon: Instagram,
      label: "Instagram",
      sublabel: "Visual Records",
      href: import.meta.env.VITE_INSTAGRAM_URL,
    },
    {
      icon: Mail,
      label: "Encrypted Mail",
      sublabel: "Contact Protocol",
      href: import.meta.env.VITE_EMAIL,
    },
    {
      icon: Github,
      label: "Repository",
      sublabel: "Codebase",
      href: import.meta.env.VITE_GITHUB_URL,
    },
    {
      icon: Box,
      label: "Portainer",
      sublabel: "Container Mgmt",
      href: import.meta.env.VITE_PORTAINER_URL,
    },
    {
      icon: ShieldCheck,
      label: "Nginx Proxy",
      sublabel: "Gateway",
      href: import.meta.env.VITE_NGINX_URL,
    },
    {
      icon: Activity,
      label: "Netdata",
      sublabel: "System Monitor",
      href: import.meta.env.VITE_NETDATA_URL,
    },
    {
      icon: Workflow,
      label: "n8n",
      sublabel: "Automation",
      href: import.meta.env.VITE_N8N_URL,
    },
    {
      icon: HardDrive,
      label: "PostgreSQL",
      sublabel: "Relational DB",
      href: import.meta.env.VITE_PG_URL,
    },
    {
      icon: Database,
      label: "MongoDB",
      sublabel: "NoSQL Database",
      href: import.meta.env.VITE_MONGO_URL,
    },
    {
      icon: Server,
      label: "SQL Admin",
      sublabel: "Database Mgmt",
      href: import.meta.env.VITE_SQL_URL,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-full max-w-3xl p-6 mx-auto mt-10 mb-20"
    >
      {/* Header / Profile Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <motion.div
          className="relative w-32 h-32 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 border border-ayanokoji-red rotate-45" />
          <div className="absolute inset-0 border border-ayanokoji-gray -rotate-12" />
          <video
            src="/Profile_contact.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            style={{
              clipPath:
                "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
            }}
          />
          <div className="absolute -bottom-2 -right-2 text-[10px] font-mono text-ayanokoji-crimson">
            ID: 401920
          </div>
        </motion.div>

        <h1 className="text-3xl font-bold tracking-[0.2em] text-white mb-1 font-sans uppercase">
          Ayanokoji
        </h1>
        <p className="text-xs text-ayanokoji-crimson tracking-[0.3em] font-mono">
          SUBJECT 401
        </p>
      </div>

      {/* Links List */}
      <div className="space-y-2">
        {links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <LinkItem {...link} />
          </motion.div>
        ))}
      </div>

      {/* Footer Status */}
      <div className="mt-12 pt-4 border-t border-ayanokoji-gray/30 flex justify-between text-[10px] font-mono text-gray-600 uppercase">
        <span>Status: Active</span>
        <span>Sys.Ver.2.0</span>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
