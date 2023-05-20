import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typegraphy/styles'
import { ActionsContainer, CardCartCoffeContainer, RemoveButton } from './styles'
import { Trash } from 'phosphor-react'

export function CardCartCoffe(){
    return(
        <CardCartCoffeContainer>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1685318400&Signature=LPrw6OcZ2bvbC7-GDuDX-VDUCXphN0unuhKxQFC415MEOWv5XAJvDKkPY2QNJa0mg~ouJ2asWYtbrzFWTJylcjkObrOPaLZH198G02qjX-WX9kvEke4yvNm784kdaEDgpl2YFwEvkrgBLd7O5osLmu4R4YnnR7DAVG~1rmZt-9-WoPf6tMSTqRigEqNM0YO9syVA525HARgT7KtBuMhFzJvxiw6XUp~GXDcmC-e0YhsmfOD5MDfiuYiyJwyjYjnt5xkmu0Hr8V9Yqd9eYHmN-gy-yKuy7HBnMJ-Dw9IHsoKN8HhwDRaUm6s1AsmppyQkdu564wK~~WlEDBsmu5qM1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div>
                    <RegularText color="subtitle">
                        Expresso Tradicional
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small"/>
                        <RemoveButton>
                            <Trash size={16}/>
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ 9,90</p>
        </CardCartCoffeContainer>
    )
}