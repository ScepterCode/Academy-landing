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
    <section className="py-20 bg-card/20" data-testid="problem-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="problem-title">
              African Businesses Are <span className="text-destructive">Bleeding Money</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While the world embraces AI automation, African businesses lose thousands monthly to manual processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors"
                data-testid={`problem-card-${index}`}
              >
                <div className="w-16 h-16 bg-destructive/20 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="text-destructive text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {problem.description}
                </p>
                <div className="text-sm text-destructive font-semibold">
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
            className="bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-8 text-center border border-destructive/20"
            data-testid="reality-check"
          >
            <h3 className="text-2xl font-bold text-destructive mb-4">The Reality Check</h3>
            <p className="text-lg text-muted-foreground mb-6">
              While African businesses lose $7,000+ monthly to inefficiency, their competitors are automating and scaling 10x faster
            </p>
            <div className="text-4xl font-black text-destructive">
              $84,000+ Lost Annually Per Business
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
