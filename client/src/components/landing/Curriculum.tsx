import { motion } from "framer-motion";
import { ChevronDown, Check, Rocket, Users, Wrench, Handshake } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Curriculum() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(0);

  const weeks = [
    {
      id: 1,
      title: "AI Foundations & Tools Mastery",
      subtitle: "Days 1-7: Build your AI automation toolkit",
      color: "primary",
      topics: [
        "AI/ML fundamentals for business",
        "ChatGPT, Claude, and GPT-4 mastery",
        "No-code automation platforms",
        "Zapier, Make.com, and custom integrations"
      ],
      projects: [
        "Build your first AI chatbot",
        "Automate email workflows",
        "Create intelligent data processors",
        "Integration testing and debugging"
      ]
    },
    {
      id: 2,
      title: "Advanced Agentic AI Systems",
      subtitle: "Days 8-14: Build intelligent autonomous agents",
      color: "secondary",
      topics: [
        "Multi-agent AI architectures",
        "Custom AI model fine-tuning",
        "API integrations and webhooks",
        "Intelligent decision-making systems"
      ],
      projects: [
        "Customer service automation",
        "Sales process optimization",
        "Content generation systems",
        "Predictive analytics dashboards"
      ]
    },
    {
      id: 3,
      title: "Business Problem Solving",
      subtitle: "Days 15-21: Transform challenges into opportunities",
      color: "accent",
      topics: [
        "ROI calculation and presentation",
        "Process mapping and optimization",
        "Stakeholder communication",
        "Project management for AI implementations"
      ],
      projects: [
        "E-commerce automation",
        "Healthcare workflow optimization",
        "Financial services automation",
        "Manufacturing process intelligence"
      ]
    },
    {
      id: 4,
      title: "Launch Your AI Career",
      subtitle: "Days 22-30: Client acquisition and career acceleration",
      color: "gradient",
      topics: [
        "Portfolio development and showcase",
        "Client acquisition strategies",
        "Pricing and proposals that win",
        "Building long-term client relationships"
      ],
      projects: [
        "Complete automation solution",
        "Client presentation and demo",
        "Personal brand development",
        "Certification and graduation"
      ]
    }
  ];

  const bonusContent = [
    {
      icon: Users,
      title: "Lifetime Community Access",
      description: "Connect with graduates, share projects, get ongoing support"
    },
    {
      icon: Wrench,
      title: "Premium Tool Stack",
      description: "$2000+ worth of AI tools, templates, and resources"
    },
    {
      icon: Handshake,
      title: "Job Placement Support",
      description: "Direct introductions to hiring partners and clients"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-card/20" data-testid="curriculum-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="curriculum-title">
              <span className="gradient-text">World-Class Curriculum</span> Built for Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              30 days of intensive training covering everything from AI fundamentals to building client-ready automation systems
            </p>
          </motion.div>

          {/* Week structure */}
          <div className="space-y-8">
            {weeks.map((week, index) => (
              <motion.div
                key={week.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
                data-testid={`curriculum-week-${week.id}`}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${
                        week.color === 'gradient' 
                          ? 'bg-gradient-to-r from-primary to-secondary' 
                          : week.color === 'primary' 
                            ? 'bg-primary/20' 
                            : week.color === 'secondary' 
                              ? 'bg-secondary/20' 
                              : 'bg-accent/20'
                      } rounded-xl flex items-center justify-center`}>
                        <span className={`font-bold ${
                          week.color === 'gradient' 
                            ? 'text-white' 
                            : week.color === 'primary'
                              ? 'text-primary'
                              : week.color === 'secondary'
                                ? 'text-secondary'
                                : 'text-accent'
                        }`}>
                          W{week.id}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{week.title}</h3>
                        <p className="text-muted-foreground">{week.subtitle}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedWeek(expandedWeek === week.id ? null : week.id)}
                      className="text-muted-foreground hover:text-primary"
                      data-testid={`toggle-week-${week.id}`}
                    >
                      <ChevronDown className={`h-5 w-5 transform transition-transform ${
                        expandedWeek === week.id ? 'rotate-180' : ''
                      }`} />
                    </Button>
                  </div>
                </div>
                {expandedWeek === week.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                    data-testid={`week-${week.id}-content`}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Core Topics</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center">
                              <Check className="text-accent mr-2 h-4 w-4" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Practical Projects</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {week.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="flex items-center">
                              <Rocket className="text-secondary mr-2 h-4 w-4" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bonus content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
            data-testid="bonus-content"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Exclusive Bonus Content</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {bonusContent.map((bonus, index) => (
                <div key={index} className="text-center" data-testid={`bonus-${index}`}>
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <bonus.icon className="text-primary text-2xl h-8 w-8" />
                  </div>
                  <h4 className="font-bold mb-2">{bonus.title}</h4>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
