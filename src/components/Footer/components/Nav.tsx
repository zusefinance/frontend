import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x0d457d09a70763ce09c0b8c34556d020b93fbab8#code" //link smartcontract
      >
        ZUSEfarm Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://t.me/zusefinance"
      >
        Telegram Group
      </StyledLink> 
      <StyledLink target="_blank" href="https://medium.com/@zusefinance">
        Medium
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/zusefinance">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
