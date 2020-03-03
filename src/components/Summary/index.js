import React, { useContext } from 'react';
import { DataContext } from '../../context';
import { List, Typography } from 'antd';

import {
  Container,
  ListItem,
  Profit,
  Content,
  StockInfo,
  animationVariants,
  Card,
} from './styles';

export default function Summary() {
  const [data] = useContext(DataContext);
  console.log(data);

  return (
    <Container
      key="summary"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={animationVariants}
    >
      <Typography.Title>Darf Stock</Typography.Title>
      <Card>
        <Content>
          {data && data.length ? (
            <List
              dataSource={data}
              renderItem={item => (
                <List.Item key={item.monthYear}>
                  <ListItem>
                    <StockInfo>
                      <p>
                        <strong>{item.monthYear}</strong>
                      </p>
                      <p>Vendido: R${item.sell.toFixed(2)}</p>
                      <p>Imposto: R${item.tax.toFixed(2)}</p>
                    </StockInfo>
                    <Profit profit={item.total}>
                      <p>R${item.total.toFixed(2)}</p>
                    </Profit>
                  </ListItem>
                </List.Item>
              )}
            ></List>
          ) : (
            ''
          )}
        </Content>
      </Card>
    </Container>
  );
}
