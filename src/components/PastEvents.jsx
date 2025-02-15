import { Card } from "@/components/ui/card";

export default function PastEvents() {
  const renderEventReel = (index) => (
    <Card key={index} className="aspect-video bg-muted">
      <div className="h-full flex items-center justify-center text-muted-foreground">
        Reel {index + 1}
      </div>
    </Card>
  );

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Past Events
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => renderEventReel(i))}
      </div>
    </section>
  );
}
