import React from "react";
import {
  IonButton,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonHeader,
} from "@ionic/react";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import { useHistory } from "react-router";

const Toolbar: React.FC = () => {
  const history = useHistory();
  return (
    <IonHeader>
      <IonToolbar color="dark">
        <IonButton onClick={()=> history.push("/drink")} slot="start" fill="clear">
          <IonIcon icon={menuOutline} color="light" />
        </IonButton>
        <IonTitle className="title">Tuấn Anh</IonTitle>
        <IonButton onClick={()=> history.push("/confirm")} slot="end" fill="clear" >
          
          <IonIcon icon={notificationsOutline} className="yellow-icon" />
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default Toolbar;
