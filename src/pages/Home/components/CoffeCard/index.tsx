import { CoffeCardContainer, CoffeDescription, CoffeName, TagsCoffe, CardFooter, CardWrapper } from './styles'
import { RegularText, TitleText } from '../../../../components/Typegraphy/styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { priceFormatter } from '../../../../utils/priceFormatter';

export interface Coffe{
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeProps{
    coffe: Coffe;
}
export function CoffeCard({ coffe } : CoffeProps){
    const formattedPrice = priceFormatter(coffe.price);
    return(
        <CoffeCardContainer>
            <img src={`/coffes/${coffe.photo}`}/>
            <TagsCoffe>
                {coffe.tags.map(tag => (
                    <span key={`${coffe.id}${tag}`}>{tag}</span>
                ))}
            </TagsCoffe>
            <CoffeName>
                {coffe.name}
            </CoffeName>
            <CoffeDescription>
                {coffe.description}
            </CoffeDescription>
            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>
                <CardWrapper>
                    <QuantityInput/>
                    <button>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </CardWrapper>
            </CardFooter>
        </CoffeCardContainer>
    )
}