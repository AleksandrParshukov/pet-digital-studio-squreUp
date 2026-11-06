import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/services-top-bg.png';
import data from '@/data/idx-services.json';
import './ServicesSection.scss';
import type { Service } from '@/types/types';
import { create_image_map } from '@/utils/create_image_map';
import { Card } from '@/components/Card/Card';

const icons = import.meta.glob<string>('/src/assets/images/idx-services/*.svg', {
  eager: true,
  import: 'default',
})

const icon_map = create_image_map(icons);

const ts_data: Service[] = data;


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
            <Card 
            id={item.id} 
            icon={icon_map[item.icon]} 
            name={item.name} 
            desc={item.desc} 
            btn_text='Learn More' />
          ))}
        </ul>
      </div>
    </section>
  );
}
