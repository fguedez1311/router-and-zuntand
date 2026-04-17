import { useState } from "react";
import { Link } from "./Link";
import styles from "./JobCard.module.css";
import { useAuthStore } from "../store/authStore";
import { useFavoritesStore } from "../store/favoritesStore";
function JobCardFavoriteButton({ jobId }) {
  const { isLoggedIn } = useAuthStore();
  // suscríbete a TODA la store y extra TODA la store
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  return (
    <button 
      disabled={!isLoggedIn}
      onClick={() => toggleFavorite(jobId)}
       aria-label={isFavorite(jobId) ? 'Remove from favorites' : 'Add to favorites'}
      
    >
      {isFavorite(jobId) ? "❤️" : "❤"}
    </button>
  );
}
function JobCardApplyButton({ jobId }) {
  const [isApplied, setIsApplied] = useState(false);
  const { isLoggedIn } = useAuthStore();
  const text = isApplied ? "Aplicado" : "Aplicar";
  const buttonClass = isApplied ? "isApplied" : "";

  const handleApplyClick = () => {
    console.log("Aplicando al trabajo con id:", jobId);
    setIsApplied(true);
  };
  return (
    <button
      disabled={!isLoggedIn}
      onClick={handleApplyClick}
      className={`boton-azul ${buttonClass} `}
    >
      {text}
    </button>
  );
}

export function JobCard({ job }) {
  const { id, data, titulo, empresa, ubicacion, descripcion } = job;

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
          {empresa} - {ubicacion}
        </small>
        <p className="resultados__p">{descripcion}</p>
      </div>
      <div className="styles.actions">
        <Link href={`/jobs/${id}`} className={styles.details}>
          Ver detalles
        </Link>
        <JobCardApplyButton jobId={job.id} />
        <JobCardFavoriteButton jobId={job.id} />
      </div>
    </article>
  );
}
