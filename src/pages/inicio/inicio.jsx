import s from "./inicio.module.scss";
import imagem from "../../assets/transform.png";

export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.porqueDoarSection}>
        <h2>Por que devo doar?</h2>
        <section className={s.cardsMotivos}>
          <section>
            <img
              src={imagem}
              alt="Gravura indicando a importância da união."
            />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
