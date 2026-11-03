import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/works-top-bg.png';
import data from '@/data/works.json';
import './WorksPage.scss';
import type { Works } from '@/types/types';
import { create_image_map } from '@/utils/create_image_map';
import { TitleBlock } from '@/components/TitleBlock/TitleBlock';
import { PromoSection } from '@/components/PromoSection/PromoSection';

const images = import.meta.glob<string>('/src/assets/images/works/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ts_data: Works[] = data;

const images_map = create_image_map(images);

export function WorksPage() {
  return (
    <>
      <section>
        <TopBlock
          title="Our Works"
          description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
          background={top_bg}
        />
      </section>

      <section className="works">
        <div className="wrapper">
          <TitleBlock
            title="At SquareUp"
            desc="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
            note="Here are ten examples of our notable works:"
          />

          <ul className="works__list">
            {ts_data.map((item) => (
              <li className="works__item" key={item.id}>
                <p className="works__caption">{item.caption}</p>

                <div className="works__content">
                  <a className="works__img" href="#">
                    <img src={images_map[item.image]} alt="" />
                  </a>

                  <p className="works__name">{item.name}</p>
                  <a href="#" className="works__link">
                    {item.link}
                  </a>
                  <a href="#" className="works__icon">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.87344 25.1266C9.37136 25.6245 10.1786 25.6245 10.6766 25.1266L22.95 12.8531V22.525C22.95 23.2292 23.5208 23.8 24.225 23.8C24.9292 23.8 25.5 23.2292 25.5 22.525V9.775C25.5 9.07084 24.9292 8.5 24.225 8.5H11.475C10.7708 8.5 10.2 9.07084 10.2 9.775C10.2 10.4792 10.7708 11.05 11.475 11.05H21.1469L8.87344 23.3234C8.37552 23.8214 8.37552 24.6286 8.87344 25.1266Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <p className="works__desc">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PromoSection
        title="Let us Bring your Ideas to Life in the Digital World."
        description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />
    </>
  );
}
