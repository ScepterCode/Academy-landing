import { motion } from "framer-motion";
import { Rocket, Check, Star, Shield, CreditCard, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  onEnrollClick: () => void;
  onPaymentPlanClick: () => void;
}

export function Pricing({ onEnrollClick, onPaymentPlanClick }: PricingProps) {
  const includedFeatures = [
    "30-Day Intensive AI Automation Training",
    "Live Weekly Coaching Calls with Dr. Ogundimu",
    "$2,000+ Premium AI Tools & Software",
    "Done-For-You Templates & Systems",
    "Lifetime Community Access",
    "Job Placement Assistance",
    "Industry-Recognized Certification",
    "BONUS: Personal Mentorship Session"
  ];

  const roiData = [
    { label: "One-time investment", amount: "$497", color: "primary" },
    { label: "Average first month earnings", amount: "$5,000", color: "secondary" },
    { label: "ROI in month 1", amount: "1,006%", color: "accent" }
  ];

  return (
    <section id="pricing" className="py-20 neural-bg" data-testid="pricing-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="pricing-title">
              Invest in Your <span className="gradient-text">6-Figure Future</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The average graduate earns $180K+ annually. Your investment pays for itself in the first month.
            </p>
            
            {/* Value comparison */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-destructive/10 rounded-xl p-6 border border-destructive/20 max-w-2xl mx-auto"
              data-testid="value-comparison"
            >
              <p className="text-destructive font-semibold">⚠️ Traditional AI Masters Degree: $80,000+ • 2+ Years • No Practical Experience</p>
            </motion.div>
          </motion.div>

          {/* Pricing card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto mb-12"
          >
            <div className="bg-card rounded-2xl border border-primary/50 overflow-hidden relative" data-testid="pricing-card">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              </div>

              <div className="p-8 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">6-Figure AI Automations Bootcamp</h3>
                  <p className="text-muted-foreground">Complete transformation in 30 days</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-muted-foreground line-through text-2xl mr-4">$2,997</span>
                    <span className="text-5xl font-black gradient-text">$497</span>
                  </div>
                  <p className="text-muted-foreground">Early Bird Special (83% OFF)</p>
                  <p className="text-sm text-accent mt-2">Or 3 payments of $197/month</p>
                </div>

                {/* What's included */}
                <div className="space-y-4 mb-8">
                  {includedFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${index === includedFeatures.length - 1 ? 'border-t border-border pt-4' : ''}`}
                      data-testid={`feature-${index}`}
                    >
                      {index === includedFeatures.length - 1 ? (
                        <Star className="text-yellow-400 mr-3 h-5 w-5" />
                      ) : (
                        <Check className="text-accent mr-3 h-5 w-5" />
                      )}
                      <span className={index === includedFeatures.length - 1 ? 'font-semibold' : ''}>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  onClick={onEnrollClick}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform glow-effect mb-4"
                  data-testid="button-secure-spot"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Secure Your Spot Now
                </Button>

                {/* Payment options */}
                <div className="text-center text-sm text-muted-foreground mb-6" data-testid="payment-options">
                  <p className="flex items-center justify-center gap-2">
                    <CreditCard className="h-4 w-4" /> Secure payment • 
                    <Globe className="h-4 w-4" /> Worldwide accepted • 
                    <Smartphone className="h-4 w-4" /> Mobile money supported
                  </p>
                </div>

                {/* Guarantee */}
                <div className="bg-accent/10 rounded-xl p-4 border border-accent/20" data-testid="money-back-guarantee">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="text-accent mr-2 h-5 w-5" />
                    <span className="font-bold text-accent">30-Day Money-Back Guarantee</span>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    If you don't land your first AI automation client within 60 days, we'll refund every penny.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROI Calculator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border mb-12"
            data-testid="roi-calculator"
          >
            <h3 className="text-2xl font-bold text-center mb-8">ROI Calculator</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {roiData.map((item, index) => (
                <div key={index} data-testid={`roi-item-${index}`}>
                  <div className={`text-4xl font-black mb-2 ${
                    item.color === 'primary' ? 'text-primary' :
                    item.color === 'secondary' ? 'text-secondary' : 'text-accent'
                  }`}>
                    {item.amount}
                  </div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Urgency elements */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
            data-testid="urgency-section"
          >
            <div className="inline-flex items-center bg-destructive/10 rounded-full px-6 py-3 mb-4 border border-destructive/20">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse mr-3"></div>
              <span className="text-destructive font-semibold">Only 17 spots remaining</span>
            </div>
            
            <p className="text-muted-foreground mb-8">
              We limit each cohort to ensure personalized attention and maximum results. 
              <strong> Next cohort starts in 6 months.</strong>
            </p>

            {/* Alternative CTA */}
            <Button 
              variant="link"
              onClick={onPaymentPlanClick}
              className="text-primary hover:underline font-semibold"
              data-testid="button-payment-plan"
            >
              Prefer payment plan? Click here →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
