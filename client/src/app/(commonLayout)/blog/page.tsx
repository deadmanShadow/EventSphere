import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";

// Using a placeholder image or a solid color if image not available
const bgImage = "https://images.unsplash.com/photo-1499750310159-5b5f10e37821?q=80&w=2070&auto=format&fit=crop";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Our Blog" path="Blog" bgImage={bgImage} />
      <AnimatedSection className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-primary font-bold mb-6 text-center">Latest News & Updates</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Stay updated with the latest trends in event management, tips for hosts, and stories from our community.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {/* Placeholder placeholders */}
            {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                    <div className="h-48 bg-muted/50 w-full animate-pulse" />
                    <div className="p-6">
                        <div className="h-4 bg-muted w-1/3 mb-4 rounded" />
                        <div className="h-6 bg-muted w-3/4 mb-2 rounded" />
                        <div className="h-4 bg-muted w-full mb-4 rounded" />
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12 text-muted-foreground">
            <p>More exciting content coming soon!</p>
        </div>
      </AnimatedSection>
    </div>
  );
}
