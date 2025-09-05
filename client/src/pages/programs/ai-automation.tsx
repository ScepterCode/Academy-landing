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

export default function AIAutomationBootcamp() {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const { toast } = useToast();

  const curriculum = [
    {
      week: 1,
      title: "AI Foundations & Tools Mastery",
      topics: [
        "AI/ML fundamentals for business applications",
        "ChatGPT, Claude, and GPT-4 advanced techniques",
        "No-code automation platforms overview",
        "Zapier, Make.com, and custom integrations"
      ]
    },
    {
      week: 2,
      title: "Advanced Agentic AI Systems",
      topics: [
        "Multi-agent AI architectures",
        "Custom AI model fine-tuning",
        "API integrations and webhooks",
        "Intelligent decision-making systems"
      ]
    },
    {
      week: 3,
      title: "Business Problem Solving",
      topics: [
        "ROI calculation and client presentations",
        "Process mapping and optimization",
        "Stakeholder communication strategies",
        "Project management for AI implementations"
      ]
    },
    {
      week: 4,
      title: "Launch Your AI Career",
      topics: [
        "Portfolio development and showcasing",
        "Client acquisition and networking",
        "Pricing strategies and proposals",
        "Building long-term client relationships"
      ]
    }
  ];

  const outcomes = [
    "Build complete AI automation solutions from scratch",
    "Command $100-500/hour consulting rates",
    "Generate 6-figure annual income potential",
    "Work remotely with global clients",
    "Lead digital transformation initiatives",
    "Start your own AI automation agency"
  ];

  const features = [
    "30-Day intensive training program",
    "Live weekly coaching with industry experts",
    "$2,000+ worth of premium AI tools included",
    "Done-for-you templates and systems",
    "Lifetime community access and networking",
    "Job placement assistance and career support",
    "Industry-recognized certification",
    "Personal mentorship sessions"
  ];

  // Enrollment form
  const enrollmentForm = useForm<InsertEnrollment>({
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

  // Enrollment mutation
  const enrollmentMutation = useMutation({
    mutationFn: async (data: InsertEnrollment) => {
      const response = await apiRequest('POST', '/api/enrollments', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Enrollment Successful!",
        description: "Welcome to AI Automation Academy! Check your email for next steps.",
      });
      setEnrollmentOpen(false);
      enrollmentForm.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/enrollments'] });
    },
    onError: (error) => {
      toast({
        title: "Enrollment Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  });

  const handleEnrollment = () => {
    setEnrollmentOpen(true);
  };

  const onEnrollmentSubmit = (data: InsertEnrollment) => {
    enrollmentMutation.mutate(data);
  };

  const countries = [
    "Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco", 
    "Ethiopia", "Uganda", "Tanzania", "Rwanda", "Senegal", "Ivory Coast",
    "Other African Country", "Outside Africa"
  ];

  const experienceLevels = [
    "Complete Beginner",
    "Some Tech Experience",
    "Business Professional",
    "Marketing/Sales",
    "Developer/Technical",
    "Entrepreneur/Business Owner"
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  Most Popular Program
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  6-Figure AI Automations Career Bootcamp
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Master AI automation tools and build systems that save businesses thousands monthly. 
                  Transform your career in just 30 days with our intensive, hands-on program.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">30</div>
                    <div className="text-sm text-gray-600">Days</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50</div>
                    <div className="text-sm text-gray-600">Max Students</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$150K+</div>
                    <div className="text-sm text-gray-600">Avg Income</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleEnrollment}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    Enroll Now - $497
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="px-8 py-3 text-lg">
                    Download Curriculum
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="AI Automation Training" 
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">Next Cohort Starts</div>
                        <div className="text-lg font-bold text-gray-900">March 15, 2024</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Early Bird Price</div>
                        <div className="text-lg font-bold text-green-600">Save $1,500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
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
                What You'll Learn
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the complete AI automation stack with hands-on projects and real-world applications
              </p>
            </motion.div>

            <div className="space-y-8">
              {curriculum.map((week, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg mr-4">
                      {week.week}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {week.topics.map((topic, topicIndex) => (
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
                  Our graduates go on to build successful careers in AI automation, 
                  working with top companies or starting their own agencies.
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Graduate Income</span>
                    <span className="text-2xl font-bold text-green-600">$150K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Job Placement Rate</span>
                    <span className="text-2xl font-bold text-blue-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-purple-600">4.9/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Career Advancement</span>
                    <span className="text-2xl font-bold text-orange-600">88%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
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
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support and resources to ensure your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <Check className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Enrollment */}
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
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join the next cohort and start building your 6-figure AI automation career
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Calendar className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Next Cohort</div>
                    <div className="text-blue-100">March 15, 2024</div>
                  </div>
                  <div>
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Format</div>
                    <div className="text-blue-100">Hybrid Online/In-Person</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Spots Left</div>
                    <div className="text-blue-100">Only 17 Remaining</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-lg text-blue-100 mb-2">Early Bird Special (Limited Time)</div>
                <div className="text-5xl font-bold mb-2">$497</div>
                <div className="text-lg text-blue-100">
                  <span className="line-through">$2,997</span> • Save $2,500
                </div>
              </div>

              <Button 
                onClick={handleEnrollment}
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-semibold"
              >
                Secure Your Spot Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>

              <p className="text-blue-100 text-sm mt-4">
                30-day money-back guarantee • Lifetime access • Job placement support
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrollment Dialog */}
      <Dialog open={enrollmentOpen} onOpenChange={setEnrollmentOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Secure Your Spot in the Bootcamp
            </DialogTitle>
          </DialogHeader>
          <Form {...enrollmentForm}>
            <form onSubmit={enrollmentForm.handleSubmit(onEnrollmentSubmit)} className="space-y-4">
              <FormField
                control={enrollmentForm.control}
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
                control={enrollmentForm.control}
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
                control={enrollmentForm.control}
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
                control={enrollmentForm.control}
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
                control={enrollmentForm.control}
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
                control={enrollmentForm.control}
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
                        <SelectItem value="full">Pay in Full - $497 (Save $94)</SelectItem>
                        <SelectItem value="payment_plan">3 Monthly Payments - $197/month</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3"
                disabled={enrollmentMutation.isPending}
              >
                {enrollmentMutation.isPending ? "Processing..." : "Secure My Spot Now"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}