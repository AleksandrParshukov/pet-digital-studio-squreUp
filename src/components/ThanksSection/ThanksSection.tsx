import icon from '@/assets/images/thanks-icon.svg';
import './ThanksSection.scss';

export function ThanksSection() {
  return (
    <section className="thanks">
      <div className="wrapper">
        <img className="thanks__icon" src={icon} alt="" />

        <h2 className="h2">Thank you for your Interest in SquareUp.</h2>
        <p className="thanks__desc">
          We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the
          different ways you can get in touch with us.
        </p>

        <button className="btn btn-primary" type="button">
          Start Project
        </button>
      </div>
    </section>
  );
}
