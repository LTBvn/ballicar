import React, { useState } from 'react';
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
  IonLabel
} from '@ionic/react';
import { add, remove } from 'ionicons/icons';

const Drinks: React.FC = () => {
  const [waterQuantity, setWaterQuantity] = useState(0);
  const [alcoholQuantity, setAlcoholQuantity] = useState(0);
  const [softDrinkQuantity, setSoftDrinkQuantity] = useState(0);

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

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Drinks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonRow>
              <IonCol size="6">
                <img src="https://via.placeholder.com/50" alt="User" className="user-image22" />
                <div>
                  <IonLabel className="user-name">Tuấn Anh</IonLabel>
                  <IonLabel className="location">Thread city</IonLabel>
                  <IonLabel className="rating">⭐ 4.9</IonLabel>
                </div>
              </IonCol>
              <IonCol size="6">
                <img src="https://via.placeholder.com/70" alt="Car" className="car-image22" />
                <IonLabel className="car-details">Toyota (EDF568-354)</IonLabel>
              </IonCol>
            </IonRow>
          </IonCardHeader>
          <IonCardContent>
            <IonRow>
              <IonCol size="4">
                <img src="https://via.placeholder.com/80" alt="Water" className="drink-image" />
                <IonLabel className="drink-title">Water</IonLabel>
                <div className="quantity-control">
                  <IonButton onClick={() => handleQuantityChange('water', -1)} size="small">
                    <IonIcon icon={remove} />
                  </IonButton>
                  <IonLabel className="quantity">{waterQuantity}</IonLabel>
                  <IonButton onClick={() => handleQuantityChange('water', 1)} size="small">
                    <IonIcon icon={add} />
                  </IonButton>
                </div>
              </IonCol>
              <IonCol size="4">
                <img src="https://via.placeholder.com/80" alt="Alcohol" className="drink-image" />
                <IonLabel className="drink-title">Alcohol</IonLabel>
                <div className="quantity-control">
                  <IonButton onClick={() => handleQuantityChange('alcohol', -1)} size="small">
                    <IonIcon icon={remove} />
                  </IonButton>
                  <IonLabel className="quantity">{alcoholQuantity}</IonLabel>
                  <IonButton onClick={() => handleQuantityChange('alcohol', 1)} size="small">
                    <IonIcon icon={add} />
                  </IonButton>
                </div>
              </IonCol>
              <IonCol size="4">
                <img src="https://via.placeholder.com/80" alt="Soft Drink" className="drink-image" />
                <IonLabel className="drink-title">Soft Drink</IonLabel>
                <div className="quantity-control">
                  <IonButton onClick={() => handleQuantityChange('softDrink', -1)} size="small">
                    <IonIcon icon={remove} />
                  </IonButton>
                  <IonLabel className="quantity">{softDrinkQuantity}</IonLabel>
                  <IonButton onClick={() => handleQuantityChange('softDrink', 1)} size="small">
                    <IonIcon icon={add} />
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default Drinks;