import './ClientsSection.scss';
import data from '@/data/clients.json';
import type { Client } from '@/types/types';
import { create_image_map } from '@/utils/create_image_map';

const logos = import.meta.glob<string>('/src/assets/images/clients/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ts_data: Client[] = data;

const logo_map = create_image_map(logos);

export function ClientsSection() {
  return (
    <section className="idx-clients">
      <div className="wrapper">
        <p className="idx-clients__note">Trusted By 250+ Companies</p>

        <ul className="idx-clients__list">
          {ts_data.map((item) => (
            <li className="idx-clients__item" key={item.id}>
              <img src={logo_map[item.logo]} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
