import React, { useEffect, useState } from 'react'
import style from './Cart.module.css';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react'
import { Spinner, Stack } from '@chakra-ui/react'

const Cart = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCartItem = async () => {
        const token = localStorage.getItem("token");
        setLoading(true)
        try {
            const res = await fetch("https://test-back-2-h9d7.onrender.com/product", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            console.log(data.notes);
            setProduct(data.notes);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const removeFunc = async (id) => {
        const token = localStorage.getItem("token");
        setLoading(true)
        try {
            const res = await fetch(`https://test-back-2-h9d7.onrender.com/product/update/${id}`, {
                method: "Delete",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            fetchCartItem();
        }
    };

    useEffect(() => {
        fetchCartItem();
    }, [])

    return (
        <Box>

            {loading ? <Stack
                direction="row"
                spacing={4}
                alignItems="center"  // Center vertically
                justifyContent="center" // Center horizontally
                h="100vh" // Set height to full viewport height
            >
                <Spinner size="xl" />
            </Stack>
                : <Box>
                    <Text textAlign={'center'} fontSize={'3rem'} mt={'3rem'}>Welcome to cart Page</Text>

                    <Box textAlign={'center'}>
                        <Link to={'/other'} >
                            <Button borderRadius={'18px'} p={10} fontSize={'1.5rem'} mt={'2rem'}>Continue Shopping</Button>
                        </Link>
                    </Box>

                    <SimpleGrid columns={4} spacing={10}
                        w={'95%'}
                        m={'auto'}
                        mt={'4rem'}
                    >
                        {
                            product.length > 0 && product.map((el) => {
                                return <Box key={el._id}
                                    border={'1px solid #B2B9BF'}
                                    borderRadius={'7px'}
                                >
                                    <Image src={el.poster} borderTopLeftRadius={'7px'} borderTopRightRadius={'7px'} />
                                    <Text mt={'1rem'} textAlign={'center'} fontSize={'1.6rem'}>Title : {el.title}</Text>
                                    <Text mt={'1rem'} mb={'1rem'} textAlign={'center'} fontSize={'1.4rem'}>Price : {el.price}</Text>
                                    <Box textAlign={'center'} mb={'2rem'} >
                                        <Button
                                            onClick={() => removeFunc(el._id)}
                                            fontSize={'1.3rem'} p={7} borderRadius={'15px'}>Remove</Button>
                                    </Box>
                                </Box>

                            })
                        }
                    </SimpleGrid>

                    {product.length < 1 && <Box textAlign={'center'} w={'70%'} m={'auto'} mt={'2rem'}>
                        <Text fontSize={'2rem'} mt={'2rem'} >No Item Found</Text>

                    </Box>}
                </Box>
            }

        </Box>
    );
};

export default Cart;