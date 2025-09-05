import { motion } from "framer-motion";
import { Clock, Users, Award, ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Programs() {
  const programs = [
    {
      id: "ai-automation",
      title: "AI Automation Bootcamp",
      subtitle: "Master the Future of Business Automation",
      description: "Learn to build AI-powered automation systems that save businesses thousands monthly. Perfect for professionals looking to enter the high-demand AI automation field.",
      duration: "30 Days Intensive",
      format: "Hybrid (Online + In-Person)",
      level: "Beginner to Advanced",
      price: "$497",
      features: [
        "Hands-on AI automation projects",
        "No-code/low-code platform mastery",
        "Business process optimization",
        "Client acquisition strategies",
        "Job placement assistance",
        "Lifetime community access"
      ],
      outcomes: [
        "Build complete automation solutions",
        "Command $100-500/hour rates", 
        "Generate 6-figure income potential",
        "Work with global clients remotely"
      ],
      nextCohort: "March 15, 2024",
      featured: true
    },
    {
      id: "data-science",
      title: "Data Science Certification",
      subtitle: "Transform Data into Business Intelligence",
      description: "Comprehensive program covering data analysis, machine learning, and statistical modeling. Build the skills to become a data-driven decision maker.",
      duration: "12 Weeks",
      format: "Online + Capstone Project",
      level: "Intermediate",
      price: "$1,297",
      features: [
        "Python & R programming",
        "Machine learning algorithms",
        "Data visualization tools",
        "Statistical analysis methods",
        "Real-world project portfolio",
        "Industry mentor guidance"
      ],
      outcomes: [
        "Analyze complex datasets",
        "Build predictive models",
        "Create data-driven insights",
        "Lead analytics initiatives"
      ],
      nextCohort: "April 1, 2024",
      featured: false
    },
    {
      id: "cloud-engineering",
      title: "Cloud Engineering Track",
      subtitle: "Build Scalable Cloud Infrastructure",
      description: "Master AWS, Azure, and GCP platforms. Learn DevOps practices, containerization, and infrastructure as code to build resilient cloud systems.",
      duration: "16 Weeks",
      format: "Online + Labs",
      level: "Intermediate to Advanced",
      price: "$1,897",
      features: [
        "Multi-cloud platform expertise",
        "DevOps automation tools",
        "Container orchestration",
        "Infrastructure as Code",
        "Security best practices",
        "Cloud certification prep"
      ],
      outcomes: [
        "Design cloud architectures", 
        "Automate deployment pipelines",
        "Manage enterprise infrastructure",
        "Earn industry certifications"
      ],
      nextCohort: "March 30, 2024",
      featured: false
    },
    {
      id: "product-management",
      title: "Tech Product Management",
      subtitle: "Lead Product Innovation",
      description: "Learn to build and manage digital products from concept to launch. Perfect for professionals transitioning into product leadership roles.",
      duration: "10 Weeks",
      format: "Online + Case Studies",
      level: "Beginner to Intermediate", 
      price: "$997",
      features: [
        "Product strategy development",
        "User research methods",
        "Agile development processes",
        "Data-driven decision making",
        "Stakeholder management",
        "Go-to-market strategies"
      ],
      outcomes: [
        "Lead product teams effectively",
        "Make data-driven product decisions", 
        "Launch successful digital products",
        "Drive business growth"
      ],
      nextCohort: "April 15, 2024",
      featured: false
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Mastery",
      subtitle: "Drive Growth Through Digital Channels",
      description: "Master modern digital marketing including social media, content marketing, SEO, and paid advertising to drive business growth.",
      duration: "8 Weeks",
      format: "Online + Live Sessions",
      level: "Beginner to Intermediate",
      price: "$697",
      features: [
        "Social media marketing",
        "Content strategy & creation",
        "Search engine optimization",
        "Pay-per-click advertising",
        "Email marketing automation",
        "Analytics & reporting"
      ],
      outcomes: [
        "Create effective marketing campaigns",
        "Optimize conversion funnels",
        "Build brand presence online",
        "Generate qualified leads"
      ],
      nextCohort: "March 25, 2024",
      featured: false
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Fundamentals",
      subtitle: "Protect Digital Assets & Infrastructure",
      description: "Essential cybersecurity skills for modern businesses. Learn threat detection, incident response, and security best practices.",
      duration: "14 Weeks",
      format: "Online + Security Labs",
      level: "Beginner to Intermediate",
      price: "$1,497",
      features: [
        "Network security protocols",
        "Threat detection & analysis",
        "Incident response procedures",
        "Security compliance frameworks",
        "Ethical hacking techniques",
        "Risk assessment methods"
      ],
      outcomes: [
        "Implement security protocols",
        "Respond to security incidents",
        "Conduct security audits",
        "Build secure systems"
      ],
      nextCohort: "April 8, 2024",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Career with Our Programs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive collection of technology programs designed to 
                meet the demands of today's digital economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow ${
                    program.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
                  }`}
                >
                  {program.featured && (
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-t-2xl text-center">
                      <span className="font-medium">🔥 Most Popular Program</span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-blue-600 font-medium mb-3">{program.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{program.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        {program.level}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        {program.format}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {program.nextCohort}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Career Outcomes:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.outcomes.slice(0, 3).map((outcome, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Award className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                            {outcome}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{program.price}</div>
                        <div className="text-sm text-gray-500">One-time payment</div>
                      </div>
                      <Button asChild className={program.featured ? "bg-blue-600 hover:bg-blue-700" : ""}>
                        <Link href={`/programs/${program.id}`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Not Sure Which Program is Right for You?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Speak with our academic advisors to find the perfect program for your career goals.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}