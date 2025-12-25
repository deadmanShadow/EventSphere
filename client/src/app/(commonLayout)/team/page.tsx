import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";

const bgImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Meet Our Team" path="Team" bgImage={bgImage} />
      <AnimatedSection className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-primary font-bold mb-6">The People Behind EventSphere</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We are a passionate team of developers, designers, and event enthusiasts dedicated to making event management simple and accessible for everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-muted mb-4 animate-pulse" />
                    <h3 className="font-semibold text-lg">Team Member {item}</h3>
                    <p className="text-sm text-muted-foreground">Position</p>
                </div>
            ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
