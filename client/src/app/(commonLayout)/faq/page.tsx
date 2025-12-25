import FAQ from "@/components/modules/Home/FAQ"; // Reusing the Home FAQ component for now
import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";

const bgImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Frequently Asked Questions" path="FAQ" bgImage={bgImage} />
      <AnimatedSection className="container mx-auto px-4 py-20">
         <div className="max-w-3xl mx-auto">
             <FAQ />
         </div>
      </AnimatedSection>
    </div>
  );
}
