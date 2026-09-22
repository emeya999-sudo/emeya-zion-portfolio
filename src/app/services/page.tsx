import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Emeya Zion",
  description: "Web Design, Graphic Design, and Media Buying services focused on helping businesses build a stronger digital presence and reach more customers.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
