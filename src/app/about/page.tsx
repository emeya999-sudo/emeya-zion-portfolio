import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Emeya Zion",
  description: "Learn more about Emeya Zion, a digital creative focused on Web Design, Graphic Design, and Media Buying for businesses.",
};

export default function AboutPage() {
  return <AboutClient />;
}
