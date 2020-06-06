import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/core';

function Menu() {
  return (
    <Box className="main-menu" as="nav">
      <ul className="main-list-container">
        <li>
          <Link href="/" to="/">Home</Link>
        </li>
        <li>
          <Link href="/customers" to="/customers">Customer profile</Link>
        </li>
        <li>
          <Link>Products</Link>
        </li>
        <li>
          <Link>Shippings</Link>
        </li>
      </ul>
    </Box>
  )
}

export default Menu;