import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqAccordion = ({ items = [], title, description, enabled = true }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!enabled || !items.length) return null;

  return (
    <section className="agency-faq bg-white text-ink">
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="agency-reveal">
          <p className="section-kicker">FAQ</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {title || "Questions fréquentes"}
          </h2>
          {description && (
            <p className="subtitle-text mt-4 max-w-xl">{description}</p>
          )}
        </div>
        <div className="agency-reveal divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${item._id || index}`;
            return (
              <div key={item._id || item.question}>
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  hidden={!isOpen}
                  className="faq-answer"
                >
                  <p>{item.answer}</p>
                  {item.category && <span>{item.category}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
