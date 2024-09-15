import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
    
export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(3)};
max-width: 300px;
padding: 20px;
`;

export const ErrMessage = styled(ErrorMessage)`
color: ${p => p.theme.colors.error};
font-size: 14px;
`;
export const InfoLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;