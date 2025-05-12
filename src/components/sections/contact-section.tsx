"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { handleContactFormSubmission } from "@/app/actions";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const result = await handleContactFormSubmission(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error(result.error || "Unknown error occurred");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: (error instanceof Error ? error.message : String(error)) || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-xl bg-background">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-input"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your Email" {...field} className="bg-input"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your Message" {...field} rows={5} className="bg-input"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl bg-background">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-input rounded-lg">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:krbharath0592@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    krbharath0592@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-input rounded-lg">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+918148188661" className="text-muted-foreground hover:text-primary transition-colors">
                    +91-8148188661
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-input rounded-lg">
                <Linkedin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">LinkedIn</h3>
                  <a href="https://linkedin.com/in/k-r-bharath" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    linkedin.com/in/k-r-bharath
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-input rounded-lg">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Chennai, India (Willing to relocate)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
