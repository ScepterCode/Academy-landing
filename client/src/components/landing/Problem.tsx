import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingDown } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Manual Processes",
      description: "Businesses waste 40+ hours weekly on repetitive tasks that AI could handle in minutes",
      cost: "$2,000+ monthly in lost productivity"
    },
    {
      icon: AlertTriangle,
      title: "Human Error",
      description: "Data entry mistakes, missed follow-ups, and inconsistent processes drain revenue",
      cost: "$5,000+ monthly in lost deals"
    },
    {
      icon: TrendingDown,
      title: "Slow Growth",
      description: "Without automation, businesses can't scale efficiently or compete globally",
      cost: "Unlimited growth potential"
    }
  ];

  return (
    <section className="section-spacing bg-card/10" data-testid="problem-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight" data-testid="problem-title">
              African Businesses Are <span className="text-destructive">Bleeding Money</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              While the world embraces AI automation, African businesses lose thousands monthly to manual processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-10 hover-lift group"
                data-testid={`problem-card-${index}`}
              >
                <div className="w-20 h-20 bg-destructive/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <problem.icon className="text-destructive text-3xl h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {problem.description}
                </p>
                <div className="text-lg text-destructive font-bold bg-destructive/10 rounded-xl px-4 py-3">
                  Cost: {problem.cost}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual impact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-destructive/15 to-destructive/5 rounded-3xl p-12 text-center border border-destructive/30 hover-lift"
            data-testid="reality-check"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-destructive mb-8">The Reality Check</h3>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              While African businesses lose $7,000+ monthly to inefficiency, their competitors are automating and scaling 10x faster
            </p>
            <div className="text-5xl md:text-6xl font-black text-destructive">
              $84,000+ Lost Annually Per Business
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
