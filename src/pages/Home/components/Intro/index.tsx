import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles"
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react" 
import coffeImg from '../../../../assets/Coffe.svg'

import { useTheme } from "styled-components"
import { RegularText } from "../../../../components/Typegraphy/styles"
import { InfoIcon } from "../../../../components/InfoIcon"

export function Intro(){
    const { colors } = useTheme();
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>

                    <BenefitsContainer>
                        <InfoIcon 
                            icon={<ShoppingCart weight="fill"/>}
                            text="Compra simples e segura"
                            iconBg={colors["brand-yellow-dark"]}
                        />

                        <InfoIcon 
                            icon={<Package weight="fill"/>}
                            text="Embalagem mantém o café intacto"
                            iconBg={colors["base-text"]}
                        />

                        <InfoIcon 
                            icon={<Timer weight="fill"/>}
                            text="Entrega rápida e rastreada"
                            iconBg={colors["brand-yellow"]}
                        />

                        <InfoIcon 
                            icon={<Coffee weight="fill"/>}
                            text="O café chega fresquinho até você"
                            iconBg={colors["brand-purple"]}
                        />
                    </BenefitsContainer>
                </div>
                <img src={coffeImg} alt="Imagem de café"/>
            </IntroContent>
        </IntroContainer>
    )
}