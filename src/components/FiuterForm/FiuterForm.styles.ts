import styled from 'styled-components'

export const FiuterContainer = styled.div`
  display: grid;
  grid-template-rows: 106px 1fr 170px;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #13111a;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
`

export const FiuterNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 40px 86px 26px 0;
`

export const Logo = styled.img`
  height: 40px;
`

export const FiuterMain = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 170px;
  width: 100%;
  padding-top: 56px;
`

export const FiuterForm = styled.form`
  max-width: 600px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  & > button {
    width: 250px;
    height: 47px;
    font-size: 18px;
  }
`

export const FiuterFormTitle = styled.h1`
  margin-bottom: 26px;
  color: #e9f7ff;
  font-size: 57px;
  font-weight: 700;
  line-height: 1.1em;

  & > div > span {
    background: linear-gradient(to right, #4ebbea, #0e70ab);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const FiuterFormSubtitle = styled.p`
  margin-bottom: 26px;
  color: #e7e7e7;
  font-size: 20px;
  line-height: 1.3em;
  letter-spacing: -0.3px;
`

export const FiuterFormInputsContainer = styled.div`
  display: grid;
  grid-template-columns: 188px 188px;
  grid-gap: 30px 60px;
  margin-bottom: 40px;
`

export const FiuterFormInput = styled.input`
  height: 72px;
  padding: 8px 24px;
  background-color: transparent;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  border: none;
  border-bottom: 1px solid #259fe9;
  border-radius: 6px;
  outline: none;

  &::placeholder {
    font-weight: bold;
  }
`

export const FiuterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 40px;
  padding: 15px 30px;
  background-color: transparent;
  background-image: linear-gradient(90deg, #4ebbea 0%, #0e70ab 100%);
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to right, #4EBBEA, #1B7EBA);
  }
` 

export const FiuterImageContainer = styled.div`
  padding-right: 110px;
`

export const FiuterImage = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`

export const FiuterBlur = styled.div`
  position: absolute;
  top: 400px;
  right: 400px;
  width: 300px;
  height: 300px;
  background-color: #4ebbea;
  opacity: 0.2;
  filter: blur(100px);
  z-index: 0;
`

export const FiuterFooter = styled.footer`
  display: grid;
  grid-template-columns: 110px 130px 110px;
  grid-template-rows: 1fr 30px;
  align-items: center;
  justify-content: center;
  gap: 0 80px;
  width: 100%;
  height: 170px;
  padding-top: 32px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    height: 100%;
    text-align: center;
  }

  & h3 {
    color: #e9f7ff;
    font-size: 16px;
  }

  & p {
    color: #a7a3b4;
    line-height: 24px;
  }

  & span {
    display: block;
  }
`

export const FiuterSocial = styled.div`
  text-decoration: none;
  & img {
    height: 33px;
    width: 33px;
  }
`

export const FiuterRightsReserved = styled.div`
  grid-column: 1 / 4;
  color: #a7a3b4;
  font-size: 16px;
  text-align: center;
`