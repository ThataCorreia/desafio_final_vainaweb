import s from "./footer.module.scss";
import Facebook from "../../assets/facebook-icon.png";
import Twitter from "../../assets/Twitter_Logo.png";
import Youtube from "../../assets/youtube-icon.png";
import Linkedin from "../../assets/linkedin-icon.png";
import Instagram from "../../assets/instagram-icon.png";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a href="">
            <img src={Facebook} alt="Imagem da logo do Facebook" />
          </a>
          <a href="">
            <img src={Twitter} alt="Imagem da logo do Twitter" />
          </a>
          <a href="">
            <img src={Youtube} alt="Imagem da logo do Youtube" />
          </a>
          <a href="">
            <img src={Linkedin} alt="Imagem da logo do Linkedin" />
          </a>
          <a href="">
            <img src={Instagram} alt="Imagem da logo do Instagram" />
          </a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
