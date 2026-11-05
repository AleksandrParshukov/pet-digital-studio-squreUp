import './Card.scss';

interface CadrProps {
  id: string;
  icon: string;
  name: string;
  desc: string;
  btn_text: string;
}

export function Card({ id, icon, name, desc, btn_text }: CadrProps) {
  return (
    <li className="card" key={id}>
      <div className="card__icon">
        <img src={icon} alt="" />
      </div>
      <p className="card__name">{name}</p>
      <p className="card__desc">{desc}</p>
      <a href="#" className="card__link btn btn-secondary">{btn_text}</a>
    </li>
  );
}
