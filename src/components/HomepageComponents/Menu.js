import React from 'react'
import Product from "./Product"
import { Link,StaticQuery, graphql } from "gatsby"
import {  Section ,Title, SectionButton } from "../../utils"
import styled from "styled-components"

const PRODUCTS = graphql`
{
    items:allContentfulMenu{
            edges{
                node{
                    name,
                    price,
                    id,
                    ingredients,
                    img:img{
                        fixed{
                            ...GatsbyContentfulFixed_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default function Menu() {
return (
    <Section>
        <Title title="feature items" message="title taste"></Title>
        <ProductList>
            <StaticQuery query={PRODUCTS} render={data => {
                const products = data.items.edges
                return products.map(item =>{
                    return <Product key={item.node.id} product={item.node}></Product>
                })
            }}> 
            </StaticQuery>
        </ProductList>
    </Section>
)
}

const ProductList = styled.div`
margin: 3rem 0;
display: grid;
grid-template-columns: 100%;
grid-row-gap: 3rem;
@media(min-width: 576px){
    grid-template-columns: 95%;
}
@media(min-width: 776px){
    grid-template-columns: 85%;
}
@media(min-width: 992px){
    grid-template-columns: 1fr 1fr;
}
`