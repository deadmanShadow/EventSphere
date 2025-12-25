import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const bgImage = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop";

export default function BrochurePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Company Brochure" path="Brochure" bgImage={bgImage} />
      <AnimatedSection className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8">
            <div className="p-6 bg-primary/10 rounded-full">
                <FileText size={64} className="text-primary" />
            </div>
        </div>
        <h1 className="text-4xl font-primary font-bold mb-6">Download Our Brochure</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Get a comprehensive overview of EventSphere services, features, and success stories. Download our digital brochure to learn more about how we can help you succeed.
        </p>
        <Button size="lg" className="gap-2">
            <Download size={20} />
            Download PDF
        </Button>
      </AnimatedSection>
    </div>
  );
}
