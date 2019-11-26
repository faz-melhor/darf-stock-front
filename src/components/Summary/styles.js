import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 620px;
  margin: 20px auto 20px auto;
  text-align: center;
`;

export const Card = styled.div`
  width: 100%;
  background: white;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;

  p {
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  padding: 16px;
  > div {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  background-color: #E0E0E0;
  color: black;
  height: 60px;
  text-align: end;
  padding: 5px 16px 0 0;
  position: sticky;
  bottom: 0;
  right: 0;
  width: 100%;

  p {
    margin-bottom: 5px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Profit = styled.div`
  text-align: center;

  p {
    font-weight: bold;
    margin-bottom: 0;
    color: ${props => props.profit > 0 ? '#21421e' : '#cf073a'}
  }
`;

export const StockInfo = styled.div`
  width: 100%;
`;

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const animationVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};
