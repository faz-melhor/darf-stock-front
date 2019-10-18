import React from 'react';
import { List } from 'antd';

import { Container, ListItem, Profit, Footer, Content } from './styles.js';

export default function Summary() {
    // TODO: request from backend
    const assets = [{
        assetName: 'ITUB3',
        averagePrice: 20,
        sellPrice: 30,
        totalSold: 10
    }, {
        assetName: 'ABV3',
        averagePrice: 30,
        sellPrice: 45,
        totalSold: 20
    }
    ];

    function calcProfit(asset) {
        return (asset.sellPrice - asset.averagePrice) * asset.totalSold;
    }

    function totalProfit() {
        return assets.reduce((a, b) => a + calcProfit(b), 0);
    }

    function calcTax() {
        const profit = totalProfit();
        return profit > 20000 ? profit * 0.15 : 0;
    }

    return (
        <Container>
            <Content>
                <List
                    dataSource={assets}
                    renderItem={item => (
                        <List.Item key={item.assetName}>
                            <ListItem>
                                <div>
                                    <p>{item.assetName}</p>
                                    <p>Preço médio: R${item.averagePrice}</p>
                                    <p>Preço de venda: R${item.sellPrice}</p>
                                </div>
                                <Profit>
                                    <p>R${calcProfit(item)}</p>
                                    <small>({item.totalSold})</small>
                                </Profit>
                            </ListItem>
                        </List.Item>
                    )}
                ></List>
            </Content>

            <Footer>
                <p>Total: R${totalProfit()}</p>
                <p>Imposto: R${calcTax()}</p>
            </Footer>
        </Container>
    );
}