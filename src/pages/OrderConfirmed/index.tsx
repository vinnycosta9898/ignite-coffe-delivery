import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import { RegularText, TitleText } from '../../components/Typegraphy/styles'
import Image from '../../assets/Image.svg'
import { InfoIcon } from '../../components/InfoIcon'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function OrderConfirmed(){
    const { colors }  =useTheme();
    return(
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido Confirmado</TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que o café chegara logo a você
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <InfoIcon
                        icon={<MapPin weight="fill"/>}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                                <br/>
                                Farrapos - Porto Alegre, RS
                            </RegularText>
                        }
                    />

                    <InfoIcon
                        icon={<Clock weight="fill"/>}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Previsão de entrega
                                <br/>
                                <strong>20 min - 30min</strong>
                            </RegularText>
                        }
                    />

                    <InfoIcon
                        icon={<CurrencyDollar weight="fill"/>}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Pagamento na entrega
                                <br/>
                                <strong>Cartão de Crédito</strong>
                            </RegularText>
                        }
                    />
                </OrderDetailsContainer>
                <img src={Image}/>
            </section>
        </OrderConfirmedContainer>
    )
}