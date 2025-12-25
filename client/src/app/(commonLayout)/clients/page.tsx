import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";

const bgImage = "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Our Clients" path="Clients" bgImage={bgImage} />
      <AnimatedSection className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-primary font-bold mb-6">Trusted by Top Organizations</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            We are proud to work with amazing organizations and individuals who use EventSphere to create memorable experiences.
        </p>
        
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos placeholder */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="h-12 bg-muted rounded flex items-center justify-center font-bold text-muted-foreground">
                    CLIENT LOGO {item}
                </div>
            ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
