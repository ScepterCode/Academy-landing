import { motion } from "framer-motion";
import { Rocket, Play, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";

interface HeroProps {
  onEnrollClick: () => void;
  onVideoClick: () => void;
}

export function Hero({ onEnrollClick, onVideoClick }: HeroProps) {
  // Set countdown to 5 days from now
  const countdownTarget = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  return (
    <section className="relative min-h-screen flex items-center justify-center neural-bg overflow-hidden" data-testid="hero-section">
      {/* Dynamic particles background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Limited spots badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-muted/50 rounded-full px-4 py-2 mb-8 border border-border"
            data-testid="limited-spots-badge"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium">Limited to 50 Students Only</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            data-testid="hero-headline"
          >
            Master <span className="gradient-text">AI Automations</span><br/>
            & Build a <span className="gradient-text">6-Figure Career</span><br/>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">in 30 Days</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="hero-subtitle"
          >
            Transform African businesses with AI solutions that save and generate thousands of dollars monthly
          </motion.p>

          {/* Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card/50 rounded-2xl p-6 mb-8 border border-border backdrop-blur-sm max-w-md mx-auto"
            data-testid="countdown-container"
          >
            <p className="text-sm text-muted-foreground mb-4">Early Bird Pricing Ends In:</p>
            <CountdownTimer targetDate={countdownTarget} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-testid="hero-cta-buttons"
          >
            <Button 
              onClick={onEnrollClick}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform glow-effect"
              data-testid="button-enroll-primary"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Secure Your Spot - $497 Today
            </Button>
            <Button 
              onClick={onVideoClick}
              variant="outline"
              className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-muted/20 transition-colors"
              data-testid="button-watch-video"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Success Stories
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
            data-testid="trust-indicators"
          >
            <div className="flex items-center">
              <Shield className="text-accent mr-2 h-4 w-4" />
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center">
              <Users className="text-accent mr-2 h-4 w-4" />
              500+ Successful Graduates
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1 h-4 w-4" />
              <span>4.9/5 (247 Reviews)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
