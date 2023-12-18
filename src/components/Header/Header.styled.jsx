import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled(Link)`
  color: #ffffff;
`;

export const StyledLink = styled(Link)`
  transition: color var(--transition-dur-and-fun);

  /* &:hover,
  &:focus {
  } */
`;

export const IconWrap = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  @media screen and (${props => props.theme.mq.mobile}) {
    display: flex;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 0;
  @media screen and (${props => props.theme.mq.mobile}) {
    top: 60px;
    width: 320px;
    padding: 0 10px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    top: 100px;
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    top: 100px;
    width: 1440px;
    padding: 0 34px;
  }
`;