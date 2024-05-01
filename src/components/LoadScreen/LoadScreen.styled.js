import styled from 'styled-components'

export const StyledLoadScreen = styled.div`

    h1 {
        padding: 200px 0 0 200px;
        animation: blink .5s linear infinite;
    }

    @keyframes blink {
    50% {
        opacity: 0;
    }
}
`