import React, { Component } from "react";
import { View, Flex, Well } from '@adobe/react-spectrum';

export default class ContentCom extends Component {
    render() {
        let boxes = ['1', '2', '3', '4'];
        return (
            <div>
                <Flex direction="row" height="size-3000" gap="size-100">
                    {boxes.map((val) => {

                        return <View key={val} backgroundColor="yellow-600" width="size-3000" >
                            <Well role="region" aria-labelledby="wellLabel">
                                <h3 id="wellLabel">Shipping Address</h3>
                                <p>
                                    601 Townsend Street
                        <br /> San Francisco, CA 94103
                    </p>
                            </Well>
                        </View>
                    })}
                </Flex>
            </div>
        );
    }
}