import { InputHTMLAttributes, forwardRef } from "react"
import { InputWrapper, InputStyledContainer } from "./styles"
import { RegularText } from "../Typegraphy/styles";

import { InputStyled } from "./styles";
import { RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    rightText?: string; 
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({error, className, rightText, ...props}, ref) => {
        return(
            <InputWrapper className={className}>
                <InputStyledContainer hasError={!!error}>
                    <InputStyled {...props} ref={ref}/>
                    {rightText && <RightText>{rightText}</RightText>}
                </InputStyledContainer>
                {error && <RegularText size="s">{error}</RegularText>}
            </InputWrapper>
        )
    }
)