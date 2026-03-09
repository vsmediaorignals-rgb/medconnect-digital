import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Globe, Share2, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const stats = [
  { value: "500+", label: "Doctors Served" },
  { value: "3x", label: "Average Growth" },
  { value: "50+", label: "Cities in India" },
  { value: "95%", label: "Client Retention" },
];

const services = [
  { icon: Globe, title: "Website Design", desc: "Modern, HIPAA-aware websites that build patient trust and drive appointments." },
  { icon: Share2, title: "Social Media Management", desc: "Engaging content strategies tailored for medical professionals across all platforms." },
  { icon: TrendingUp, title: "SEO & Ads", desc: "Rank higher on Google and run targeted ad campaigns to reach patients in your area." },
  { icon: Users, title: "Online Reputation", desc: "Manage reviews and build a strong online presence that patients trust." },
];

const whyUs = [
  "Exclusively built for Indian doctors & clinics",
  "HIPAA & medical advertising compliant",
  "Dedicated account managers",
  "Transparent monthly reporting",
  "Pan-India presence across 50+ cities",
];

const Index = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-sky mb-6">
            #1 Medical Marketing Agency in India
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy-foreground mb-6">
            Grow Your Medical Practice{" "}
            <span className="text-sky">Digitally</span>
          </h1>
          <p className="text-lg text-navy-foreground/70 leading-relaxed mb-8 max-w-lg">
            We help doctors and healthcare professionals across India build a powerful online presence, attract more patients, and grow their practice through proven digital marketing strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground border-0 shadow-elevated hover:scale-105 transition-transform">
                Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-sky/30 text-navy-foreground hover:bg-sky/10">
                Our Services
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <img
            src={heroImage}
            alt="Doctor using digital marketing tools on a tablet"
            className="rounded-2xl shadow-elevated w-full object-cover max-h-[500px]"
          />
        </motion.div>
      </div>
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    </section>

    {/* Stats */}
    <section className="relative -mt-16 z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-card rounded-2xl shadow-elevated p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services preview */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Digital Marketing Built for Healthcare"
          subtitle="From website design to social media, we handle everything so you can focus on your patients."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="py-24 gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Why MediBoost"
          title="Why Doctors Trust Us"
          subtitle="We understand the unique challenges of marketing in the healthcare industry."
          light
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 bg-navy-foreground/5 rounded-lg p-4"
            >
              <CheckCircle className="w-5 h-5 text-sky shrink-0" />
              <span className="text-navy-foreground/90">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-2xl p-12 md:p-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Grow Your Practice?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Join 500+ doctors across India who have transformed their practice with our digital marketing solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-card text-primary hover:bg-card/90 border-0 shadow-elevated">
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
