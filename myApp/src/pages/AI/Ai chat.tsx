import {
  IonButton,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonCol,
  IonInput,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import Headers2 from "../../components/header2";

const Page: React.FC = () => {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Giả lập phản hồi từ bot
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Hello, how can I assist you today?", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="contentPage" fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <Headers2 title="AI Chat" />
              <title>Chat UI</title>
              <div className="chat-container">
                <div className="chat-header">Chat</div>
                <div className="chat-body">
                  <div className="message user-message">
                    <p className="content">Hi, I'm your driver</p>
                    <p className="timestamp">2:30</p>
                  </div>
                  <div className="message driver-message">
                    <p className="content">
                      Ut git kτt turpis arcu felis cursus nullam. Fringilla amet
                      turpis ut augue
                    </p>
                    <p className="timestamp">2:31</p>
                  </div>
                </div>
                <div className="chat-footer">
                  <input type="text" placeholder="Enter any command..." />
                  <button>➤</button>
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
