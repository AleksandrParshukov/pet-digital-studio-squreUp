import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/faq-top-bg.png';
import benefits from '@/data/careers-benefits.json';
import data from '@/data/careers.json';
import './CareersPage.scss';
import { TitleBlock } from '@/components/TitleBlock/TitleBlock';
import type { List, Benefits } from '@/types/careers';
import { Card } from '@/components/Card/Card';
import { create_image_map } from '@/utils/create_image_map';
import { InviteSection } from '@/components/InviteSecton/InviteSecton';

const icons = import.meta.glob<string>('/src/assets/images/careers/*.svg', {
  eager: true,
  import: 'default',
});

const icon_map = create_image_map(icons);

const ts_data: List[] = data;
const ts_benefits: Benefits[] = benefits;

export function CareersPage() {
  return (
    <>
      <section>
        <TopBlock
          title="Join Our Team at SquareUp"
          description="Unlock your potential and join our team of innovators and problem solvers."
          background={top_bg}
          is_title={true}
        />
      </section>

      <section className="benefits">
        <div className="wrapper">
          <TitleBlock
            title="Welcome to SquareUp, where talent meets opportunity!"
            desc="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
            note="Why Work at SquareUp?"
          />

          <ul className="benefits__list">
            {ts_benefits.map((item) => (
              <li className="benefits__item">
                <p className="benefits__caption">{item.caption}</p>
                <p className="benefits__desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="careers">
        <div className="wrapper">
          <TitleBlock
            title="Current Openings"
            desc="We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions."
          />

          <ul className="careers__cats">
            {ts_data.map((cat) => (
              <li key={cat.cat_id}>
                <p className="careers__cat-name">{cat.cat_name}</p>
                <ul className="careers__list">
                  {cat.items.map((item) => (
                    <Card
                      id={item.id}
                      icon={icon_map[item.icon]}
                      name={item.name}
                      desc={item.desc}
                      btn_text="Learn More"
                    />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InviteSection />
    </>
  );
}
