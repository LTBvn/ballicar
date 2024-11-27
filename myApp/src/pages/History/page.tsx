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
  IonIcon,
} from "@ionic/react";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import Toolbar from "../../components/toolbar";
import Cartcar2 from "../../components/Cartcar2";
import ButtonProps from "../../components/ButtonProps";

const carData = [
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
];

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonRow>
          <IonCol size="1"></IonCol>
          <IonCol size="10">
            <Toolbar />
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
          <div className="box-listcart">
            <div className="header-listcart">
              <h4>Car</h4>
            </div>
            <div className="content-listcart">
              {carData.map((car, index) => (
                <Cartcar2
                  key={index}
                  title={car.title}
                  imageUrl={car.imageUrl}
                  carModel={car.carModel}
                  seats={car.seats}
                  smallBags={car.smallBags}
                  largeBags={car.largeBags}
                  transmission={car.transmission}
                  cancellationPolicy={car.cancellationPolicy}
                />
              ))}
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
