import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/services-top-bg.png';
import icon from '@/assets/images/promo-icon.svg';
import data from '@/data/about.json';
import './AboutPage.scss';
import type { Process } from '@/types/types';
import { ProcessList } from '@/components/ProcessList/ProcessList';
import { InviteSection } from '@/components/InviteSecton/InviteSecton';

const ts_data: Process[] = data;

export function AboutPage() {
  return (
    <>
      <section>
        <TopBlock
          title="About Us"
          description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
          background={top_bg}
          is_title={true}
        />
      </section>

      <section className="about">
        <div className="wrapper">
          <div className="about__top">
            <div>
              <h2 className="h2">About SquareUp</h2>
              <p className="about__desc">
                SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences.
                We specialize in design, engineering, and project management, helping businesses thrive in the digital
                landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful
                delivery of exceptional digital products. Our process combines industry best practices, creative
                thinking, and a client-centric approach.
              </p>
            </div>

            <div className="about__img">
              <img src={icon} alt="" />
            </div>
          </div>

          <h2 className="about__title">Our Story</h2>

          <ProcessList data={ts_data} />
        </div>
      </section>

      <InviteSection />
    </>
  );
}
