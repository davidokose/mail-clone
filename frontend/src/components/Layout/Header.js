import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AppsIcon from '@material-ui/icons/Apps'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <div>
          <MenuIcon />
        </div>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' />
      </LogoWrapper>

      <SearchWrapper>
        <SearchBarWrapper>
          <SearchIcon />
          <input type='text' placeholder='Search mail' />
          <ExpandMoreIcon />
        </SearchBarWrapper>
      </SearchWrapper>

      <IconWrapper>
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </IconWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div``

const LogoWrapper = styled.div``

const SearchWrapper = styled.div``

const SearchBarWrapper = styled.div``

const IconWrapper = styled.div``
