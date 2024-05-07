import { Flex, Button, Text, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Best_seller from './Best_seller'
import Home_Threate from './Home_Threate'
import Top_bardus from './Top_bardus'
import Top_watch from './Top_watch'
import Car_Acces from './Car_Acces'
import style from './Hero_3.module.css'
import { HiArrowRightCircle } from "react-icons/hi2";

const Hero_3 = () => {
    const [selectedComponent, setSelectedComponent] = useState(<Best_seller />);
    const [selectedButton, setSelectedButton] = useState(1);

    const handelButtonClick = (component, num) => {
        setSelectedComponent(component);
        setSelectedButton(num);
    };

    return (
        <>
            <Box w={'100%'}>
                <Text className={style.heading}>Best Of <b>bo<span>At</span></b></Text>

                <Flex
                    justifyContent={'space-between'}
                    width={'95%'}
                    margin={'auto'}
                    mt={'1.5rem'}
                >
                    <Box
                        display={'flex'}
                        w={'70%'}
                        justifyContent={'space-between'}
                        className={style.mult_div}
                    >
                        <Button
                            style={selectedButton === 1 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                            fontSize={'1.6rem'} onClick={() => handelButtonClick(<Best_seller />, 1)}>Best Sellers</Button>


                        <Button
                            style={selectedButton === 2 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                            fontSize={'1.6rem'} onClick={() => handelButtonClick(<Home_Threate />, 2)}>Home Theatre System & Soundbars</Button>


                        <Button
                            style={selectedButton === 3 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                            fontSize={'1.6rem'} onClick={() => handelButtonClick(<Top_bardus />, 3)}>Top Earbuds</Button>

                        <Button

                            style={selectedButton === 4 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                            fontSize={'1.6rem'} onClick={() => handelButtonClick(<Top_watch />, 4)}>Top Watches</Button>

                        <Button
                            style={selectedButton === 5 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                            fontSize={'1.6rem'} onClick={() => handelButtonClick(<Car_Acces />, 5)}>Car Accessories</Button>
                    </Box>

                    <Flex
                        align={'center'}
                        fontSize={'1.4rem'}
                        fontWeight={'bolder'}
                        color={'#2F5B96'}
                    >
                        <Text mr={'1rem'} mt={'.3rem'}>View All</Text>
                        <HiArrowRightCircle fontSize={'2rem'} />
                    </Flex>
                </Flex>

            </Box>

            {selectedComponent}
        </>
    );
}

export default Hero_3;