import { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Client Reviews & Feedback — Emeya Zion",
  description:
    "Genuine feedback and reflections from clients who have partnered with Emeya Zion on custom website design and development.",
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
