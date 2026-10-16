import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Emeya Zion | Marketing & Digital Solutions",
  description: "Explore Emeya Zion's digital solutions, currently specialized in custom website design and development, landing pages, e-commerce, and maintenance.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
