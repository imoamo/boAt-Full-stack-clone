import React from 'react';
import style from './Hero_2.module.css';
import { Image, Text, Box, Flex } from '@chakra-ui/react';
import { HiArrowRightCircle } from "react-icons/hi2";

const Hero_2 = () => {
    return (
        <Box
            mb={'5rem'}>
            <Flex
                className={style.main}
            >
                <Box className={style.child}>
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123' />
                    <Text><span>1 year</span> Warranty</Text>
                </Box>

                <Box className={style.child}>
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123' />
                    <Text><span>7-day</span> Replacement</Text>
                </Box>

                <Box className={style.child}>
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123' />
                    <Text><span>Free</span> Shipping</Text>
                </Box>

                <Box className={style.child}>
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123' />
                    <Text><span>GST</span> Billing</Text>
                </Box>

            </Flex>

            <Text className={style.heading}>Shop by <b>Lifesty<span>le</span></b></Text>

            <Flex className={style.main_2}>

                <Box className={style.child_2}>
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687' />
                    <Box className={style.c_3}>
                        <Text className={style.heading_2} >For Fitness</Text>
                        <Flex
                            align={'center'}
                            fontSize={'1.4rem'}
                            fontWeight={'bolder'}
                            color={'#2F5B96'}
                            justifyContent={'center'}
                        >
                            <Text className={style.h2} mr={'1rem'} mt={'.3rem'}>View All</Text>
                            <HiArrowRightCircle fontSize={'2rem'} />
                        </Flex>
                    </Box>
                </Box>

                <Box className={style.child_2}>
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349' />
                    <Box className={style.c_3}>
                        <Text className={style.heading_2} >For Parties</Text>
                        <Flex
                            align={'center'}
                            fontSize={'1.4rem'}
                            fontWeight={'bolder'}
                            color={'#2F5B96'}
                            justifyContent={'center'}
                        >
                            <Text mr={'1rem'} mt={'.3rem'}>View All</Text>
                            <HiArrowRightCircle fontSize={'2rem'} />
                        </Flex>
                    </Box>
                </Box>

                <Box className={style.child_2}>
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745' />
                    <Box className={style.c_3}>
                        <Text className={style.heading_2} >For Work</Text>
                        <Flex
                            align={'center'}
                            fontSize={'1.4rem'}
                            fontWeight={'bolder'}
                            color={'#2F5B96'}
                            justifyContent={'center'}
                        >
                            <Text className={style.h2} mr={'1rem'} mt={'.3rem'}>View All</Text>
                            <HiArrowRightCircle fontSize={'2rem'} />
                        </Flex>
                    </Box>
                </Box>

                <Box className={style.child_2}
                >
                    <Image src='https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658' />
                    <Box className={style.c_3}>

                        <Text className={style.heading_2}>For Audiophiles</Text>

                        <Flex
                            align={'center'}
                            fontSize={'1.4rem'}
                            fontWeight={'bolder'}
                            color={'#2F5B96'}
                            justifyContent={'center'}
                        >
                            <Text mr={'1rem'} mt={'.3rem'}>View All</Text>
                            <HiArrowRightCircle fontSize={'2rem'} />
                        </Flex>

                    </Box>
                </Box>

            </Flex>
        </Box>
    )
}

export default Hero_2;