"use client";

import React, { useState } from "react";
import { CONTACT_CONFIG, getContactFormSubmitUrl, getCallMeUrl } from "@/lib/contact";

const servicesList = [
  "Web Design",
  "UI/UX Design",
  "Web App Development",
  "Graphic Design",
  "Media Buying",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    details: "",
  });
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!formData.budget.trim()) newErrors.budget = "Please enter your budget";
    if (!formData.details.trim()) newErrors.details = "Please share some details about your project";
    if (selectedServices.length === 0) newErrors.services = "Please select at least one service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const whatsappUrl = getContactFormSubmitUrl({
      ...formData,
      services: selectedServices
    });
    
    // Open WhatsApp in a new tab so the form page isn't destroyed
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="flex-1 flex flex-col pt-32 pb-32">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left / Intro */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-6">
            Contact Me
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight mb-8">
            Have a project in mind?<br />
            Let's make it happen.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-md mb-12">
            I partner with businesses, ambitious founders, and creative individuals to design and build digital experiences that demand attention and drive results.
          </p>

          <div className="flex flex-col gap-6 mt-auto border-t border-border-subtle pt-12">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-2">WhatsApp</div>
              <a href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-lg font-serif text-foreground hover:text-brand-accent transition-colors">
                {CONTACT_CONFIG.whatsappDisplayNumber}
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-2">Phone</div>
              <a href={getCallMeUrl()} className="text-lg font-serif text-foreground hover:text-brand-accent transition-colors">
                {CONTACT_CONFIG.phoneNumber}
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-2">Email</div>
              <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-lg font-serif text-foreground hover:text-brand-accent transition-colors">
                {CONTACT_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Right / Form */}
        <div className="bg-surface-secondary/30 border border-border-subtle p-8 md:p-12 rounded-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground uppercase tracking-wide">
                Name <span className="text-brand-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-border-strong py-3 text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-brand-accent transition-colors"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <span id="name-error" className="text-xs text-brand-accent">{errors.name}</span>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground uppercase tracking-wide">
                Phone Number <span className="text-brand-accent">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="0800 000 0000"
                className="w-full bg-transparent border-b border-border-strong py-3 text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-brand-accent transition-colors"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && <span id="phone-error" className="text-xs text-brand-accent">{errors.phone}</span>}
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-sm font-medium text-foreground uppercase tracking-wide">
                Budget <span className="text-brand-accent">*</span>
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="e.g. ₦100,000 – ₦300,000"
                className="w-full bg-transparent border-b border-border-strong py-3 text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-brand-accent transition-colors"
                aria-invalid={!!errors.budget}
                aria-describedby={errors.budget ? "budget-error" : undefined}
              />
              {errors.budget && <span id="budget-error" className="text-xs text-brand-accent">{errors.budget}</span>}
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-foreground uppercase tracking-wide">
                Services <span className="text-brand-accent">*</span>
              </span>
              <div className="flex flex-wrap gap-3">
                {servicesList.map(service => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        toggleService(service);
                        if (errors.services) setErrors(prev => ({ ...prev, services: "" }));
                      }}
                      className={`px-4 py-2 text-sm font-medium border rounded-sm transition-all duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                        isSelected 
                          ? "bg-foreground text-background border-foreground" 
                          : "bg-transparent text-text-secondary border-border-strong hover:border-foreground hover:text-foreground"
                      }`}
                      aria-pressed={isSelected}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
              {errors.services && <span className="text-xs text-brand-accent">{errors.services}</span>}
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-sm font-medium text-foreground uppercase tracking-wide">
                Project Details <span className="text-brand-accent">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Tell me a little about your project, what you need, and what you're trying to achieve."
                rows={4}
                className="w-full bg-transparent border-b border-border-strong py-3 text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-brand-accent transition-colors resize-none"
                aria-invalid={!!errors.details}
                aria-describedby={errors.details ? "details-error" : undefined}
              />
              {errors.details && <span id="details-error" className="text-xs text-brand-accent">{errors.details}</span>}
            </div>

            {/* Submit Actions */}
            <div className="flex flex-col gap-4 mt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center p-4 bg-foreground text-background text-sm font-semibold tracking-widest uppercase rounded-sm shadow-sm hover:bg-foreground/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-normal"
              >
                Send Message on WhatsApp
              </button>
              
              <div className="text-center">
                <span className="text-xs text-text-tertiary uppercase tracking-widest font-medium mr-4">Or</span>
                <a 
                  href={getCallMeUrl()}
                  className="inline-flex items-center justify-center text-sm font-medium tracking-wide uppercase text-brand-accent hover:text-brand-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  Call Me &rarr;
                </a>
              </div>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}
