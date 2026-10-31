import './TopBlock.scss';

interface TopBlockProps {
  title: string;
  description: string;
  background: string;
}

export default function TopBlock({ title, description, background }: TopBlockProps) {
  return (
    <div className="top-block wrapper" style={{ '--bg-image': `url("${background}")`} as React.CSSProperties & { '--bg-image': string }}>
      <h2 className="top-block__title h2">{title}</h2>
      <p className="top-block__description">{description}</p>
    </div>
  );
}
