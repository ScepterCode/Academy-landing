import { motion } from "framer-motion";
import { ArrowRight, Brain, Users, Award, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const stats = [
    { value: "2,500+", label: "Students Trained" },
    { value: "15+", label: "Industry Programs" },
    { value: "95%", label: "Employment Rate" },
    { value: "50+", label: "Partner Companies" }
  ];

  const programs = [
    {
      title: "AI Automation Bootcamp",
      description: "Master AI automation tools and build 6-figure career opportunities",
      duration: "30 Days",
      level: "Beginner to Advanced",
      link: "/programs/ai-automation"
    },
    {
      title: "Data Science Certification",
      description: "Comprehensive data analysis and machine learning program",
      duration: "12 Weeks", 
      level: "Intermediate",
      link: "/programs/data-science"
    },
    {
      title: "Cloud Engineering Track",
      description: "Build scalable cloud infrastructure and DevOps expertise",
      duration: "16 Weeks",
      level: "Intermediate to Advanced", 
      link: "/programs/cloud-engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                Africa's Leading Tech Academy
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Africa's
                <span className="text-blue-600"> Digital Future</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your career with world-class technology education. 
                Join thousands of professionals building the next generation of African tech talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
                  <Link href="/programs">
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="px-8 py-3 rounded-lg">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge curricula designed with industry leaders to prepare you for tomorrow's opportunities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium text-gray-900">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium text-gray-900">{program.level}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={program.link}>Apply Now</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building Africa's Tech Renaissance
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe Africa's greatest export should be talent, not raw materials. 
                  Our mission is to equip the next generation of African professionals with 
                  cutting-edge skills that compete globally.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe2 className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Global Standards</h3>
                      <p className="text-gray-600">World-class curriculum meeting international industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Community Focus</h3>
                      <p className="text-gray-600">Building a network of African tech professionals across the continent</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Brain className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Innovation Driven</h3>
                      <p className="text-gray-600">Cutting-edge AI and technology training for tomorrow's challenges</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="African professionals in technology workspace" 
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}