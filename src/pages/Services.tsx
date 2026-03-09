import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Globe, Share2, TrendingUp, Users, PenTool, Video,
  Search, BarChart3, Megaphone, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Custom, mobile-responsive websites designed specifically for clinics and hospitals. SEO-optimized with appointment booking integration, patient testimonials, and doctor profiles.",
    features: ["Responsive Design", "Appointment Booking", "Patient Portal", "SEO Optimized"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "We manage your Facebook, Instagram, LinkedIn, and YouTube with health-focused content strategies that educate, engage, and attract patients.",
    features: ["Content Calendar", "Post Design", "Community Management", "Analytics Reports"],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Dominate local search results. When patients search for doctors near them, your practice shows up first with our proven local SEO strategies.",
    features: ["Local SEO", "Google My Business", "Keyword Research", "Technical SEO"],
  },
  {
    icon: Megaphone,
    title: "Google & Social Media Ads",
    desc: "Targeted advertising campaigns on Google, Facebook, and Instagram to reach patients in your city actively looking for medical services.",
    features: ["Google Ads", "Facebook Ads", "Retargeting", "ROI Tracking"],
  },
  {
    icon: PenTool,
    title: "Medical Content Writing",
    desc: "Professional, medically accurate blog posts, articles, and social media content that establishes you as a thought leader in your specialty.",
    features: ["Blog Articles", "Social Posts", "Email Newsletters", "Patient Education"],
  },
  {
    icon: Video,
    title: "Video Marketing",
    desc: "Engaging video content including doctor introductions, procedure explainers, patient testimonials, and health tips for social media.",
    features: ["Reels & Shorts", "Testimonial Videos", "Procedure Explainers", "YouTube Strategy"],
  },
  {
    icon: Users,
    title: "Online Reputation Management",
    desc: "Monitor and manage your online reviews across Google, Practo, and social media. Build trust with positive patient testimonials.",
    features: ["Review Monitoring", "Response Management", "Practo Optimization", "Trust Building"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Transparent monthly reports showing website traffic, social media growth, ad performance, and patient acquisition metrics.",
    features: ["Monthly Reports", "Traffic Analysis", "Conversion Tracking", "Growth Insights"],
  },
  {
    icon: TrendingUp,
    title: "Brand Strategy & Consulting",
    desc: "Complete digital brand strategy tailored for your medical specialty, including brand identity, positioning, and growth roadmap.",
    features: ["Brand Identity", "Competitor Analysis", "Growth Roadmap", "Market Positioning"],
  },
];

const Services = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="gradient-hero pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-sky mb-6">
            Our Services
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
            Everything Your Practice Needs to <span className="text-sky">Thrive Online</span>
          </h1>
          <p className="text-navy-foreground/70 max-w-2xl mx-auto text-lg">
            Comprehensive digital marketing solutions designed exclusively for doctors and healthcare professionals across India.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services grid */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-7 shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span key={f} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-2xl p-12"
        >
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Let's discuss your goals. We'll create a custom plan that fits your specialty and budget.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-card text-primary hover:bg-card/90 border-0">
              Get Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Services;
