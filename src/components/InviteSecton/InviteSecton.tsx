import icon from '@/assets/images/promo-icon.svg';
import './InviteSecton.scss';

export function InviteSection() {
  return (
    <section className="invite">
      <div className="wrapper">
        <img className="invite__icon" src={icon} alt="" />
        <div className="invite__desc">
          <p className="invite__caption">
            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....
          </p>
          <p className="invite__text">
            Combining the power of design, engineering, and project management to create transformative digital
            experiences. They invite you to join them on their journey and discover how they can help bring your digital
            ideas to life.
          </p>
        </div>
        <div className="invite__bottom">
          <p>Welcome to SquareUp</p>
          <p className="invite__slogan">
            Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
          </p>
          <a href="#" className="btn btn-primary">
            Start Project
          </a>
        </div>
      </div>
    </section>
  );
}
