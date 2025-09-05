import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Award, Check, ArrowRight, Calendar, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEnrollmentSchema, type InsertEnrollment } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function DataScienceCertification() {
  const [applicationOpen, setApplicationOpen] = useState(false);
  const { toast } = useToast();

  const curriculum = [
    {
      week: "Weeks 1-3",
      title: "Python & Data Fundamentals",
      topics: [
        "Python programming for data science",
        "NumPy and Pandas for data manipulation",
        "Data cleaning and preprocessing techniques",
        "Exploratory data analysis best practices"
      ]
    },
    {
      week: "Weeks 4-6", 
      title: "Statistical Analysis & Visualization",
      topics: [
        "Descriptive and inferential statistics",
        "Matplotlib and Seaborn for visualization",
        "Statistical hypothesis testing",
        "Advanced data visualization techniques"
      ]
    },
    {
      week: "Weeks 7-9",
      title: "Machine Learning Mastery",
      topics: [
        "Supervised learning algorithms",
        "Unsupervised learning techniques", 
        "Model evaluation and validation",
        "Feature engineering and selection"
      ]
    },
    {
      week: "Weeks 10-12",
      title: "Advanced Topics & Capstone",
      topics: [
        "Deep learning with TensorFlow/PyTorch",
        "Time series analysis and forecasting",
        "Big data tools and cloud platforms",
        "Capstone project development"
      ]
    }
  ];

  const outcomes = [
    "Build end-to-end machine learning models",
    "Analyze complex datasets and extract insights",
    "Create compelling data visualizations and reports",
    "Work with big data tools and cloud platforms",
    "Lead data science initiatives in organizations",
    "Command competitive data scientist salaries"
  ];

  const features = [
    "12-week comprehensive program",
    "Hands-on projects with real datasets",
    "Industry-standard tools and platforms",
    "Personal mentorship from data scientists",
    "Career coaching and interview preparation",
    "Lifetime access to course materials",
    "Industry-recognized certification",
    "Job placement assistance"
  ];

  const applicationForm = useForm<InsertEnrollment>({
    resolver: zodResolver(insertEnrollmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      experience: "",
      paymentPlan: "full"
    }
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: InsertEnrollment) => {
      const response = await apiRequest('POST', '/api/enrollments', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying! We'll review your application and get back to you within 24 hours.",
      });
      setApplicationOpen(false);
      applicationForm.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/enrollments'] });
    },
    onError: () => {
      toast({
        title: "Application Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  });

  const handleApplication = () => {
    setApplicationOpen(true);
  };

  const onApplicationSubmit = (data: InsertEnrollment) => {
    applicationMutation.mutate(data);
  };

  const countries = [
    "Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco", 
    "Ethiopia", "Uganda", "Tanzania", "Rwanda", "Senegal", "Ivory Coast",
    "Other African Country", "Outside Africa"
  ];

  const experienceLevels = [
    "Complete Beginner",
    "Some Programming Experience",
    "Business Analyst",
    "Academic Background",
    "Software Developer",
    "Data Professional"
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Data Science Certification Program
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Master data analysis, machine learning, and statistical modeling to become a 
                  data-driven decision maker in today's data-rich business environment.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">Weeks</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">25</div>
                    <div className="text-sm text-gray-600">Max Students</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">90%</div>
                    <div className="text-sm text-gray-600">Job Rate</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$80K+</div>
                    <div className="text-sm text-gray-600">Avg Salary</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleApplication}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
                  >
                    Apply Now - $1,297
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="px-8 py-3 text-lg">
                    Download Syllabus
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Data Science Analytics" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-white">
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
                Comprehensive Curriculum
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From fundamentals to advanced machine learning, master the complete data science stack
              </p>
            </motion.div>

            <div className="space-y-8">
              {curriculum.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-sm mr-4">
                      {section.week}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 bg-gray-50">
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
                  Career Outcomes
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our data science graduates work at top companies like Microsoft, Google, 
                  and leading African banks and fintech companies.
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Data Science Journey?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join the next cohort and transform your career with data science skills
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Calendar className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Next Cohort</div>
                    <div className="text-purple-100">April 1, 2024</div>
                  </div>
                  <div>
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Format</div>
                    <div className="text-purple-100">Online + Capstone</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Spots Left</div>
                    <div className="text-purple-100">12 Remaining</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">$1,297</div>
                <div className="text-lg text-purple-100">One-time payment or installments available</div>
              </div>

              <Button 
                onClick={handleApplication}
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-semibold"
              >
                Apply Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Apply for Data Science Certification
            </DialogTitle>
          </DialogHeader>
          <Form {...applicationForm}>
            <form onSubmit={applicationForm.handleSubmit(onApplicationSubmit)} className="space-y-4">
              <FormField
                control={applicationForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={applicationForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={applicationForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={applicationForm.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={applicationForm.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={applicationForm.control}
                name="paymentPlan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Option</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="full">Pay in Full - $1,297</SelectItem>
                        <SelectItem value="payment_plan">Monthly Payments - $450/month</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3"
                disabled={applicationMutation.isPending}
              >
                {applicationMutation.isPending ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}