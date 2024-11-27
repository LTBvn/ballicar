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
                                    <div className='itemsliderUnder'>
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
                                    <div className='itemsliderUnder3'>
                                        <div className='itemsliderUnder3-1'>
                                            <div>
                                                <img src="/new.png" alt="" />
                                            </div>
                                            <div className='itemsliderUnder3-1info'>
                                                Khắc Duy
                                                <br />
                                                🔥 VIP1
                                            </div>
                                        </div>
                                        <div className='iconmapinfo'>
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.67962 3.32038L5.29289 1.70711C5.68342 1.31658 6.31658 1.31658 6.70711 1.70711L11.2929 6.29289C11.6834 6.68342 11.6834 7.31658 11.2929 7.70711L9.40762 9.59238C9.16419 9.83581 9.10384 10.2077 9.2578 10.5156C11.0378 14.0756 13.9244 16.9622 17.4844 18.7422C17.7923 18.8962 18.1642 18.8358 18.4076 18.5924L20.2929 16.7071C20.6834 16.3166 21.3166 16.3166 21.7071 16.7071L26.2929 21.2929C26.6834 21.6834 26.6834 22.3166 26.2929 22.7071L24.6796 24.3204C22.5683 26.4317 19.2257 26.6693 16.837 24.8777L11.6286 20.9714C9.88504 19.6638 8.33622 18.115 7.02857 16.3714L3.12226 11.163C1.33072 8.7743 1.56827 5.43173 3.67962 3.32038Z" stroke="black" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <div className='iconmapinfo'>
                                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 5.15625C10.235 5.15625 5.15625 10.235 5.15625 16.5C5.15625 19.4576 6.28674 22.1487 8.141 24.1687C8.4027 24.4538 8.48276 24.8614 8.34832 25.2243L7.46476 27.6095L10.5988 26.5712C10.8593 26.4849 11.1435 26.506 11.3885 26.6298C12.9233 27.406 14.659 27.8438 16.5 27.8438C22.765 27.8438 27.8438 22.765 27.8438 16.5C27.8438 10.235 22.765 5.15625 16.5 5.15625ZM3.09375 16.5C3.09375 9.09593 9.09593 3.09375 16.5 3.09375C23.9041 3.09375 29.9062 9.09593 29.9062 16.5C29.9062 23.9041 23.9041 29.9062 16.5 29.9062C14.4832 29.9062 12.568 29.4602 10.8499 28.6607L6.07674 30.242C5.70045 30.3667 5.286 30.2646 5.01063 29.9795C4.73525 29.6943 4.6477 29.2766 4.7854 28.9049L6.20117 25.0831C4.26175 22.7583 3.09375 19.7645 3.09375 16.5Z" fill="#090909" />
                                                <path d="M12.375 16.5C12.375 17.2594 11.7594 17.875 11 17.875C10.2406 17.875 9.625 17.2594 9.625 16.5C9.625 15.7406 10.2406 15.125 11 15.125C11.7594 15.125 12.375 15.7406 12.375 16.5Z" fill="#090909" />
                                                <path d="M17.875 16.5C17.875 17.2594 17.2594 17.875 16.5 17.875C15.7406 17.875 15.125 17.2594 15.125 16.5C15.125 15.7406 15.7406 15.125 16.5 15.125C17.2594 15.125 17.875 15.7406 17.875 16.5Z" fill="#090909" />
                                                <path d="M23.375 16.5C23.375 17.2594 22.7594 17.875 22 17.875C21.2406 17.875 20.625 17.2594 20.625 16.5C20.625 15.7406 21.2406 15.125 22 15.125C22.7594 15.125 23.375 15.7406 23.375 16.5Z" fill="#090909" />
                                            </svg>
                                        </div>
                                    </div>
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