import { motion } from "framer-motion";
import { Award, Users, Target, Heart, MapPin, Calendar } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in education, matching global best practices while addressing local contexts."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive network of learners, mentors, and industry partners across Africa and beyond."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Focused on creating meaningful change in individuals' lives and the broader African tech ecosystem."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuously evolving our curricula to stay ahead of technological trends and industry demands."
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Foundation",
      description: "AI Automation Academy was founded with a vision to democratize tech education across Africa"
    },
    {
      year: "2020",
      title: "First Programs",
      description: "Launched our inaugural AI and Data Science programs with 50 students across 5 countries"
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Grew to serve 500+ students and partnered with 20+ companies for job placements"
    },
    {
      year: "2022",
      title: "Recognition",
      description: "Recognized as Africa's leading tech education provider by TechCrunch and Forbes Africa"
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Opened state-of-the-art campuses in Lagos, Nairobi, and Cape Town"
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded to serve students across 25+ African countries with 95% employment rate"
    }
  ];

  const leadership = [
    {
      name: "Dr. Adebayo Ogundimu",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Former Microsoft AI Lead with 15+ years in tech. PhD from MIT in Machine Learning."
    },
    {
      name: "Sarah Kone",
      role: "Chief Academic Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Former Google Education Director. 20+ years in curriculum development and ed-tech."
    },
    {
      name: "Michael Tembo",
      role: "Head of Industry Relations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Former IBM Africa VP. Expert in building university-industry partnerships."
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
                About AI Automation Academy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to transform Africa's technological landscape by empowering 
                the next generation of innovators, creators, and leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To democratize access to world-class technology education across Africa, 
                  creating pathways for professionals to build thriving careers in the global 
                  digital economy while solving local challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become Africa's premier technology education institution, recognized globally 
                  for producing skilled professionals who drive innovation and economic growth 
                  across the continent and beyond.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to continental impact
              </p>
            </motion.div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-6 relative">
                    {index < timeline.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-200"></div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
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
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced leaders driving innovation in African tech education
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{person.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{person.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Discover how AI Automation Academy can transform your career
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center text-blue-100">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Lagos • Nairobi • Cape Town</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>New cohorts start monthly</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}