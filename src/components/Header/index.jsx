
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import { BsInstagram, BsTiktok, BsFacebook } from 'react-icons/bs';

export default function Header() {
    return (
        <div className={styles.bg_home}>            
            <header>
                <nav className={styles.container_social}>
                    <div className={styles.header_icons}>
                        <a href="https://instagram.com/wiliam.rozza" className={styles.social_item} target="_blank">
                            <BsInstagram                                
                                size={22}
                            />
                        </a>

                        <a href="#" className={styles.social_item} target="_blank">
                            <BsTiktok                                
                                size={22}
                            />
                        </a>

                        <a href="#" className={styles.social_item} target="_blank">
                            <BsFacebook                                
                                size={22}
                            />
                        </a>
                    </div>

                    <div className={styles.header_logo} >
                        <img
                            src={logo}
                            alt='Logo da barbearia'
                        />
                    </div>

                    <div>
                        <a className={styles.header_button}>
                            Agendar Horário
                        </a>
                    </div>
                </nav>

                <main className={styles.hero_container} >
                    <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
                    <p>Horário de funcionamento 09:00 às 19:00</p>
                    <a href='#' className={styles.button_contact} target='_blank' >
                        Agendar horário
                    </a>
                </main>
            </header>
        </div>
    )
}