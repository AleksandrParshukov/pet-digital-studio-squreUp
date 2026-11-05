import TopBlock from '@/components/TopBlock/TopBlock';
import top_bg from '@/assets/images/faq-top-bg.png';
import data from '@/data/process.json';
import type { Process } from '@/types/types';
import { TitleBlock } from '@/components/TitleBlock/TitleBlock';
import { PromoSection } from '@/components/PromoSection/PromoSection';
import { CallbackSection } from '@/components/CallbackSection/CallbackSection';
import { ProcessList } from '@/components/ProcessList/ProcessList';

const ts_data: Process[] = data;

export function ProcessPage() {
  return (
    <>
      <section>
        <TopBlock
          title="Process of Starting the Project"
          description="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
          background={top_bg}
          is_title={true}
        />
      </section>

      <section className="process">
        <div className="wrapper">
          <TitleBlock
            title="At SquareUp"
            desc="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
            note="Here's an overview of our typical process:"
          />

          <ProcessList data={ts_data} />
        </div>
      </section>

      <PromoSection
        title="Thank you for your Interest in SquareUp."
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the
                different ways you can get in touch with us."
      />
      <CallbackSection />
    </>
  );
}
