import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

export default function FAQSection() {
  const { data: faqs, isLoading } = useQuery({
    queryKey: ["/api/faqs"]
  });

  const renderLoadingSkeleton = () => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        FAQs
      </h2>
      <div>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-12 mb-4" />
        ))}
      </div>
    </section>
  );

  const renderFAQs = () => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        FAQs
      </h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs?.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id.toString()}>
            <AccordionTrigger>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );

  return isLoading ? renderLoadingSkeleton() : renderFAQs();
}
