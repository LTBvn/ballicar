import React from "react";
import { IonPage, IonContent, IonIcon, IonRow, IonCol } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import Toolbar from "../../components/toolbar";

const Confirm: React.FC = () => {
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
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src="public/driver_report.png"
            alt="Ride Request"
            style={{
              border: "2px",
              borderRadius: "8px",
              width: "80%",
              maxWidth: "300px",
              marginTop: "60px",
            }}
          />
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            lineHeight: "1.5",
            marginTop: "60px",
            padding: "0 20px",
          }}
        >
          You got a ride request from Marius Ciocirlan.
          <br />
          Please pick him from his request location.
          <br />
          Please go quick.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "60px",
            padding: "0 20px",
          }}
        >
          <button
            style={{
              flex: 1,
              color: "#fff",
              backgroundColor: "#5E21EB", 
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              padding: "10px 20px",
              cursor: "pointer",
              marginTop: "80px",
              height: "40px",
            }}
          >
            CONFIRM REQUEST
          </button>
          <button
            style={{
              color: "#fff",
              backgroundColor: "#545C9B", 
              border: "none",
              borderRadius: "4px", 
              padding: "10px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              marginTop: "80px",
            }}
          >
            <IonIcon icon={closeOutline} />
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Confirm;
