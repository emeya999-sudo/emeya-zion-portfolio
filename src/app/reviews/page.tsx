import { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Client Reviews & Feedback — SYNDORA",
  description:
    "Genuine feedback and reflections from clients who have partnered with SYNDORA on custom website design and development.",
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
