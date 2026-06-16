import { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Sawsan Madi Clinic",
  description: "Explore our premium dermatology and aesthetic services.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
