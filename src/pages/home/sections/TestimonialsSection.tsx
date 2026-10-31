import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/works-top-bg.png';
import data from '@/data/idx-testimonials.json';
import './TestimonialsSection.scss';
import type { Testimonials } from '@/types/types';
import { create_image_map } from '@/utils/create_image_map';

const logos = import.meta.glob<string>('/src/assets/images/idx-testimonials/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ts_data: Testimonials[] = data;

const avatar_map = create_image_map(logos);

export function TestimonialsSection() {
  return (
    <section className="idx-testimonials">
      <TopBlock
        title="What our Clients say About us"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        background={top_bg}
      />

      <div className="wrapper">
        <ul className="idx-testimonials__list">
          {ts_data.map((item) => (
            <li className="idx-testimonials__item" key={item.id}>
              <p className="idx-testimonials__caption">{item.caption}</p>
              <p className="idx-testimonials__text">{item.text}</p>
              <div className="idx-testimonials__author">
                <img className="idx-testimonials__author-avatar" src={avatar_map[item.author_avatar]} alt="" />
                <div className="idx-testimonials__author-info">
                  <p className="idx-testimonials__author-name">{item.author_name}</p>
                  <p className="idx-testimonials__author-position">{item.author_position}</p>
                </div>

                <a href="#" className="idx-testimonials__link btn btn-secondary">
                  Open Website
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
