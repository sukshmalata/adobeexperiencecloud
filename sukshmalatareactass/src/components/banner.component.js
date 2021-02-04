import { Provider, defaultTheme } from '@adobe/react-spectrum';

import React, { Component } from "react";
import { Image, Flex, Button } from '@adobe/react-spectrum';
import '../../src/App.css';

export default class Banner extends Component {
  render() {
    return (<Provider theme={defaultTheme}>
      <div className="container">
        <Flex>
          <Image
            src="https://exchange.adobe.com/content/dam/exchange-assets/exchangeECheader.jpg"
            alt="Exchange EC Header"
            objectFit="cover"
          />
          <div class="centered">
            <h1>Adobe Experience Cloud applications, extensions and plug-ins.</h1>
            <p>Find the official functionality you need to deliver amazing customer experiences.</p>
            <Button variant="secondary">Watch Video</Button>
          </div>
        </Flex>

      </div>
    </Provider>
    );
  }
}