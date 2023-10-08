import {Component} from 'react'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  GradientHeading,
  GradientParagraph,
  GradientDirectionList,
  ColorPickContainer,
  CustomInputContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenerateGradient = () => {
    const {
      firstColorInput,
      secondColorInput,
      activeGradientDirection,
    } = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  clickGradientDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      firstColorInput,
      secondColorInput,
      activeGradientDirection,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <GradientHeading>Generate a CSS color Gradient</GradientHeading>
          <GradientParagraph>Choose Direction</GradientParagraph>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                gradientDirectionDetails={eachItem}
                isActive={activeGradientDirection === eachItem.value}
                clickGradientDirection={this.clickGradientDirection}
              />
            ))}
          </GradientDirectionList>
          <GradientParagraph>Pick the Colors</GradientParagraph>
          <ColorPickContainer>
            <CustomInputContainer>
              <ColorValue>{firstColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeFirstColor}
                value={firstColorInput}
              />
            </CustomInputContainer>
            <CustomInputContainer>
              <ColorValue>{secondColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeSecondColor}
                value={secondColorInput}
              />
            </CustomInputContainer>
          </ColorPickContainer>
          <GenerateButton type="button" onClick={this.onClickGenerateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
