
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import { BsInstagram, BsTiktok, BsFacebook } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Header() {

    Aos.init();

    return (
        <div className={styles.bg_home} >            
            <header>
                <nav className={styles.container_social}>
                    <div className={styles.header_icons} data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" >
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

                    <div className={styles.header_logo} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
                        <img
                            data-aos="flip-up" data-aos-delay="300" data-aos-duration="1500"
                            src={logo}
                            alt='Logo da barbearia'
                        />
                    </div>

                    <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
                        <a 
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20!"
                        className={styles.header_button}>
                            Agendar Horário
                        </a>
                    </div>
                </nav>

                <main className={styles.hero_container} data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
                    <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
                    <p>Horário de funcionamento 09:00 às 19:00</p>
                    <a 
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20!" className={styles.button_contact} target='_blank' >
                        Agendar horário
                    </a>
                </main>
            </header>
        </div>
    )
}