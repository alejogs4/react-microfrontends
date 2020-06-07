import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import smartphone from '../assets/phone.jpg';

const products = [
  { id: 1, name: 'Car', image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', price: 3000 },
  { id: 2, name: 'Computer', image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: 500 },
  { id: 3, name: 'Smartphone', image: smartphone, price: 700 },
]

function Products() {
  return (
    <section className="products-container">
      {products.map(product => (
        <Box key={product.id} maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" as="article">
        <Image src={product.image} alt={product.name} />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {product.name}
          </Box>
          <Box>
            {product.price}
            <Box as="span" fontSize="sm">
               us
            </Box>
          </Box>
        </Box>
      </Box>
      ))}
    </section>
  );
}

export default Products;