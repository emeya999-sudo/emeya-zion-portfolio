import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Emeya Zion — Marketing & Digital Solutions",
  description: "Learn more about Emeya Zion's marketing and digital solutions, currently specialized in custom website design and development.",
};

export default function AboutPage() {
  return <AboutClient />;
}
