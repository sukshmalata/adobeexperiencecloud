import React, { Component } from "react";
import { Grid, View, ListBox, SearchField } from '@adobe/react-spectrum';
import { ComboBox, Item } from '@react-spectrum/combobox';
import ContentCom from './contentcom.component';
export default class Body extends Component {
    render() {
        let options = [
            { id: 1, name: 'Aerospace' },
            { id: 2, name: 'Mechanical' },
            { id: 3, name: 'Civil' }
        ];


        return (
            <Grid
                areas={['header  header', 'sidebar content', 'footer  footer']}
                columns={['1fr', '3fr']}
                rows={['size-1000', 'auto', 'size-1000']}
                height="size-6000"
                gap="size-100">
                <View backgroundColor="white-600" gridArea="header" >
                    <span className="search">
                        <SearchField placeholder="Search Marketplace" minLength="200" />
                    </span>
                    <div className="combo">
                        <ComboBox placeholder="Sortby most relevant" defaultItems={options}>
                            {options.map((option) => {
                                return <Item>{option.name}</Item>
                            })}
                        </ComboBox>
                    </div>
                </View>
                <View backgroundColor="white-600" gridArea="sidebar" >
                    <ListBox width="size-2400" aria-label="Alignment">
                        <Item key="a">All</Item>
                        <Item key="b">Advertising Cloud</Item>
                        <Item key="c">Analytics</Item>
                        <Item key="d">Audience Manager</Item>
                        <Item key="e">Campaign</Item>
                        <Item key="f">Experience Cloud</Item>
                        <Item key="g">Experience Manager</Item>
                        <Item key="h">Experience Platform Launch</Item>
                        <Item key="i">Primetime</Item>
                        <Item key="j">Target</Item>
                    </ListBox>
                </View>
                <View gridArea="content" >
                    <ContentCom />
                </View>
                <View backgroundColor="white-600" gridArea="footer" >
                    <text className="footertext">
                        Copyright © 2020 Adobe. All rights reserved.
                        Privacy
                        Terms of Use
                        Cookie preferences
                        Do not sell my personal information
AdChoices</text>
                </View>
            </Grid>
        );
    }
}