import './ProcessList.scss';
import type { Process } from '@/types/types';

interface ProcessListProps {
  data: Process[];
}

export function ProcessList({data}: ProcessListProps) {
  return (
    <ol className="process__list">
      {data.map((item) => (
        <li className="process__item" key={item.id}>
          <p className="process__name">{item.name}</p>
          <p className="process__desc">{item.desc}</p>
        </li>
      ))}
    </ol>
  );
}
