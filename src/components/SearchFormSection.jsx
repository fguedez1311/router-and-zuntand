import { useState, useId, useRef } from "react";





export function SearchFormSection({
  onSearch,
  onTextFilter,
  initialText = "",
  initialFilters = {},
}) {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();
  const [searchText, setSearchText] = useState(initialText);
  const [technology, setTechnology] = useState(initialFilters.technology || "");
  const [location, setLocation] = useState(initialFilters.location || "");
  const [experienceLevel, setExperienceLevel] = useState(
    initialFilters.experienceLevel || "",
  );
  const [focusedField, setFocusedField] = useState(null);
  const timeoutId = useRef(null);

  const handleTextChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      onTextFilter(text);
    }, 700);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const nextFilters = {
      technology,
      location,
      experienceLevel,
    };

    if (name === idTechnology) {
      nextFilters.technology = value;
      setTechnology(value);
    }

    if (name === idLocation) {
      nextFilters.location = value;
      setLocation(value);
    }

    if (name === idExperienceLevel) {
      nextFilters.experienceLevel = value;
      setExperienceLevel(value);
    }

    onSearch(nextFilters);
  };

  const handleClearSubmit = (event) => {
    event.preventDefault();
    setSearchText("");
    onTextFilter("");
  };

  return (
    <>
      <section className="jobs-search">
        <h1 className="jobs-search__h1">Encuentra tu próximo trabajo</h1>
        <p className="jobs-search__p">
          Explora miles de oportunidades en el sector tecnológico.
        </p>

        <form
          className="form-busqueda form-busqueda--avanzada"
          id="empleos-search-form"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-busqueda__div form-busqueda__div--principal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>

            <input
              className="form-busqueda__input"
              name={idText}
              id="empleos-search-input"
              type="text"
              placeholder="Buscar trabajos, empresas o habilidades"
              onFocus={() => setFocusedField("search")}
              onBlur={() => setFocusedField(null)}
              onChange={handleTextChange}
              style={{
                borderColor: focusedField === "search" ? "#4f46e5" : "#d1d5db",
                outline:
                  focusedField === "search" ? "2px solid #4f46e5" : "none",
              }}
              value={searchText}
            />
            <button className="boton-azul" type="button" onClick={handleClearSubmit}>
              X
            </button>
          </div>

          <div className="formulario-busqueda__filtros">
            <select
              name={idTechnology}
              id="filter-technology"
              value={technology}
              onChange={handleFilterChange}
            >
              <option value="">Tecnología</option>
              <optgroup label="Tecnologías populares">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="react">React</option>
                <option value="nodejs">Node.js</option>
              </optgroup>
              <option value="java">Java</option>
              <hr />
              <option value="csharp">C#</option>
              <option value="c">C</option>
              <option value="c++">C++</option>
              <hr />
              <option value="ruby">Ruby</option>
              <option value="php">PHP</option>
            </select>

            <select
              name={idLocation}
              id="filter-location"
              value={location}
              onChange={handleFilterChange}
            >
              <option value="">Ubicación</option>
              <option value="remoto">Remoto</option>
              <option value="cdmx">Ciudad de México</option>
              <option value="guadalajara">Guadalajara</option>
              <option value="monterrey">Monterrey</option>
              <option value="barcelona">Barcelona</option>
            </select>

            <select
              name={idExperienceLevel}
              id="filter-experience-level"
              value={experienceLevel}
              onChange={handleFilterChange}
            >
              <option value="">Nivel de experiencia</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>
          </div>
        </form>
        <span className="jobs-search__span" id="filter-selected-value"></span>
      </section>
    </>
  );
}
