export interface Review {
  id: string;
  clientName: string;
  role?: string;
  company?: string;
  projectTitle?: string;
  content: string;
  date?: string;
  rating?: number;
  verified?: boolean;
}

export interface ReviewConfig {
  /**
   * External review platform URL (e.g., Google Business Profile, Trustpilot).
   * Kept undefined until a verified platform destination exists.
   */
  reviewPlatformUrl?: string;
}

export const reviewConfig: ReviewConfig = {
  // Do NOT invent a fake review URL; remains undefined until a verified destination is provided.
  reviewPlatformUrl: undefined,
};

/**
 * Verified client reviews.
 * Kept strictly authentic — empty until verified reviews are submitted.
 */
export const reviews: Review[] = [];
