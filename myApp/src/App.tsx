import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { RootState } from './redux/store';
import dataIcon from './components/dataIcon';

import Home from './pages/home/page';
import Chat from './pages/chat/page';
import Activite from './pages/History/page';
// import Login from './pages/login/page';
// import Register from './pages/register/page';
import User from './pages/user/page';
import Booking from './pages/booking/page';
import Confirm from './pages/confirm/confirm';
import CFOK from './pages/CFOK/page';
import Detail from './pages/Detail/page';
import  chat  from './pages/chat/page';
import Map from './pages/map/page';
import Map2 from './pages/map2/page';
import Map3 from './pages/map3/page';
import AI from './pages/AI/Ai chat';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import store from './redux/store';
import Chatbox from './pages/chat/chatbox/chatbox';
import Drinks from './pages/Drink/drink';

setupIonicReact();

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const clicActive = (href: string) => {
    setActiveTab(href);
  };

  
  return (
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/activite">
                <Activite />
              </Route>
              <Route exact path="/chat">
                <Chat />
              </Route>
              <Route exact path="/user">
                <User />
              </Route>
              <Route exact path="/map">
                <Map />
              </Route>
              <Route exact path="/map2">
                <Map2 />
              </Route>
              <Route exact path="/map3">
                <Map3 />
              </Route>
              <Route exact path="/support">
                <AI />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
             <Route exact path='/booking'>
                <Booking />
             </Route>
             <Route exact path='/confirm'>
                <Confirm/>
             </Route>
             <Route exact path='/CFOK'>
                <CFOK/>
             </Route>
             <Route exact path='/detail'>
                <Detail/>
             </Route>
             <Route exact path="/chat">
                <Chat />
              </Route>
              <Route exact path="/chat/boxchat">
                <Chatbox />
              </Route>
              <Route exact path="/drink">
                <Drinks />
              </Route>

              


             
            </IonRouterOutlet>

            <IonTabBar slot="bottom" className='tabbar'>
              <IonTabButton tab="home" href="/home" onClick={() => clicActive('home')}
                className={activeTab === 'home' ? 'activeTabbar' : ''}>
                <div
                  className="IconTabbar"
                  dangerouslySetInnerHTML={{
                    __html: activeTab === dataIcon[0].href ? dataIcon[0].svgActive : dataIcon[0].svg
                  }}
                />
                <IonLabel className='TextIcon'>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="activite" href="/activite" onClick={() => clicActive('activite')}
                className={activeTab === 'activite' ? 'activeTabbar' : ''}>
                <div
                  className="IconTabbar"
                  dangerouslySetInnerHTML={{
                    __html: activeTab === dataIcon[1].href ? dataIcon[1].svgActive : dataIcon[1].svg
                  }}
                />
                <IonLabel className='TextIcon'>History</IonLabel>
              </IonTabButton>
              <IonTabButton tab="chat" href="/chat" onClick={() => clicActive('chat')}
                className={activeTab === 'chat' ? 'activeTabbar' : ''}>
                <div
                  className="IconTabbar"
                  dangerouslySetInnerHTML={{
                    __html: activeTab === dataIcon[3].href ? dataIcon[3].svgActive : dataIcon[3].svg
                  }}
                />
                <IonLabel className='TextIcon'>Chat</IonLabel>
              </IonTabButton>
              <IonTabButton tab="user" href="/user" onClick={() => clicActive('user')}
                className={activeTab === 'user' ? 'activeTabbar' : ''}>
                <div
                  className="IconTabbar"
                  dangerouslySetInnerHTML={{
                    __html: activeTab === dataIcon[4].href ? dataIcon[4].svgActive : dataIcon[4].svg
                  }}
                />
                <IonLabel className='TextIcon'>User</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </Provider>
  );
};

export default App;

