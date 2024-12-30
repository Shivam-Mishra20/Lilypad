import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



const FaqSec = ({ faqData }) => {
    return (
        <div className="w-full font-raleway max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-[32px] font-semibold text-center mb-12">
                Frequently Asked Questions
            </h1>
            <Accordion type="single" collapsible className="w-full">
                {faqData.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="text-left text-base font-medium">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FaqSec
