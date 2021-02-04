import { Provider, defaultTheme } from '@adobe/react-spectrum';

import React, { Component } from "react";
import { Tabs, Item } from '@react-spectrum/tabs';
import { Image, Flex, Link } from '@adobe/react-spectrum';
import '../../src/App.css';

export default class Header extends Component {
  render() {
    return (<Provider theme={defaultTheme}>
      <span className="adobe-logo">
        <Flex width="10%" height="20px" >
          <Image src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" alt="Adobe" />
        </Flex>
      </span>
      <span className="login">
        <Link>
          <a href="" target="_blank">Sign in</a>
        </Link>
      </span>
      <div className="tabs">
        <Tabs aria-label="Tabs of adobe exchange">
          <Item title="Creative Cloud" key="CC"></Item>
          <Item title="Experience Cloud" key="EC"></Item>
          <Item title="Document Cloud" key="DC"></Item>
        </Tabs>
      </div>

    </Provider>
    );
  }
}