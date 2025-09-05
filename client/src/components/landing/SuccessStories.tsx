import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessStoriesProps {
  onVideoClick: () => void;
}

export function SuccessStories({ onVideoClick }: SuccessStoriesProps) {
  const successStories = [
    {
      name: "Kwame Asante",
      location: "Ghana → Senior AI Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      before: {
        title: "BEFORE (Marketing Manager)",
        details: "$18,000/year • Manual campaign management • 60+ hour weeks • Limited growth potential"
      },
      after: {
        title: "AFTER (30 Days Later)",
        details: "$180,000/year • AI-powered marketing systems • 30-hour weeks • Multiple clients globally"
      },
      quote: "I automated my client's entire lead generation process. They went from 50 leads/month to 500+ leads/month. Now I charge $5,000/month per client and have a waiting list!"
    },
    {
      name: "Amara Okafor",
      location: "Nigeria → AI Automation Agency Owner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      before: {
        title: "BEFORE (Accountant)",
        details: "$12,000/year • Manual bookkeeping • Burnout • Struggling to support family"
      },
      after: {
        title: "AFTER (45 Days Later)",
        details: "$25,000/month • 12-person agency • AI-powered financial systems • Financial freedom"
      },
      quote: "I built an AI system that processes invoices 95% faster. My agency now serves 50+ businesses across West Africa. The bootcamp changed everything!"
    }
  ];

  const incomeProgression = [
    { month: "Month 0 (Before)", amount: "$15K", description: "Annual salary" },
    { month: "Month 1 (Graduation)", amount: "$45K", description: "First contracts secured" },
    { month: "Month 6", amount: "$95K", description: "Established client base" },
    { month: "Month 12", amount: "$180K+", description: "Agency/consulting income" }
  ];

  const videoTestimonials = [
    {
      title: "From $500/month to $15K/month",
      description: "Joseph's automation agency transformation",
      duration: "3:24",
      thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Building Africa's First AI Consulting Firm",
      description: "How Sarah scaled to 50+ enterprise clients",
      duration: "4:17",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Quit Corporate to Build AI Empire",
      description: "Michael's journey from employee to entrepreneur",
      duration: "2:56",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section id="success-stories" className="py-20 neural-bg" data-testid="success-stories-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="success-stories-title">
              <span className="gradient-text">Real Transformations</span> from Real People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our graduates went from struggling professionals to 6-figure AI automation specialists
            </p>
          </motion.div>

          {/* Success story cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
                data-testid={`success-story-${index}`}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={story.image} 
                      alt={`Success story - ${story.name}`} 
                      className="w-16 h-16 rounded-full object-cover"
                      data-testid={`story-image-${index}`}
                    />
                    <div>
                      <h3 className="font-bold text-xl">{story.name}</h3>
                      <p className="text-muted-foreground">{story.location}</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-destructive/10 rounded-lg p-4 border-l-4 border-destructive">
                      <h4 className="font-semibold text-destructive mb-2">{story.before.title}</h4>
                      <p className="text-sm text-muted-foreground">{story.before.details}</p>
                    </div>
                    
                    <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                      <h4 className="font-semibold text-accent mb-2">{story.after.title}</h4>
                      <p className="text-sm text-muted-foreground">{story.after.details}</p>
                    </div>
                  </div>

                  <blockquote className="text-muted-foreground italic mb-6">
                    "{story.quote}"
                  </blockquote>

                  <Button 
                    onClick={onVideoClick}
                    variant="secondary"
                    className="bg-primary/20 text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary/30 transition-colors"
                    data-testid={`watch-story-${index}`}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Full Story
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Income transformation visual */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border mb-12"
            data-testid="income-progression"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Average Graduate Income Progression</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {incomeProgression.map((stage, index) => (
                <div key={index} className="text-center" data-testid={`income-stage-${index}`}>
                  <div className="text-sm text-muted-foreground mb-2">{stage.month}</div>
                  <div className={`text-3xl font-black mb-2 ${
                    index === 0 ? 'text-destructive' : 
                    index === 1 ? 'text-primary' : 
                    index === 2 ? 'text-secondary' : 'text-accent'
                  }`}>
                    {stage.amount}
                  </div>
                  <div className="text-xs text-muted-foreground">{stage.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video testimonials grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
            data-testid="video-testimonials"
          >
            {videoTestimonials.map((video, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
                onClick={onVideoClick}
                data-testid={`video-testimonial-${index}`}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
