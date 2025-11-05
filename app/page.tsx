import { LandingPage } from "@/components/landing/LandingPage";

const features = [
  {
    title: "Image Upload & Customization",
    description:
      "Upload images and customize size, opacity, borders, shadows, and border radius for complete control over your visuals.",
  },
  {
    title: "Text Overlays & Backgrounds",
    description:
      "Add multiple text layers with custom fonts, colors, and shadows. Choose from gradients, solid colors, or upload your own backgrounds.",
  },
  {
    title: "Professional Export",
    description:
      "Export as PNG (with transparency) or JPG with adjustable quality and scale up to 5x. Perfect for social media and high-resolution output.",
  },
];

export default function Home() {
  return (
    <LandingPage
      heroTitle="Create stunning visual designs"
      heroSubtitle="with Stage"
      heroDescription="A modern canvas editor that brings your ideas to life. Add images, text, backgrounds, and export your creations in high quality. Built for designers and creators."
      ctaLabel="Get Started"
      ctaHref="/home"
      features={features}
    />
  );
}
