interface TechnologyListProps {
  technologies: string[];
  compact?: boolean;
}

export function TechnologyList({ technologies, compact = false }: TechnologyListProps) {
  return (
    <ul className={`tech-list ${compact ? 'compact' : ''}`} aria-label="Technologies">
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}
