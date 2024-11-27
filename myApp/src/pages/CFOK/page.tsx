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
            src="public/carluxury.png"
            alt="Ride Request"
            style={{
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
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "60px",
          }}
        >
          Delivery
        </p>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            <span style={{ color: "#FF5722" }}>📍 Helden St</span> →{" "}
            <span style={{ color: "#FF5722" }}>📍 Chalotte St</span>
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            <span>🚗 Map Car</span> • <span>1h30m</span> • <span>34 Km</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "60px",
            padding : "0 20px",
          }}
        >
          <button
            style={{
              flex: 1,
              color: "#fff",
              backgroundColor: "#08DF9B",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              padding: "10px 20px",
              cursor: "pointer",
              marginTop: "60px",
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
              width: "auto",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              marginTop: "60px",
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
