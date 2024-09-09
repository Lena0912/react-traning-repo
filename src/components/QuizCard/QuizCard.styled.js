import styled from 'styled-components';

export const Container = styled.div`
border: 3px solid
${props => {
    switch (props.level) {
        case 'beginner':
            return 'green';
        case 'intermediate':
            return 'blue';
        case 'advanced':
            return 'orange';
            default:
            return null;
}

}};
;
`;

export const InfoWrapper = styled.div`
display: flex;
gap: 8px;
`;

export const Info = styled.p`
margin: 0;
`;
