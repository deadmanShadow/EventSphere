import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";

const bgImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";

const teamMembers = [
  {
    name: "Hasan Rahman",
    role: "Founder & Lead Software Engineer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Sarah Ahmed",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    name: "Nafis Hasan",
    role: "MLOps, DevOps & Data Reliability Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Ayesha Khan",
    role: "Event Coordinator",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Meet Our Team" path="Team" bgImage={bgImage} />

      <AnimatedSection className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-primary font-bold mb-6">
          The People Behind EventSphere
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          We are a passionate team of developers, designers, and event
          enthusiasts dedicated to making event management simple and
          accessible for everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover shadow-md"
                />
              </div>

              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
