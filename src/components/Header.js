import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { AccessTime } from '@mui/icons-material'


function Header() {
  return (
   <HeaderContainer>
 
  {/*Header Left*/}
  <HeaderLeft>
    <HeaderAvatar 
    //add Onclick
    />
    <AccessTime/>
  </HeaderLeft>
    {/*Header Search*/}
      {/*Header Right*/}
   </HeaderContainer>
  )
}

export default Header


const HeaderContainer = styled.div`{/*this simply means the container will be a div*/}
display : flex;
`
const HeaderLeft = styled.div`

flex : 0.3;
display: flex;
align-items : center;
margin-left : 20px;

> .MuiSvgIcon-root{{/*inside the div I will this icon*/}
  margin-left : auto;
  margin-right : auto;
}
`
const HeaderAvatar = styled(Avatar)`{/*this gonna be an avatar*/}

`
