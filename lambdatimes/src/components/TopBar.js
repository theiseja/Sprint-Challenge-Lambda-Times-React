import React from 'react'
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`

const TopBarContainer = styled.div`
width: 100%;
display: flex;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`

const TopBarContainerLeft = styled.div`
 display: flex;
 justify-content: none;
 align-items: center;
 flex-direction: row;
 flex: 1;
 font-size: 1rem;

 span {
   cursor: pointer;
   margin-right: 25%;
   font-weight: bold;
 }
`

const TopBarContainerCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 1rem;

span {
  cursor: pointer;
  margin-right: 5%;

  :last-child {
    margin-right: 0;
  }
  :hover {
    text-decoration: underline;
  }
}
`

const TopBarContainerRight = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 1rem;
font-weight: bold;

span {
  cursor: pointer;
}
`

const FullTopBar = () => {
  return (
    <TopBar>
      <TopBarContainer>
        <TopBarContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <span>LOG IN</span>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBar>
  )
}
export default FullTopBar
