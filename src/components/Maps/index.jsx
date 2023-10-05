import styles from './styles.module.scss';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { id } from '../../utils';
import { API_KEY } from '../../utils';

export default function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: `${id}`,
        googleMapsApiKey: `${API_KEY}`
    })

    const position = {
        lat: -22.801354926869173,
        lng: -43.201696406074866
    }

    return (
        <section className={styles.container} >
            <h2 className={styles.title} >Venha nos conhecer</h2>
            <div className={styles.container__maps}>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '60vh' }}
                        center={position}
                        zoom={15}
                    >
                        <Marker position={position} options={{
                            label: {
                                className: `${styles.map_text}`,
                                text: "Barber Shop",
                            }
                        }} />
                    </GoogleMap>
                ) : <></>
                }
            </div>
        </section>
    )
}