import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import FlexContainer from '../containers/flex-container';
import { HOME, SCORES, SELECT_DOG } from '../../config/routes';
import Context  from '../../context';
import { MEDIA_URL } from '../../config/constants';
import HeaderItem from './header-item';
import HeaderIcon from './header-icon';
import './header.css';

export default function Header({children, onLogout}) {
  const context = useContext(Context);
  return (
    <div>
      <div className="header">
        <div className="header_logo">
          <Link to={HOME}><img src={process.env.PUBLIC_URL + "/logo.png"} alt=""/></Link>
        </div>
        { 
          context.user && (
            <div className="header_navbar">
              <FlexContainer className="header_navbar_start">
                <Link to={HOME}><HeaderItem>Games</HeaderItem></Link>
                <Link to={SCORES}><HeaderItem>Scores</HeaderItem></Link>         
              </FlexContainer>
              <FlexContainer className="header_navbar_end">
                { context.dog && <Link to={SELECT_DOG}><HeaderIcon src={`${MEDIA_URL}/${context.dog.image}`}/></Link>}
                <Link to={HOME}>
                  <HeaderIcon src={`${process.env.PUBLIC_URL}/logout.png`} hoverSrc={`${process.env.PUBLIC_URL}/logout-hover.png`} onClick={onLogout} />
                </Link>
              </FlexContainer>
            </div>
          )
        }
      </div>
      {children}
  </div>
  );
}
