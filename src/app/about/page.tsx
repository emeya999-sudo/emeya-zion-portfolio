import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About SYNDORA — Marketing & Digital Solutions | Founded by Emeya Zion",
  description: "Learn more about SYNDORA, a marketing and digital solutions company founded by Emeya Zion, currently specialized in custom website design and development.",
};

export default function AboutPage() {
  return <AboutClient />;
}
