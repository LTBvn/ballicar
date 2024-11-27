import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonNavLink,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { home, informationCircle, logOut, settings, time } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';

const Page: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <div className='user-container'>
          <div className='user-info'>
            <img 
              src='public\avatar.png'
              alt='User Avatar'
              className='user-avatar'
            />
            <h3 className='user-name'>Tuấn Anh</h3>
            <p className='user-car'>Toyota (77AB-1132340)</p>
          </div>
          <div className="user-menu">
            <IonItem button routerLink="/home">
              <IonIcon slot="start" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem button routerLink="/activite">
              <IonIcon slot="start" icon={time} />
              <IonLabel>History</IonLabel>
            </IonItem>
            <IonItem button routerLink="/settings">
              <IonIcon slot="start" icon={settings} />
              <IonLabel>Setting</IonLabel>
            </IonItem>
            <IonItem button routerLink="/support">
              <IonIcon slot="start" icon={informationCircle} />
              <IonLabel>Online Support</IonLabel>
            </IonItem>
            <IonItem button routerLink="/logout">
              <IonIcon slot="start" icon={logOut} />
              <IonLabel>Log Out</IonLabel>
            </IonItem>
          </div>
        </div>
      </IonContent>
    </IonPage >
  )
};

export default Page;
