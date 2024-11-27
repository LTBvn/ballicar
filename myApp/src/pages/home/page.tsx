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
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import NavService from "../../components/NavService";
import Cartcar from "../../components/Cartcar";
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
    carModel: "Honda CR-V",
    seats: 5,
    smallBags: 3,
    largeBags: 3,
    transmission: "Manual",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Kia Seltos",
    seats: 5,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Kia Seltos",
    seats: 5,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Kia Seltos",
    seats: 5,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Kia Seltos",
    seats: 5,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Kia Seltos",
    seats: 5,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Kia Seltos",
    seats: 5,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation",
  },
];

const Page: React.FC = () => {

  useEffect(() => {
    const checkTabbar = document.querySelector(".tabbar");

    // If tabbar exists and is hidden, remove the 'hidden' class
    if (checkTabbar && checkTabbar.classList.contains("hidden")) {
      checkTabbar.classList.remove("hidden");
    }

    return () => {
      // Optional cleanup to re-add the 'hidden' class if needed
      if (checkTabbar && !checkTabbar.classList.contains("hidden")) {
        checkTabbar.classList.add("hidden");
      }
    };
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="contentPage" fixed>
          <IonRow className="ion-justify-content-center ">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <div className="header"> </div>
              <div className="content">
                <div className="box-service">
                  <NavService title={"Our Fleet -  service extra"} />
                </div>

                <div className="box-listcart">
                  <div className="header-listcart">
                    <h4>Car</h4>
                    <div className="h-listcart-left">
                      <h4>SUVs</h4>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
                          stroke="#090909"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="content-listcart">
                    {carData.map((car, index) => (
                      <Cartcar
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
                    <ButtonProps
                      title="View more"
                      icon={""}
                      className="buttonMore"
                    />
                  </div>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;
