import {styled} from 'styled-components'

const Button = styled.button<{$primary?: boolean}>`
    background: ${props => props.$primary ? '#FF1D15' : '#16DB65'};
    color: ${props => props.$primary ? 'white' : 'white'};

    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 3px;

    &:hover {
        background: ${props => props.$primary ? 'red' : 'green'};
    }
`

export {Button}