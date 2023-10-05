import styles from './styles.module.scss';
import aboutImg from '../../assets/images.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    Aos.init();

    return (
        <section className={styles.about}>
            <div className={styles.about__content} >
                <div data-aos="zoom-in" data-aos-delay="100" >
                    <img 
                    src={aboutImg} 
                    alt='Imagem sobre a barbearia' 
                    />
                </div>

                <div className={styles.about__description } data-aos="zoom-out-left" data-aos-delay="250">
                    <h2>Sobre</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aliquam accusantium fuga inventore est odio delectus temporibus vitae voluptatibus iure quisquam, velit nostrum nam autem officiis repudiandae deleniti laboriosam!</p>
                    <p>Horário de funcionamento: <strong>09:00</strong>às <strong>19:00</strong></p>
                </div>
            </div>
        </section>
    )
}