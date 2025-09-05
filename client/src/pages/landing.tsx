import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEnrollmentSchema, insertConsultationSchema, type InsertEnrollment, type InsertConsultation } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Curriculum } from "@/components/landing/Curriculum";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { Instructor } from "@/components/landing/Instructor";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(true);
  const { toast } = useToast();

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

  // Consultation form
  const consultationForm = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: undefined,
      message: undefined,
      preferredTime: undefined
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

  // Consultation mutation
  const consultationMutation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      const response = await apiRequest('POST', '/api/consultations', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Booked!",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      setConsultationOpen(false);
      consultationForm.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/consultations'] });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  });

  const handleEnrollment = () => {
    setEnrollmentOpen(true);
  };

  const handleVideoClick = () => {
    setVideoOpen(true);
  };

  const handleConsultation = () => {
    setConsultationOpen(true);
  };

  const handlePaymentPlan = () => {
    enrollmentForm.setValue('paymentPlan', 'payment_plan');
    setEnrollmentOpen(true);
  };

  const onEnrollmentSubmit = (data: InsertEnrollment) => {
    enrollmentMutation.mutate(data);
  };

  const onConsultationSubmit = (data: InsertConsultation) => {
    consultationMutation.mutate(data);
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
    <div className="min-h-screen bg-background text-foreground" data-testid="landing-page">
      <Navigation onEnrollClick={handleEnrollment} />
      <Hero onEnrollClick={handleEnrollment} onVideoClick={handleVideoClick} />
      <Problem />
      <Solution onEnrollClick={handleEnrollment} />
      <Curriculum />
      <SuccessStories onVideoClick={handleVideoClick} />
      <Instructor />
      <Pricing onEnrollClick={handleEnrollment} onPaymentPlanClick={handlePaymentPlan} />
      <FAQ onConsultationClick={handleConsultation} />
      <FinalCTA onEnrollClick={handleEnrollment} />
      <Footer />

      {/* Sticky CTA Button - Mobile Only */}
      {stickyVisible && (
        <div className="fixed bottom-4 right-4 z-50 md:hidden" data-testid="sticky-cta">
          <Button 
            onClick={handleEnrollment}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            data-testid="button-enroll-sticky"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Enroll Now
          </Button>
        </div>
      )}

      {/* Enrollment Dialog */}
      <Dialog open={enrollmentOpen} onOpenChange={setEnrollmentOpen}>
        <DialogContent className="sm:max-w-[500px]" data-testid="enrollment-dialog">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
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
                      <Input placeholder="Enter your full name" {...field} data-testid="input-full-name" />
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
                      <Input type="email" placeholder="Enter your email" {...field} data-testid="input-email" />
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
                      <Input placeholder="Enter your phone number" {...field} data-testid="input-phone" />
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
                        <SelectTrigger data-testid="select-country">
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
                        <SelectTrigger data-testid="select-experience">
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
                        <SelectTrigger data-testid="select-payment-plan">
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
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-3 rounded-xl hover:scale-105 transition-transform"
                disabled={enrollmentMutation.isPending}
                data-testid="button-submit-enrollment"
              >
                {enrollmentMutation.isPending ? "Processing..." : "Secure My Spot Now"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Consultation Dialog */}
      <Dialog open={consultationOpen} onOpenChange={setConsultationOpen}>
        <DialogContent className="sm:max-w-[500px]" data-testid="consultation-dialog">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              Book Your Free Consultation
            </DialogTitle>
          </DialogHeader>
          <Form {...consultationForm}>
            <form onSubmit={consultationForm.handleSubmit(onConsultationSubmit)} className="space-y-4">
              <FormField
                control={consultationForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} data-testid="input-consultation-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={consultationForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} data-testid="input-consultation-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={consultationForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} data-testid="input-consultation-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={consultationForm.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Time (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Weekdays 2-5 PM WAT" {...field} data-testid="input-consultation-time" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={consultationForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Questions/Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any specific questions about the bootcamp?" 
                        {...field} 
                        data-testid="input-consultation-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-3 rounded-xl hover:scale-105 transition-transform"
                disabled={consultationMutation.isPending}
                data-testid="button-submit-consultation"
              >
                {consultationMutation.isPending ? "Booking..." : "Book Free Consultation"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Video Modal - Placeholder */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[800px]" data-testid="video-dialog">
          <DialogHeader>
            <DialogTitle>Success Story Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Video player would be implemented here</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
