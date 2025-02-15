import { Card, CardContent } from "@/components/ui/card";
import { SiNetflix } from "react-icons/si";

export default function SponsorsSection() {
  const renderSponsorCard = (index) => (
    <Card key={index} className="flex items-center justify-center p-8">
      <CardContent className="p-0">
        <SiNetflix className="w-16 h-16 text-red-600" />
        <div className="text-center mt-2">
          Sponsor Name
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Sponsors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => renderSponsorCard(i))}
      </div>
    </section>
  );
}
