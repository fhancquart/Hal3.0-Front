import React from 'react';
import { Swifty } from '../components/Swifty';
import '../assets/scss/style.scss';


function MyApp({ Component, pageProps } : any) {

  return (
    <>        
        <span className="conteneur">
          <div className="content">
            <Swifty />
            <Component {...pageProps} />
          </div>
        </span>
    </>
  )

}

export default MyApp
