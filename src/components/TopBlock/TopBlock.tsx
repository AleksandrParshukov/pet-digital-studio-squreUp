import './TopBlock.scss';

interface TopBlockProps {
  title: string;
  description: string;
  background: string;
  is_title?: boolean;
}

export default function TopBlock({ title, description, background, is_title = false }: TopBlockProps) {
  const Title_tag = is_title ? 'h1' : 'h2';

  return (
    <div className="top-block wrapper" style={{ '--bg-image': `url("${background}")`} as React.CSSProperties & { '--bg-image': string }}>
      <Title_tag className="top-block__title h2">{title}</Title_tag>
      <p className="top-block__description">{description}</p>
    </div>
  );
}
