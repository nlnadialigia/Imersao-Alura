import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  color: var(--white);
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  img{
    width: 50px;
  }
`;
