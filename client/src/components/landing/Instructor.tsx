import { motion } from "framer-motion";
import { GraduationCap, Building, TrendingUp, Globe } from "lucide-react";

export function Instructor() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "PhD in Computer Science from MIT, specialized in Machine Learning and Business Process Automation"
    },
    {
      icon: Building,
      title: "Industry Leadership",
      description: "Led AI initiatives at Microsoft, Google Cloud, and IBM Watson, serving Fortune 500 companies worldwide"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Generated over $50M in measurable ROI for clients through AI automation implementations"
    },
    {
      icon: Globe,
      title: "African Innovation Advocate",
      description: "Passionate about elevating African talent in the global tech economy through cutting-edge AI education"
    }
  ];

  const badges = [
    "Microsoft AI Certified",
    "Google Cloud ML Expert",
    "IBM Watson Partner",
    "TEDx Speaker"
  ];

  const companies = [
    "Microsoft",
    "Google",
    "Shopify",
    "Deloitte",
    "MTN"
  ];

  return (
    <section className="py-20 bg-card/20" data-testid="instructor-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Instructor image and credentials */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
                alt="AI Automation Expert Instructor" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="instructor-image"
              />
              
              {/* Floating achievement badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-card rounded-xl p-4 border border-border shadow-lg"
                data-testid="students-trained-badge"
              >
                <div className="text-sm text-muted-foreground">Students Trained</div>
                <div className="text-2xl font-bold text-primary">2,500+</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 border border-border shadow-lg"
                data-testid="success-rate-badge"
              >
                <div className="text-sm text-muted-foreground">Success Rate</div>
                <div className="text-2xl font-bold text-accent">95%</div>
              </motion.div>
            </motion.div>

            {/* Right: Instructor info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="instructor-title">
                  Meet Your <span className="gradient-text">AI Automation Mentor</span>
                </h2>
                <h3 className="text-2xl font-semibold text-primary mb-2">Dr. Adebayo Ogundimu</h3>
                <p className="text-lg text-muted-foreground">Former Microsoft AI Lead • 15+ Years Experience • $50M+ in Client ROI</p>
              </div>

              <div className="space-y-6 mb-8">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                    data-testid={`credential-${index}`}
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <credential.icon className="text-primary text-sm h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{credential.title}</h4>
                      <p className="text-muted-foreground text-sm">{credential.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-muted/50 rounded-xl p-6 mb-8"
                data-testid="instructor-quote"
              >
                <blockquote className="text-lg italic mb-4">
                  "I've seen firsthand how AI transforms businesses. My mission is to empower African professionals with these game-changing skills so they can compete globally and drive innovation across the continent."
                </blockquote>
                <div className="text-sm text-muted-foreground">— Dr. Adebayo Ogundimu</div>
              </motion.div>

              {/* Credentials badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
                data-testid="credential-badges"
              >
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      index === 0 ? 'bg-primary/10 text-primary' :
                      index === 1 ? 'bg-secondary/10 text-secondary' :
                      index === 2 ? 'bg-accent/10 text-accent' :
                      'bg-yellow-500/10 text-yellow-600'
                    }`}
                    data-testid={`badge-${index}`}
                  >
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Company logos / Social proof */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-border"
            data-testid="company-logos"
          >
            <p className="text-center text-muted-foreground mb-8">Trusted by professionals from leading companies</p>
            <div className="flex items-center justify-center gap-12 opacity-60 grayscale">
              {companies.map((company, index) => (
                <div key={index} className="text-2xl font-bold" data-testid={`company-${index}`}>
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
