import { InputHTMLAttributes, forwardRef } from "react"
import { InputWrapper, InputStyledContainer } from "./styles"
import { RegularText } from "../Typegraphy/styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({error, className, ...props}, ref) => {
        return(
            <InputWrapper className={className}>
                <InputStyledContainer {...props} ref={ref}/>
                {error && <RegularText size="s">{error}</RegularText>}
            </InputWrapper>
        )
    }
)