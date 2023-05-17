import { IntroContainer, IntroContent } from "./styles"
import coffeImg from '../../../../assets/Coffe.svg'

export function Intro(){
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        
                    </section>
                </div>
                <img src={coffeImg} alt="Imagem de café"/>
            </IntroContent>
        </IntroContainer>
    )
}