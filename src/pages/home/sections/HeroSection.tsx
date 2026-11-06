import { NavLink } from 'react-router';
import './HeroSection.scss';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrapper">
        <h1 className="h1">
          A Digital Product Studio
          <br /> that will Work
        </h1>
        <p className="hero__about">
          For <span>Startups</span>, <span>Enterprise leaders</span>, <span>Media & Publishers</span> and{' '}
          <span>Social Good</span>
        </p>

        <div className="hero__controls">
          <NavLink to="/works" className="btn btn-outline-secondary">
            Our Works
          </NavLink>
          <a className="btn btn-primary" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
