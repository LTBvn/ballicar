import React, { useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonSearchbar,
  IonButtons,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  heartOutline,
  notificationsOutline,
  caretDownOutline,
} from "ionicons/icons";
import Header2 from "../../components/header2";
import Searchbar from "../../components/searchbar";
import BoxCar from "../../components/Boxactiviticar";
import StatusGrid from "../../components/statusgrid";

const Page = () => {
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
      <IonContent>
        <div className="header-container">
          <Header2 title="History" />
        </div>
        <IonRow className="search-11">
          <IonCol size="1"></IonCol>
          <IonCol size="10">
            <Searchbar />
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
        <div className="boxcar2">
          <BoxCar />
        </div>
        <div className="statusgrid">
          <StatusGrid />
        </div>
        <div className="btn-accept">
          <button className="booking-detail">Accept</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
