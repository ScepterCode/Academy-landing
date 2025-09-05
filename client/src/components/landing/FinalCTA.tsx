import { motion } from "framer-motion";
import { Rocket, Lock, Users, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";

interface FinalCTAProps {
  onEnrollClick: () => void;
}

export function FinalCTA({ onEnrollClick }: FinalCTAProps) {
  // Set countdown to 14 hours from now
  const countdownTarget = new Date(Date.now() + 14 * 60 * 60 * 1000);

  const urgencyStats = [
    { value: "17", label: "Spots Remaining", color: "destructive" },
    { value: "14", label: "Hours Left", color: "primary" },
    { value: "$1,500", label: "Price Increase Tomorrow", color: "secondary" }
  ];

  const socialProof = [
    { icon: Users, value: "2,500+", label: "Trained" },
    { icon: Star, value: "4.9/5", label: "Rating" },
    { icon: Award, value: "95%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 neural-bg relative overflow-hidden" data-testid="final-cta-section">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
            data-testid="final-cta-title"
          >
            Your <span className="gradient-text">6-Figure Future</span> Starts Today
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Don't let another year pass watching others build successful AI automation careers. 
            Join the elite group of African professionals leading the automation revolution.
          </motion.p>

          {/* Final urgency elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card/50 rounded-2xl p-8 border border-border backdrop-blur-sm mb-8"
            data-testid="urgency-panel"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {urgencyStats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`urgency-stat-${index}`}>
                  <div className={`text-3xl font-black mb-2 ${
                    stat.color === 'destructive' ? 'text-destructive' :
                    stat.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-destructive font-semibold mb-4">⚠️ Early bird pricing expires in hours</p>
              <p className="text-muted-foreground text-sm">Next cohort won't start for 6 months. Secure your transformation now.</p>
            </div>
          </motion.div>

          {/* Final CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 mb-12"
            data-testid="final-cta-buttons"
          >
            <Button 
              onClick={onEnrollClick}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform glow-effect shadow-2xl"
              data-testid="button-claim-spot-final"
            >
              <Rocket className="mr-3 h-6 w-6" />
              CLAIM YOUR SPOT - $497 TODAY
            </Button>
            
            <div className="text-sm text-muted-foreground" data-testid="security-badges">
              <div className="flex items-center justify-center gap-2">
                <Lock className="h-4 w-4" />
                <span>SSL Secured • 30-Day Money-Back Guarantee • Instant Access</span>
              </div>
            </div>
          </motion.div>

          {/* Social proof reminder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-8 text-sm text-muted-foreground"
            data-testid="social-proof-final"
          >
            {socialProof.map((proof, index) => (
              <div key={index} className="flex items-center" data-testid={`social-proof-${index}`}>
                <proof.icon className={`mr-2 h-4 w-4 ${
                  index === 1 ? 'text-yellow-400' : ''
                }`} />
                <span>{proof.value} {proof.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
