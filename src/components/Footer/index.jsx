import styles from './styles.module.scss';
import { BsInstagram, BsTiktok, BsFacebook } from 'react-icons/bs';
import logo from '../../assets/logo.svg';
import whatsapp from '../../assets/whatssapp.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Footer() {

    Aos.init();

    return (
        <>
            <footer className={styles.footer} >
                <div className={styles.footer_icons} >
                    <a href="https://instagram.com/wiliam.rozza" target="_blank">
                        <BsInstagram
                            size={22}
                            color='#FFF'
                        />
                    </a>

                    <a href="#" target="_blank">
                        <BsTiktok
                            size={22}
                            color='#FFF'
                        />
                    </a>

                    <a href="#" target="_blank">
                        <BsFacebook
                            size={22}
                            color='#FFF'
                        />
                    </a>
                </div>


                <div>
                    <img
                        src={logo}
                        alt='Logo barbearia'
                    />
                </div>

                <p>Copyright 2023 | Barber Shop by DevWiLL - Todos os direitos reservados.</p>
            </footer>

            <a className={styles.btn_whatsapp}
            data-aos="zoom-in-up" data-aos-delay="400"
            href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20!"
            >
                <img 
                src={whatsapp}
                alt="Botao whatsapp"
                />
                <span className={styles.tooltip_text} > Agende seu horário</span>
            </a>    
        </>
    )
}

<a className={styles.btn_whatsapp}
            data-aos="zoom-in-up" data-aos-delay="400"
            href="https://api.whatsapp.com/send?phone=5521990556961&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20!"
            >
                <img 
                src={whatsapp}
                alt="Botao whatsapp"
                />
                <span className={styles.tooltip_text} > Agende seu horário</span>
            </a>