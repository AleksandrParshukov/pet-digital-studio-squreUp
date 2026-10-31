import TopBlock from '../TopBlock/TopBlock';
import './FAQ.scss';
import top_bg from '@/assets/images/faq-top-bg.png';
import data from '@/data/faq.json';
import type { FAQ } from '@/types/types';
import { useRef, useState } from 'react';

const ts_data: FAQ[] = data;

const middle_index = Math.ceil(ts_data.length / 2);

const first_column = ts_data.slice(0, middle_index);
const second_column = ts_data.slice(middle_index);

export function FAQ() {
  const [open_items, set_open_items] = useState<number[]>([]);
  const answer_refs = useRef<Map<number, HTMLDivElement>>(new Map());

  const toggle_item = (id: number) => {
    const answer_element = answer_refs.current.get(id);

    if (!answer_element) return;

    const is_open = open_items.includes(id);

    if (is_open) {
      // Закрытие
      answer_element.style.height = `${answer_element.scrollHeight}px`;

      requestAnimationFrame(() => {
        answer_element.style.height = '0px';
      });
    } else {
      // Открытие
      answer_element.style.height = `${answer_element.scrollHeight}px`;
    }

    set_open_items((prev) => (is_open ? prev.filter((item_id) => item_id !== id) : [...prev, id]));
  };

  return (
    <section className="faq">
      <TopBlock
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
        background={top_bg}
      />

      <div className="wrapper">
        <ul className="faq__list">
          {first_column.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              is_open={open_items.includes(item.id)}
              on_toggle={toggle_item}
              answer_refs={answer_refs}
            />
          ))}
        </ul>
        <ul className="faq__list">
          {second_column.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={middle_index + index}
              is_open={open_items.includes(item.id)}
              on_toggle={toggle_item}
              answer_refs={answer_refs}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface FAQItemProps {
  item: FAQ;
  index: number;
  is_open: boolean;
  on_toggle: (id: number) => void;
  answer_refs: React.RefObject<Map<number, HTMLDivElement>>;
}

function FAQItem({ item, index, is_open, on_toggle, answer_refs }: FAQItemProps) {
  return (
    <li
      className={`faq__item${is_open ? ' active' : ''}`}
      key={item.id}
      role="button"
      tabIndex={0}
      aria-expanded={is_open}
      aria-controls={`faq-answer-${item.id}`}
      onClick={() => on_toggle(item.id)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          on_toggle(item.id);
        }
      }}>
      <p className="faq__num">{String(index + 1).padStart(2, '0')}</p>
      <p className="faq__question">{item.question}</p>

      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.275 8.0748C18.275 7.37064 17.7042 6.7998 17 6.7998C16.2959 6.7998 15.725 7.37064 15.725 8.0748V15.7248H8.07505C7.37089 15.7248 6.80005 16.2956 6.80005 16.9998C6.80005 17.704 7.37089 18.2748 8.07505 18.2748L15.725 18.2748V25.9248C15.725 26.629 16.2959 27.1998 17 27.1998C17.7042 27.1998 18.275 26.629 18.275 25.9248V18.2748L25.925 18.2748C26.6292 18.2748 27.2 17.704 27.2 16.9998C27.2 16.2956 26.6292 15.7248 25.925 15.7248H18.275V8.0748Z"
          fill="currentColor"
        />
      </svg>

      <div
        className="faq__answer"
        id={`faq-answer-${item.id}`}
        ref={(element) => {
          if (element) {
            answer_refs.current.set(item.id, element);
          } else {
            answer_refs.current.delete(item.id);
          }
        }}
        onTransitionEnd={(event) => {
          if (event.propertyName !== 'height') return;

          if (is_open) {
            event.currentTarget.style.height = 'auto';
          }
        }}>
        <p className="faq__answer-text">{item.answer}</p>
      </div>
    </li>
  );
}
