
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are these calculators free to use?",
    answer:
      "Yes, all the calculators in this toolkit are completely free to use. You can use them as many times as you need without any limitations.",
  },
  {
    question: "How accurate are the calculations?",
    answer:
      "Our calculators use standard financial formulas to provide accurate results. All calculations are performed client-side for speed and privacy.",
  },
  {
    question: "Can I save my calculation results?",
    answer:
      "Yes, you can save individual calculation results and export them as PDF reports for your records or to share with clients and colleagues.",
  },
  {
    question: "Do you store my financial data?",
    answer:
      "No, we don't store any of your data on our servers. All calculations are performed in your browser and stay on your device.",
  },
  {
    question: "Can I use these calculators on my phone?",
    answer:
      "Absolutely! Our calculator toolkit is fully responsive and works on desktops, tablets, and mobile phones.",
  },
  {
    question: "How do I report a calculation error?",
    answer:
      "If you believe you've found an error in any of our calculators, please contact our support team with details of the calculation, and we'll investigate promptly.",
  },
];

export function FAQ() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-finance-darkBlue">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Get answers to common questions about our business calculator toolkit.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
