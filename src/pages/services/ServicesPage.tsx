import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/services-top-bg.png';
import data from '@/data/services.json';
import './ServicesPage.scss';
import type { Block } from '@/types/services';
import { create_image_map } from '@/utils/create_image_map';
import { PromoSection } from '@/components/PromoSection/PromoSection';
import { TitleBlock } from '@/components/TitleBlock/TitleBlock';

const icons = import.meta.glob<string>('/src/assets/images/services/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ts_data: Block[] = data;

const icon_map = create_image_map(icons);

export function ServicesPage() {
  return (
    <>
      <section>
        <TopBlock
          title="Our Services"
          description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          background={top_bg}
        />
      </section>

      <section className="services">
        <div className="wrapper">
          {ts_data.map((block) => (
            <div className="services__block" key={block.id}>
              <TitleBlock title={block.title} desc={block.desc} note={block.note} />

              <ul className="services__categories">
                {block.lists.map((list) => (
                  <li className="services__category" key={list.id}>
                    <p className="services__category-name">{list.caption}</p>
                    <ul className="services__list">
                      {list.items.map((item) => (
                        <li className="services__item" key={item.id}>
                          <div className="services__icon">
                            <img src={icon_map[item.icon]} alt="" />
                          </div>
                          <p className="services__text">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PromoSection
        title="Let us Bring your Ideas to Life in the Digital World."
        description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />
    </>
  );
}
