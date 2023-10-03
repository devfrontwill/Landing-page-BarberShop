import styles from './styles.module.scss';
import Header from '../../components/Header';
import About from '../../components/About';
import Works from '../../components/Works';
import Maps from '../../components/Maps';


export default function Home() {
    return (
        <>
            <Header />            
            <About />
            <Works />
        </>
    )
}