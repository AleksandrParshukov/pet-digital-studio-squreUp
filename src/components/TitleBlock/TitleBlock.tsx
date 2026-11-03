import './TitleBlocks.scss';

interface TitleBlockProps {
  title: string;
  desc: string;
  note: string;
}

export function TitleBlock({ title, desc, note }: TitleBlockProps) {
  return (
    <div className="title-block">
      <h2 className="h2">{title}</h2>
      <p className="title-block__desc">{desc}</p>
      <p className="title-block__note">{note}</p>
    </div>
  );
}
