import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — SYNDORA | Marketing & Digital Solutions",
  description: "Explore SYNDORA's digital solutions, currently specialized in custom website design and development, landing pages, e-commerce, and maintenance. Founded by Emeya Zion.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
