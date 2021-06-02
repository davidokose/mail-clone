import React, { useState } from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'

const Emailcontent = (inbox) => {
  return (
    <Wrapper>
      <TopWrapper>
        <Link to='/'>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </TopWrapper>
      <p> {inbox.from} </p>

      <Mails>THERE IS NO CONTENT HERE! {inbox.subject} </Mails>
    </Wrapper>
  )
}

export default Emailcontent

const Wrapper = styled.div``

const TopWrapper = styled.div`
  padding-left: 20px;
  height: 48px;
`

const Mails = styled.div`
  padding-left: 20px;
  height: 80px;
`
