import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which devices is the FirstDate app available on?",
    a: "FirstDate is available as a free download on both iOS (iPhone, iPad) and Android via the App Store and Google Play.",
  },
  {
    q: "Is identity verification mandatory?",
    a: "Yes — every member completes a brief in-app verification step before they can interact, which is how we keep trust levels high.",
  },
  {
    q: "Does the app work in my city?",
    a: "FirstDate is live in major urban centers globally and expanding to new regions every month. Download the app to check coverage near you.",
  },
  {
    q: "Is the app free?",
    a: "Downloading and using the core features is completely free. A premium in-app tier unlocks extras like travel mode and unlimited likes.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 lg:py-40 border-t border-hairline">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tighter mb-16 text-center text-text-main">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="bg-surface-muted/40 border border-hairline rounded-2xl px-6 data-[state=open]:border-brand/40 transition-colors"
            >
              <AccordionTrigger className="text-base font-display font-semibold text-text-main hover:no-underline hover:text-brand text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-text-muted leading-relaxed font-light">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}