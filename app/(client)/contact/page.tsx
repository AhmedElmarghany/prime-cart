"use client";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  RiPhoneLine,
  RiTimeLine,
  RiSendPlaneLine,
  RiCheckLine,
  RiMailSendLine,
  RiMapPin2Line,
} from "@remixicon/react";
import { useState } from "react";
import { toast } from "sonner";


const contactInfo = [
  {
    icon: RiMailSendLine,
    label: "Email us",
    value: "AhmedElmarghany01@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:ahmedelmarghany01@gmail.com",
  },
  {
    icon: RiPhoneLine,
    label: "Call us",
    value: "+20 109 549 6727",
    sub: "Mon–Fri, 9am–6pm EST",
    href: "tel:+201095496727",
  },
  {
    icon: RiMapPin2Line,
    label: "Visit us",
    value: "123 Elmarghany St, New Cairo",
    sub: "Egypt",
    href: "#",
  },
  {
    icon: RiTimeLine,
    label: "Working hours",
    value: "Mon – Sat: 9am – 6pm",
    sub: "Thu: 10am – 4pm",
    href: null,
  },
];

const subjectOptions = [
  "Order & Shipping",
  "Returns & Refunds",
  "Product Question",
  "Technical Support",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent successfully!");
  };

  return (
    <div className="py-6 md:py-10 min-h-screen">
      <Container>

        {/* ── Page header ── */}
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Get in touch
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            How can we help you?
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Have a question, feedback, or need support? Fill in the form and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">

          {/* ── Contact info panel ── */}
          <aside className="lg:col-span-2 space-y-4">
            {/* Info cards */}
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card hoverEffect hover:border-primary/25 hover:shadow-sm"
              >
                <div className="shrink-0 p-2.5 rounded-xl bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="hoverEffect text-sm font-semibold text-foreground hover:text-primary block truncate"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{value}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </aside>

          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <RiCheckLine className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-1.5">
                    <h2 className="text-xl font-bold text-foreground">Message received!</h2>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 mt-2"
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className="rounded-xl border-border bg-background focus:border-primary"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className="rounded-xl border-border bg-background focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject — styled select */}
                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="hoverEffect w-full h-10 rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-border"
                    >
                      <option value="">Select a topic…</option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you…"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="rounded-xl border-border bg-background resize-none focus:border-primary"
                      required
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {form.message.length} / 1000
                    </p>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-full font-semibold tracking-wide hoverEffect"
                  >
                    {loading ? (
                      "Sending…"
                    ) : (
                      <>
                        <RiSendPlaneLine className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="hoverEffect underline underline-offset-2 hover:text-primary">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
