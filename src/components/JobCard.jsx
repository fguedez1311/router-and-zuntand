import { useState } from "react";
import { Link } from "./Link";
import styles from "./JobCard.module.css";

export function JobCard({ job }) {
  const { id, data, titulo, empresa, ubicacion, descripcion } = job;
  const [isApplied, setIsApplied] = useState(false);

  function handleClick() {
    setIsApplied(!isApplied);
  }
  const text = isApplied ? "Aplicado" : "Aplicar";
  const buttonClass = isApplied ? "isApplied" : "";
  const isAppliedText = isApplied ? "Si" : "No";
  return (
    <article
      className="resultados__article"
      data-modalidad={data?.modalidad}
      data-nivel={data?.nivel}
      data-technology={data?.technology}
    >
      <div>
        <h3 className="resultados__h3">
          <Link className={styles.title} href={`/jobs/${id}`}>
            {titulo}
          </Link>
        </h3>
        <small className="resultados__small">
          {empresa} - {ubicacion} -¿He aplicado? {isAppliedText}
        </small>
        <p className="resultados__p">{descripcion}</p>
      </div>
      <div className="styles.actions">
          <Link  href={`/jobs/${id}`} className={styles.details}>
                Ver detalles
          </Link>
          <button onClick={handleClick} className={`boton-azul ${buttonClass} `}>
            {text}
          </button>
      </div>
    </article>
  );
}
