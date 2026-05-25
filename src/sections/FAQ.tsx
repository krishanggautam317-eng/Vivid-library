import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What are the library timings?",
    a: "We are open 24/7, 365 days a year. You can study at any time that suits your schedule."
  },
  {
    q: "How do I check seat availability?",
    a: "Our live tracker on the website updates in real-time. Check the Seat Availability section before visiting."
  },
  {
    q: "Can I bring food inside?",
    a: "No food or drinks (except water in sealed bottles) are allowed inside the main study hall to maintain cleanliness and prevent odors."
  },
  {
    q: "Is WiFi available for all members?",
    a: "Yes, high-speed 5G WiFi is included in all our plans at no extra cost."
  },
  {
    q: "Can I reserve a specific seat?",
    a: "Weekly and Monthly pass holders get a reserved, fixed seat. Daily pass holders can choose any unreserved available seat."
  },
  {
    q: "Is there CCTV surveillance?",
    a: "Yes, we have 24/7 CCTV surveillance covering all areas to ensure your safety and security."
  },
  {
    q: "How do I pay for a plan?",
    a: "You can pay via UPI, cash, or online bank transfer at the front desk. Contact us via WhatsApp to pre-book."
  },
  {
    q: "Is there a student discount?",
    a: "Yes! Show your valid college or school ID card for ₹50 off on our monthly plans."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background/50 relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-muted-foreground">Everything you need to know about Gyan Sarovar.</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-card border border-white/10 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
