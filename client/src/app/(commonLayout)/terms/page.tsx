import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";

const bgImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Terms of Use" path="Terms" bgImage={bgImage} />
      <AnimatedSection className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="prose dark:prose-invert max-w-none">
            <h1>Terms and Conditions</h1>
            <p>Last updated: December 25, 2025</p>
            
            <p>Welcome to EventSphere!</p>
            
            <p>These terms and conditions outline the rules and regulations for the use of EventSphere Website.</p>
            
            <h2>1. Introduction</h2>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use EventSphere if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <h2>2. License</h2>
            <p>Unless otherwise stated, EventSphere and/or its licensors own the intellectual property rights for all material on EventSphere. All intellectual property rights are reserved. You may access this from EventSphere for your own personal use subjected to restrictions set in these terms and conditions.</p>
            
            <h2>3. User Accounts</h2>
            <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            
            {/* More placeholder content... */}
             <div className="my-8 p-4 bg-muted rounded-md text-center text-sm text-muted-foreground">
                This is a placeholder for the full Terms of Use document.
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
