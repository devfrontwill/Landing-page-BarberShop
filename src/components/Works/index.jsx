import styles from './styles.module.scss';
import corte1 from '../../assets/corte1.png';
import corte2 from '../../assets/corte2.png';
import corte3 from '../../assets/corte3.png';

export default function Works() {
    return (
        <section className={styles.services} >
            <div className={styles.services__content} >
                <h2>Serviços</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolore temporibus nulla, perspiciatis beatae consequuntur! Consequuntur, atque! Nostrum accusamus totam non. Dolores magnam necessitatibus, porro voluptatibus aut nobis odio dicta?</p>
            </div>

            <section className={styles.haircuts} >
                <div className={styles.haircut} >
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

                <div className={styles.haircut} >
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

                <div className={styles.haircut} >
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