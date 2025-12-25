import AnimatedSection from "@/components/shared/AnimatedSection";
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";

const bgImage =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop";

const clients = [
  {
    name: "Michael Johnson",
    company: "Eventify Co.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    name: "Emily Carter",
    company: "Urban Events",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
  {
    name: "Daniel Smith",
    company: "TechSummit",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Sophia Williams",
    company: "Creative Minds",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    name: "James Anderson",
    company: "NextGen Corp",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80",
  },
  {
    name: "Ava Brown",
    company: "Inspire Events",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
  },
  {
    name: "Noah Wilson",
    company: "Global Meetups",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  },
  {
    name: "Olivia Martin",
    company: "Elite Conferences",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&q=80",
  },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Our Clients" path="Clients" bgImage={bgImage} />

      <AnimatedSection className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-primary font-bold mb-6">
          Trusted by Amazing People
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          We are proud to work with organizations and individuals who trust
          EventSphere to power their events.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
              <div className="relative w-20 h-20 mb-3">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="rounded-full object-cover shadow-md"
                />
              </div>

              <h3 className="text-sm font-semibold">{client.name}</h3>
              <p className="text-xs text-muted-foreground">
                {client.company}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
