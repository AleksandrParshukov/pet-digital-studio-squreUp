import icon from '@/assets/images/promo-icon.svg';
import './PromoSection.scss';

interface PromoSectionProps {
  title: string;
  description: string;
}

export function PromoSection({ title, description }: PromoSectionProps) {
  return (
    <section className="promo">
      <div className="wrapper">
        <img className="promo__icon" src={icon} alt="" />

        <h2 className="h2">{title}</h2>
        <p className="promo__desc">{description}</p>

        <button className="btn btn-primary" type="button">
          Start Project
        </button>
      </div>
    </section>
  );
}
