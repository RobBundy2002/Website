interface ArchitectureDiagramProps {
  title: string;
  nodes: string[];
}

export function ArchitectureDiagram({ title, nodes }: ArchitectureDiagramProps) {
  return (
    <figure className="architecture-diagram" aria-label={title}>
      <figcaption>{title}</figcaption>
      <div className="diagram-flow">
        {nodes.map((node, index) => (
          <div className="diagram-step" key={node}>
            <span>{node}</span>
            {index < nodes.length - 1 ? <b aria-hidden="true">-&gt;</b> : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
