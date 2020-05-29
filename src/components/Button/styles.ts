import styled from 'styled-components';
import { Props } from './index'

export const Container = styled.div`
background-color: ${({ backgroundColor }: Props) => backgroundColor };
color: ${({ color }: Props) => color };
`;
