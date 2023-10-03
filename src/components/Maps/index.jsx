import styles from './styles.module.scss';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

export default function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAI58vSW-fDHhtfzFENoq45xf6KbSxQ6u4"
    })

    return (
        <section className={styles.container} >
            <h2>Venha nos conhecer</h2>
            <div className={styles.container__maps}>
                { isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{width: '100%', heigh: '50vh'}}
                    center={{
                        lat: -27.590824,
                        lng: -48.551262
                    }}
                    zoom={15}                    
                >                   
                </GoogleMap>
                ) : <></>
}
            </div>
        </section>
    )
}