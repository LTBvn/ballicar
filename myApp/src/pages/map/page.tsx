import React, { useEffect, useState } from 'react';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonIcon,
    IonLabel,
    IonPage,
    IonGrid
} from '@ionic/react';
import { add, remove } from 'ionicons/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Drinks: React.FC = () => {
    const [waterQuantity, setWaterQuantity] = useState(0);
    const [alcoholQuantity, setAlcoholQuantity] = useState(0);
    const [softDrinkQuantity, setSoftDrinkQuantity] = useState(0);
    const position = [10.762622, 106.660172];
    const handleQuantityChange = (type: 'water' | 'alcohol' | 'softDrink', amount: number) => {
        switch (type) {
            case 'water':
                setWaterQuantity(Math.max(0, waterQuantity + amount));
                break;
            case 'alcohol':
                setAlcoholQuantity(Math.max(0, alcoholQuantity + amount));
                break;
            case 'softDrink':
                setSoftDrinkQuantity(Math.max(0, softDrinkQuantity + amount));
                break;
        }
    };
    useEffect(() => {
        const checkTabbar = document.querySelector('.tabbar');
        if (checkTabbar) {
            checkTabbar.classList.add('hidden');
        }

        return () => {
            if (checkTabbar) {
                checkTabbar.classList.remove('hidden');
            }
        };
    }, []);
    return (
        <IonPage>
            <IonContent fullscreen scrollY={false}>
                <div>
                    <IonGrid fixed>
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
                                <div className='headermapParent'>
                                    <div className='headermap'>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L4 6" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M20 12L4 12" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M20 18H4" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <div>Tuấn Anh</div>
                                        <div>
                                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5984 19.0994C18.5279 19.0536 17.9969 18.6816 17.4653 17.5564C16.4889 15.49 16.284 12.5792 16.284 10.5012C16.284 10.4921 16.2838 10.4832 16.2835 10.4742C16.2728 7.72781 14.6283 5.36034 12.275 4.29811V2.67356C12.275 1.19934 11.0776 0 9.60585 0H9.38465C7.91287 0 6.71549 1.19934 6.71549 2.67356V4.29802C4.35431 5.36367 2.70651 7.74323 2.70651 10.5012C2.70651 12.5792 2.50157 15.49 1.52521 17.5564C0.993603 18.6816 0.462649 19.0535 0.392056 19.0994C0.0947744 19.2369 -0.0518038 19.5548 0.0165868 19.8768C0.0856337 20.2021 0.389665 20.4263 0.721681 20.4263H5.87545C5.90423 22.4017 7.51645 24 9.49527 24C11.4741 24 13.0863 22.4017 13.1151 20.4263H18.2689C18.6008 20.4263 18.9049 20.2021 18.974 19.8768C19.0423 19.5548 18.8957 19.2369 18.5984 19.0994ZM8.12179 2.67356C8.12179 1.97602 8.68832 1.40855 9.3847 1.40855H9.6059C10.3023 1.40855 10.8688 1.97602 10.8688 2.67356V3.84155C10.425 3.74981 9.96557 3.70153 9.49509 3.70153C9.02474 3.70153 8.56546 3.74977 8.12184 3.84141V2.67356H8.12179ZM9.49527 22.5915C8.29185 22.5915 7.31024 21.625 7.2817 20.4264H11.7088C11.6803 21.625 10.6987 22.5915 9.49527 22.5915ZM12.3265 19.0177C12.3264 19.0177 2.3241 19.0177 2.3241 19.0177C2.44574 18.8282 2.56954 18.6135 2.69259 18.371C3.63496 16.5127 4.11281 13.8649 4.11281 10.5012C4.11281 7.5285 6.52729 5.11008 9.49504 5.11008C12.4628 5.11008 14.8773 7.5285 14.8773 10.5035C14.8773 10.5122 14.8774 10.5208 14.8777 10.5294C14.8804 13.8797 15.3582 16.518 16.298 18.371C16.421 18.6136 16.5449 18.8282 16.6664 19.0177H12.3265Z" fill="#FFAA2A" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg">
                                    <MapContainer
                                        center={position}
                                        zoom={13}
                                        style={{ height: "300px", width: "100%", borderRadius: "8px" }}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        <Marker position={position}>
                                            <Popup>Car's Location</Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>
                                <div className="sliderUnder">
                                    <div className='itemsliderUnder itemsliderUnderMap2' >
                                        <div>
                                            📍Helden st
                                        </div>
                                        |
                                        <div>
                                            🗺️Chalotte St
                                        </div>
                                    </div>
                                    <div className='itemsliderUnder2'>
                                        <div>⚲ 34km</div>
                                        <div>🕧 1H : 30M</div>
                                        <div>💲100$</div>
                                    </div>
                                    <button className='startride'>
                                        Start ride
                                    </button>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Drinks;