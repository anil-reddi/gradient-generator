import styled from 'styled-components/macro'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin-bottom: 14px;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const DirectionButton = styled.button`
  background-color: '#ffffff';
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-left: 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
