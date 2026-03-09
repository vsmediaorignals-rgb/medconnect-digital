import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true, light = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
        light ? "bg-primary/20 text-sky" : "bg-primary/10 text-primary"
      }`}>
        {badge}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${light ? "text-navy-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl text-base leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
