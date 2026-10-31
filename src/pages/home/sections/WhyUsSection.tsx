import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/whyus-top-bg.png';
import data from '@/data/idx-whyus.json';
import './WhyUsSection.scss';
import type { WhyUs } from '@/types/types';
import { create_image_map } from '@/utils/create_image_map';

const logos = import.meta.glob<string>('/src/assets/images/idx-whyus/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ts_data: WhyUs[] = data;

const icon_map = create_image_map(logos);

export function WhyUsSection() {
  return (
    <section className="idx-whyus">
      <TopBlock
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        background={top_bg}
      />

      <div className="wrapper">
        <ul className="idx-whyus__list">
          {ts_data.map((item) => (
            <li className="idx-whyus__item" key={item.id}>
              <div className="idx-whyus__icon">
                <img src={icon_map[item.icon]} alt="" />
              </div>
              <p className="idx-whyus__name">{item.name}</p>
              <p className="idx-whyus__desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
