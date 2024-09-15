import styled from 'styled-components';

const getBorderColor = ({theme, level}) => {
    switch (level) {
        case 'beginner':
            return theme.colors.green;
        case 'intermediate':
            return 'blue';
        case 'advanced':
            return 'orange';
        default:
            return null;
    }
};

export const Container = styled.div`
border: 3px solid ${getBorderColor};
border-radius: ${p => p.theme.radii.sm};
svg {
  display: block;
  color: red;
}
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)};
`;

export const Info = styled.p`
margin: 0;
color: ${props => {
    switch (props.type) {
      case 'a':
        return 'green';
      case 'b':
        return 'blue';
      case 'c':
        return 'orange';
      default:
        return null;
    }
}}
`;

export const IconWrapper = styled.span`
color: green;
`;
