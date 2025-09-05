import { motion } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FAQProps {
  onConsultationClick: () => void;
}

export function FAQ({ onConsultationClick }: FAQProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need programming experience to succeed?",
      answer: "Absolutely not! Our bootcamp is designed for professionals from all backgrounds. We teach you to build powerful AI automation systems using no-code and low-code tools. Many of our most successful graduates come from marketing, sales, finance, and other non-technical fields."
    },
    {
      question: "How quickly can I start earning after graduation?",
      answer: "Most graduates land their first client within 30-60 days of completion. We provide job placement assistance, client introduction services, and teach you proven strategies for finding high-paying automation projects. The average first project pays $3,000-$15,000."
    },
    {
      question: "What if I can't attend live sessions due to time zones?",
      answer: "All live sessions are recorded and available within 2 hours. We also offer multiple session times to accommodate different African time zones. Plus, you get lifetime access to all materials, so you can learn at your own pace."
    },
    {
      question: "Is the 30-day money-back guarantee real?",
      answer: "Yes! We're so confident in our program that we offer a full 30-day money-back guarantee. If you're not completely satisfied or don't see the value, we'll refund every penny. We extend this to 60 days for client acquisition - if you don't land your first client within 60 days of graduation, we'll refund your investment."
    },
    {
      question: "Do you provide ongoing support after graduation?",
      answer: "Absolutely! You get lifetime access to our graduate community, monthly Q&A sessions, updated course materials, and job placement assistance. Many graduates continue to collaborate and refer clients to each other through our network."
    },
    {
      question: "What makes this different from other AI courses?",
      answer: "Most AI courses teach theory. We focus exclusively on practical, business-ready automation skills. You'll build real systems, work with actual clients, and learn to solve genuine business problems. Plus, our instructor has generated over $50M in measurable ROI for clients - this is proven, not theoretical."
    }
  ];

  return (
    <section className="py-20 bg-card/20" data-testid="faq-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="faq-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about the bootcamp
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border"
                data-testid={`faq-item-${index}`}
              >
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors h-auto"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  <ChevronDown className={`text-muted-foreground h-5 w-5 flex-shrink-0 transform transition-transform ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`} />
                </Button>
                {expandedFAQ === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-muted-foreground"
                    data-testid={`faq-answer-${index}`}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
            data-testid="consultation-cta"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button 
              onClick={onConsultationClick}
              variant="outline"
              className="bg-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/80 transition-colors"
              data-testid="button-book-consultation"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
