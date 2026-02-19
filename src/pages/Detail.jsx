import { useParams } from "react-router";

export default function JobDetail() {
  const { id } = useParams();
  return (
    <>
      <main>
        <section className="detalleOferta">
          <header className="detalleOferta__header contenedor">
            <h2 className="detalleOferta__h2">
              <span className="detalleOferta__span">Empleos</span> / Ingeniero de
              Software Senior
            </h2>
            <div className="detalleOferta__div">
              <div className="detalleOferta__div--texto">
                <h1 className="detalleOferta__h1">Ingeniero de Software Senior</h1>
                <p className="detalleOferta__p">Tech Solutions Inc. Remoto</p>
              </div>
              <button className="boton-azul">Aplicar Ahora</button>
            </div>
          </header>
          <div className="detalleOferta__div--content contenedor">
            <div className="detalleOferta__div">
              <h3 className="detalleOferta__h3">Descripción del puesto</h3>
              <p className="detalleOferta__p">
                Tech Soluciones Inc está buscando un ingeniero de software
                Senior altamente motivado y experimentado para unirse a nuestro
                equipo remoto. El candidato será responsable de diseñar,
                desarrollar y mantener aplicaciones escalables, colaborar con
                equipos multidisciplinarios, realizar revisiones de código y
                garantizar buenas prácticas de calidad y seguridad.
              </p>
            </div>
            <div className="detalleOferta__div">
              <h3 className="detalleOferta__h3">Responsabilidades</h3>
              <ul className="detalleOferta__ul">
                <li className="detalleOferta__li">
                  Diseñar desarrollar y mantener aplicaciones web utilizando
                  tecnologías modernas
                </li>
                <li className="detalleOferta__li">
                  Colaborar con equipos de producto y diseño para definir y
                  entrega nuevas características
                </li>
                <li className="detalleOferta__li">
                  Escribir código limpio,eficiente y bien documentado
                </li>
              </ul>
            </div>
            <div className="detalleOferta__div">
              <h3 className="detalleOferta__h3">Requisitos</h3>
              <ul className="detalleOferta__ul">
                <li className="detalleOferta__li">
                  Licenciatura en informática o campo relacionado
                </li>
                <li className="detalleOferta__li">
                  Mínimo 5 años de experiencia en desarrollo de software
                </li>
                <li className="detalleOferta__li">
                  Experiencia con framework de javascript (Por ejemplo react,
                  angular)
                </li>
              </ul>
            </div>

            <div className="detalleOferta__div">
              <h3 className="detalleOferta__h3">Acerca de la Empresa</h3>
              <p className="detalleOferta__p">
                Tech Soluciones es una empresa de tecnología innovadora que se
                centra en soluciones de software de vanguardia para diferentes
                industrias. Estamos comprometidos con el fomento de un ambiente
                de trabajo inclusivo y colaborativo, donde cada miembro del
                equipo puede crecer y contribuir al éxito colectivo.
              </p>
            </div>
          </div>
          <footer className="detalleOferta__footer contenedor">
            <button className="boton-azul">Aplicar ahora</button>
          </footer>
        </section>
      </main>
    </>
  );
}
