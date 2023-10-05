import styles from './styles.module.scss';
import corte1 from '../../assets/corte1.png';
import corte2 from '../../assets/corte2.png';
import corte3 from '../../assets/corte3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Works() {

    Aos.init();

    return (
        <section className={styles.services} >
            <div className={styles.services__content} data-aos="fade-left" data-aos-delay="150">
                <h2>Serviços</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolore temporibus nulla, perspiciatis beatae consequuntur! Consequuntur, atque! Nostrum accusamus totam non. Dolores magnam necessitatibus, porro voluptatibus aut nobis odio dicta?</p>
            </div>

            <section className={styles.haircuts} >
                <div className={styles.haircut} data-aos="fade-up" data-aos-delay="150" >
                    <img
                        src={corte3}
                        alt='Corte à máquina'
                    />
                    <div className={styles.haircut__info} >
                        <strong>Corte à máquina</strong>
                        <button>
                            R$45,00
                        </button>
                    </div>
                </div>

                <div className={styles.haircut} data-aos="fade-up" data-aos-delay="300">
                    <img
                        src={corte2}
                        alt='Barba completa'
                    />
                    <div className={styles.haircut__info} >
                        <strong>Barba completa</strong>
                        <button>
                            R$25,00
                        </button>
                    </div>
                </div>

                <div className={styles.haircut} data-aos="fade-up" data-aos-delay="500">
                    <img
                        src={corte1}
                        alt='Corte completo'
                    />
                    <div className={styles.haircut__info} >
                        <strong>Corte completo</strong>
                        <button>
                            R$45,00
                        </button>
                    </div>
                </div>
            </section>
        </section>
    )
}