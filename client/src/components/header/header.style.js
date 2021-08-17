import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
   position: relative;
`;

export const LogoContainer = styled.div`
   height: 100%;
   width: 70px;
`;

export const Logo = styled.img`
   height: 100%;
`;

export const OptionsContainer = styled.div`
   width: 70%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
   padding: 10px 15px;
   text-decoration: none;
   cursor: pointer;
   transition: 0.3s;
   font-size: 1.2rem;
   color: black;
   @media only screen and (max-width: 1000px){
      font-size: .8rem;
      padding: 10px 8px;
    }
    @media only screen and (max-width: 600px){
      font-size: .7rem;
      padding: 10px 8px;
    }
    @media only screen and (max-width: 400px){
      font-size: .6rem;
      padding: 10px 5px;
    }
`;
