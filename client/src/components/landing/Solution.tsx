import { motion } from "framer-motion";
import { Bot, DollarSign, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionProps {
  onEnrollClick: () => void;
}

export function Solution({ onEnrollClick }: SolutionProps) {
  const benefits = [
    {
      icon: Bot,
      title: "Automate Everything",
      description: "Build AI systems that handle customer service, data processing, lead generation, and more - 24/7 without human intervention."
    },
    {
      icon: DollarSign,
      title: "Command Premium Rates",
      description: "AI automation specialists charge $100-500/hour. Save businesses thousands monthly and earn 6-figure incomes."
    },
    {
      icon: Globe,
      title: "Lead African Innovation",
      description: "Position yourself as a tech leader, helping African businesses compete globally with cutting-edge automation."
    }
  ];

  const stats = [
    { value: "$150K+", label: "Average graduate income" },
    { value: "95%", label: "Job placement rate" },
    { value: "30 Days", label: "To career transformation" },
    { value: "500+", label: "Success stories" }
  ];

  return (
    <section className="section-spacing neural-bg" data-testid="solution-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight" data-testid="solution-title">
              The <span className="gradient-text">AI Automation Revolution</span> is Here
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Transform your career by mastering the skills that turn business problems into automated solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                    data-testid={`benefit-${index}`}
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-accent h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button 
                  onClick={onEnrollClick}
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform glow-effect"
                  data-testid="button-start-transformation"
                >
                  Start Your Transformation
                </Button>
              </motion.div>
            </motion.div>

            {/* Right visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="African professional working with AI technology" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="solution-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border" data-testid="automation-impact">
                  <div className="text-sm text-muted-foreground mb-1">Automation Impact</div>
                  <div className="text-2xl font-bold text-accent">+340% ROI</div>
                  <div className="text-sm text-muted-foreground">Average client savings</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
            data-testid="solution-stats"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
