import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use E-Book?",
      answer:
        "E-books transform how you read by putting a massive, customizable library right into your pocket. They completely eliminate heavy book bags and packed bookshelves, allowing you to carry thousands of titles on a single, lightweight device. Because you can instantly adjust font sizes, change text spacing, and switch to night mode, they offer a highly comfortable and accessible reading experience that reduces eye strain.",
    },
    {
      id: 2,
      question: "Can I access my E-Book on mobile?",
      answer:
        "Yes, you can easily access your e-books on almost any smartphone or tablet by downloading free reading apps like Kindle, Google Play Books, or Apple Books. These mobile apps automatically sync across all your devices, meaning your current page, notes, and personal highlights automatically update whenever you switch from an e-reader to your phone.",
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "To get a refund for an E-book, you must request it within seven days of purchase through your account's Manage Your Content and Devices page. Simply find the book in your content list, click the actions button next to the title, and select the return option. E-book automatically processes the request and returns the funds to your original payment method within a few business days.",
    },
    {
      id: 4,
      question: "Do you support International payments?",
      answer:
        "Yes, E-book supports international payments for Kindle e-books by accepting major global credit or debit cards like Visa and Mastercard. Furthermore, the E-book features a built-in currency converter to process international cards and lets you update your country settings to purchase items in your local currency.",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
