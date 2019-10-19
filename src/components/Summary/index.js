import React from 'react';
import { List } from 'antd';

import { Container, ListItem, Profit, Footer, Content, StockInfo } from './styles';

export default function Summary() {
    // TODO: request from backend
    const assets = [{
        stockSymbol: 'ITUB3',
        averagePrice: 20,
        sellingPrice: 30,
        quantitySold: 10,
        profit: 100
    }, {
        assetName: 'ABV3',
        averagePrice: 30,
        sellingPrice: 45,
        quantitySold: 20,
        profit: 300
    }];

    function totalProfit() {
        return assets.reduce((a, b) => a + b.profit, 0);
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
                        <List.Item key={item.stockSymbol}>
                            <ListItem>
                                <StockInfo>
                                    <p>{item.stockSymbol}</p>
                                    <p>Preço médio: R${item.averagePrice}</p>
                                    <p>Preço de venda: R${item.sellingPrice}</p>
                                </StockInfo>
                                <Profit>
                                    <p>R${item.profit}</p>
                                    <small>({item.quantitySold})</small>
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