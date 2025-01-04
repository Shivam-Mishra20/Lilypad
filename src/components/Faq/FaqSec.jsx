import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/Data/Data"




const FaqSec = () => {
    return (
        <div className=" bg-bgGray dark:bg-black">


            <div className=" w-full  sm:container font-raleway        mx-auto px-10 py-16">
                <h1 className="text-[32px]  dark:text-white text-black font-semibold text-center mb-12">
                    Frequently Asked Questions
                </h1>
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger className="text-left  dark:text-white text-black font-medium">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className=' dark:text-white text-black'>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>

        </div>
    )
}

export default FaqSec
