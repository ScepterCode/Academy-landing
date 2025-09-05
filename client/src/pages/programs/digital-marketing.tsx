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

export default function DigitalMarketingMastery() {
  const [applicationOpen, setApplicationOpen] = useState(false);
  const { toast } = useToast();

  const curriculum = [
    {
      week: "Weeks 1-2",
      title: "Digital Marketing Fundamentals",
      topics: [
        "Digital marketing landscape overview",
        "Customer journey mapping and personas",
        "Marketing funnel optimization",
        "Digital marketing strategy development"
      ]
    },
    {
      week: "Weeks 3-4", 
      title: "Content Marketing & SEO",
      topics: [
        "Content strategy and creation",
        "Search engine optimization (SEO)",
        "Keyword research and analysis",
        "Content distribution and promotion"
      ]
    },
    {
      week: "Weeks 5-6",
      title: "Social Media & PPC Advertising",
      topics: [
        "Social media marketing strategies",
        "Facebook and Instagram advertising",
        "Google Ads and pay-per-click campaigns",
        "Campaign optimization and testing"
      ]
    },
    {
      week: "Weeks 7-8",
      title: "Analytics & Automation",
      topics: [
        "Google Analytics and conversion tracking",
        "Email marketing automation",
        "Marketing analytics and reporting",
        "ROI measurement and optimization"
      ]
    }
  ];

  const outcomes = [
    "Create effective multi-channel marketing campaigns",
    "Optimize conversion funnels and customer acquisition",
    "Build and manage strong brand presence online",
    "Generate qualified leads and drive sales growth",
    "Master digital advertising platforms and analytics",
    "Launch successful marketing careers or agencies"
  ];

  const features = [
    "8-week practical program",
    "Real campaign creation and management",
    "Industry-standard tools and platforms",
    "Expert mentorship and feedback",
    "Portfolio of successful campaigns",
    "Certification in key marketing platforms",
    "Career coaching and job placement",
    "Marketing toolkit and templates"
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
    "Small Business Owner",
    "Marketing Professional",
    "Sales Background",
    "Content Creator",
    "Entrepreneur"
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Digital Marketing Mastery
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Master modern digital marketing including social media, content marketing, 
                  SEO, and paid advertising to drive business growth and customer acquisition.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">8</div>
                    <div className="text-sm text-gray-600">Weeks</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">35</div>
                    <div className="text-sm text-gray-600">Max Students</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">88%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$55K+</div>
                    <div className="text-sm text-gray-600">Avg Salary</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleApplication}
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg"
                  >
                    Apply Now - $697
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Digital Marketing" 
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
                From strategy to execution, master all aspects of modern digital marketing
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
                    <div className="w-20 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center font-bold text-sm mr-4">
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
                  Our digital marketing graduates work at agencies, tech companies, 
                  and startups, or launch their own successful marketing agencies.
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-6 w-6 text-pink-600 mt-1 mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Master Digital Marketing?
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                Join the next cohort and drive growth through digital channels
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Calendar className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Next Cohort</div>
                    <div className="text-pink-100">March 25, 2024</div>
                  </div>
                  <div>
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Format</div>
                    <div className="text-pink-100">Online + Live Sessions</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold mb-1">Spots Left</div>
                    <div className="text-pink-100">22 Remaining</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">$697</div>
                <div className="text-lg text-pink-100">Includes marketing tools and templates</div>
              </div>

              <Button 
                onClick={handleApplication}
                className="bg-white text-pink-600 hover:bg-gray-100 px-12 py-4 text-xl font-semibold"
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
              Apply for Digital Marketing Mastery
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
                        <SelectItem value="full">Pay in Full - $697</SelectItem>
                        <SelectItem value="payment_plan">Monthly Payments - $250/month</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3"
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