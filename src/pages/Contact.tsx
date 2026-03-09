import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@mediboost.in" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Office", value: "Mumbai, Maharashtra, India" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 9 AM – 7 PM IST" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-sky mb-6">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
              Let's Grow Your <span className="text-sky">Practice Together</span>
            </h1>
            <p className="text-navy-foreground/70 max-w-xl mx-auto text-lg">
              Book a free consultation and discover how we can transform your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <SectionHeading
                badge="Contact Us"
                title="We'd Love to Hear From You"
                subtitle="Reach out via the form or through any of our contact channels below."
                center={false}
              />
              <div className="space-y-5">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{c.label}</div>
                      <div className="font-medium text-foreground">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-elevated border border-border p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Our team will contact you within 24 hours.</p>
                    <Button className="mt-6 gradient-primary text-primary-foreground border-0" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Dr. Rajesh Kumar" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="doctor@clinic.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Medical Specialty</Label>
                      <Input id="specialty" placeholder="e.g., Cardiologist, Dermatologist, General Physician" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Goals</Label>
                      <Textarea id="message" rows={4} placeholder="I want to increase my online presence and get more patient appointments..." required />
                    </div>
                    <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground border-0 shadow-card hover:shadow-elevated transition-shadow">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
