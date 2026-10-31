import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/services-top-bg.png';
import data from '@/data/idx-services.json';
import './ServicesSection.scss';
import type { Service } from '@/types/types';
import { create_image_map } from '@/utils/create_image_map';

const logos = import.meta.glob<string>('/src/assets/images/idx-services/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ts_data: Service[] = data;

const icon_map = create_image_map(logos);

export function ServicesSection() {
  return (
    <section className="idx-services">
      <TopBlock
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        background={top_bg}
      />

      <div className="wrapper">
        <ul className="idx-services__list">
          {ts_data.map((item) => (
            <li className="idx-services__item" key={item.id}>
              <div className="idx-services__icon">
                <img src={icon_map[item.icon]} alt="" />
              </div>
              <p className="idx-services__name">{item.name}</p>
              <p className="idx-services__desc">{item.desc}</p>
              <a href="#" className="idx-services__link btn btn-secondary">
                Learn More
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
