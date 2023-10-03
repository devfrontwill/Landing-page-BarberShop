import styles from './styles.module.scss';
import { BsInstagram, BsTiktok, BsFacebook } from 'react-icons/bs';
import logo from '../../assets/logo.svg';
import whatsapp from '../../assets/whatssapp.svg';

export default function Footer() {
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
            href='#'
            >
                <img 
                src={whatsapp}
                alt="Botao whatsapp"
                />
                <span className={styles.span_text} > Agende seu horário</span>
            </a>    
        </>
    )
}