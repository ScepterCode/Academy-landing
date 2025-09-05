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
      <div className="absolute inset-0 opacity-40">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              top: `${15 + i * 12}%`,
              left: `${8 + i * 11}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Limited spots badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center glass-card rounded-full px-6 py-3 mb-12 hover-lift"
            data-testid="limited-spots-badge"
          >
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-semibold tracking-wide">Limited to 50 Students Only</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
            data-testid="hero-headline"
          >
            Master <span className="gradient-text">AI Automations</span><br/>
            & Build a <span className="gradient-text">6-Figure Career</span><br/>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground mt-4 block">in 30 Days</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="hero-subtitle"
          >
            Transform African businesses with AI solutions that save and generate thousands of dollars monthly
          </motion.p>

          {/* Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-3xl p-8 mb-12 hover-lift max-w-lg mx-auto"
            data-testid="countdown-container"
          >
            <p className="text-lg text-muted-foreground mb-6 font-medium">Early Bird Pricing Ends In:</p>
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
