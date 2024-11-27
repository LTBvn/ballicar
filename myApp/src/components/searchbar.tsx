import React from 'react';
import { IonSearchbar } from '@ionic/react';

const Searchbar: React.FC = () => {
  return (
    <IonSearchbar
      className="custom-searchbar"
      placeholder="BangKok,BangKok Province,Thailand"
      style={{
        '--background': '#ffffff',
        '--border-radius': '8px', 
        '--box-shadow': '0px 2px 4px rgba(0, 0, 0, 0.1)', 
        '--placeholder-color': '#b0b0b0',
        '--color': '#333',
        '--height': 'auto', 
        '--width': '300px', 
        '--padding': '0 10px', 
        '--position':'fixed',
        margin: '50px auto', 
      
      } as React.CSSProperties}
    />
  );
};

export default Searchbar;


