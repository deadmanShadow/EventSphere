import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";

const bgImage = "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Privacy Policy" path="Privacy" bgImage={bgImage} />
      <AnimatedSection className="container mx-auto px-4 py-20 max-w-4xl">
         <div className="prose dark:prose-invert max-w-none">
            <h1>Privacy Policy</h1>
            <p>Last updated: December 25, 2025</p>
            
            <p>At EventSphere, accessible from https://eventsphere.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by EventSphere and how we use it.</p>
            
            <h2>Log Files</h2>
            <p>EventSphere follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics.</p>
            
            <h2>Cookies and Web Beacons</h2>
            <p>Like any other website, EventSphere uses cookies. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited.</p>
            
             <div className="my-8 p-4 bg-muted rounded-md text-center text-sm text-muted-foreground">
                This is a placeholder for the full Privacy Policy document.
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
