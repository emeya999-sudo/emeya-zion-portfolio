"use client";

import React, { useState, useEffect, useRef } from "react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState<{ name?: string; rating?: string; experience?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialFocusRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = React.useCallback(() => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => {
      setName("");
      setRating(0);
      setHoveredRating(0);
      setExperience("");
      setErrors({});
      setIsSubmitted(false);
    }, 250);
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus initial input
      setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isFormValid = name.trim().length > 0 && rating > 0 && experience.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; rating?: string; experience?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (rating === 0) {
      newErrors.rating = "Please select a rating";
    }
    if (!experience.trim()) {
      newErrors.experience = "Please tell us about your experience";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  const activeRating = hoveredRating || rating;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-foreground/60 backdrop-blur-xs transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-lg bg-background border border-border-subtle shadow-2xl rounded-sm p-6 sm:p-10 my-auto transition-all duration-300 transform scale-100 opacity-100 motion-reduce:transition-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-text-tertiary hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center text-center py-6 sm:py-8">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h2 id="review-modal-title" className="text-2xl sm:text-3xl font-serif text-foreground mb-3 tracking-tight">
              Thank you for sharing your experience.
            </h2>

            <p className="text-sm sm:text-base text-text-secondary max-w-sm mb-8 leading-relaxed">
              Your review has been received. We genuinely appreciate you taking the time to share direct feedback about collaborating with SYNDORA.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="btn-primary w-full sm:w-auto px-8"
            >
              CLOSE
            </button>
          </div>
        ) : (
          /* REVIEW FORM */
          <div className="flex flex-col">
            <div className="mb-6 pr-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-6 bg-brand-accent" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-text-tertiary">
                  Client Feedback
                </span>
              </div>
              <h2 id="review-modal-title" className="text-2xl sm:text-3xl font-serif text-foreground tracking-tight">
                Leave a Review
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
                Tell us about your experience working with SYNDORA on your website project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="review-name"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground"
                >
                  Your Name <span className="text-brand-accent" aria-hidden="true">*</span>
                </label>
                <input
                  ref={initialFocusRef}
                  type="text"
                  id="review-name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-border-strong py-2.5 text-sm sm:text-base text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-brand-accent transition-colors"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs text-brand-accent mt-0.5">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Star Rating Field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    id="rating-label"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Your Rating <span className="text-brand-accent" aria-hidden="true">*</span>
                  </label>
                  {rating > 0 ? (
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                      {rating} / 5 stars
                    </span>
                  ) : (
                    <span className="text-[11px] text-text-tertiary tracking-wider uppercase">
                      Select rating
                    </span>
                  )}
                </div>

                <div
                  role="radiogroup"
                  aria-labelledby="rating-label"
                  className="flex items-center gap-1.5 py-1"
                >
                  {[1, 2, 3, 4, 5].map((starValue) => {
                    const isFilled = starValue <= activeRating;
                    return (
                      <button
                        key={starValue}
                        type="button"
                        role="radio"
                        aria-checked={rating === starValue}
                        aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
                        onClick={() => {
                          setRating(starValue);
                          if (errors.rating) setErrors((prev) => ({ ...prev, rating: undefined }));
                        }}
                        onMouseEnter={() => setHoveredRating(starValue)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onFocus={() => setHoveredRating(starValue)}
                        onBlur={() => setHoveredRating(0)}
                        className="p-1 sm:p-1.5 rounded-xs transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                      >
                        <svg
                          className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-150 ${
                            isFilled
                              ? "text-brand-accent fill-current"
                              : "text-border-strong hover:text-brand-accent/60 fill-transparent stroke-current stroke-[1.5]"
                          }`}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </button>
                    );
                  })}
                </div>
                {errors.rating && (
                  <span className="text-xs text-brand-accent mt-0.5">
                    {errors.rating}
                  </span>
                )}
              </div>

              {/* Experience Field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="review-experience"
                    className="text-xs font-semibold uppercase tracking-wider text-foreground"
                  >
                    Your Experience <span className="text-brand-accent" aria-hidden="true">*</span>
                  </label>
                  <span className="text-[11px] text-text-tertiary">
                    {experience.length} / 1000
                  </span>
                </div>
                <textarea
                  id="review-experience"
                  rows={4}
                  maxLength={1000}
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                    if (errors.experience) setErrors((prev) => ({ ...prev, experience: undefined }));
                  }}
                  placeholder="Tell us about your experience working with SYNDORA..."
                  className="w-full bg-surface-secondary/40 border border-border-strong p-3.5 rounded-xs text-sm sm:text-base text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-brand-accent transition-colors resize-y leading-relaxed"
                  aria-required="true"
                  aria-invalid={!!errors.experience}
                  aria-describedby={errors.experience ? "experience-error" : undefined}
                />
                {errors.experience && (
                  <span id="experience-error" className="text-xs text-brand-accent mt-0.5">
                    {errors.experience}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full text-center py-3.5 px-6 font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-normal rounded-xs ${
                    isFormValid
                      ? "btn-primary"
                      : "bg-surface-secondary text-text-tertiary border border-border-subtle cursor-not-allowed opacity-70"
                  }`}
                >
                  SUBMIT REVIEW <span aria-hidden="true" className="ml-1">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
