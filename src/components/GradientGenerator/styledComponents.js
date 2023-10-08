import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const GradientHeading = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const GradientParagraph = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.5;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px;
`
export const ColorPickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 360px;
`
export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const CustomInput = styled.input`
  background-color: transparent;
  height: 50px;
  width: 100px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 24px;
  margin-top: 30px;
`
