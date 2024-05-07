import React, { useState } from 'react'
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import style from './Press.module.css'

const Press = () => {

    const Component1 = () =>

        <Flex className={style.main_2}>

            <Box className={style.box_1}>
                <Image w={'45%'} src='https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093' />
            </Box>

            <Box className={style.box_2}>


                <Flex
                    w={'10%'}
                    margin={'auto'}
                    justifyContent={'space-around'}
                >

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#1a2024"
                            />
                        </g>
                    </svg>

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#666666"
                            />
                        </g>
                    </svg>

                </Flex>

                <Text className={style.texts}>boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.</Text>

                <Flex
                    justifyContent={'space-between'}
                    w={'15%'}
                    m={'auto'}
                    mt={'3rem'}
                >
                    <Box
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<ArrowBackIcon />}
                            onClick={goToPrevious}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            borderRadius={'50%'}
                            w='40px'
                            h='40px'
                            bgColor={'#E3E9EC'}
                        />
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="Next"
                            icon={<ArrowForwardIcon />}
                            onClick={goToNext}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            bgColor={'#E3E9EC'}
                            w='40px'
                            borderRadius={'50%'}
                            h='40px'
                        />
                    </Box>
                </Flex>
            </Box>

        </Flex>


    const Component2 = () =>
        <Flex className={style.main_2}>

            <Box className={style.box_1}>
                <Image w={'45%'} src='https://www.boat-lifestyle.com/cdn/shop/files/Fashion_Network_231x.png?v=1705038134' />
            </Box>

            <Box className={style.box_2}>


                <Flex
                    w={'10%'}
                    margin={'auto'}
                    justifyContent={'space-around'}
                >

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#1a2024"
                            />
                        </g>
                    </svg>

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#666666"
                            />
                        </g>
                    </svg>

                </Flex>

                <Text className={style.texts}>Boat, India’s leading wearables brand has named Indian cricketer Jemimah Rodrigues as the newest brand ambassador.</Text>

                <Flex
                    justifyContent={'space-between'}
                    w={'15%'}
                    m={'auto'}
                    mt={'3rem'}
                >
                    <Box
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<ArrowBackIcon />}
                            onClick={goToPrevious}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            borderRadius={'50%'}
                            w='40px'
                            h='40px'
                            bgColor={'#E3E9EC'}
                        />
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="Next"
                            icon={<ArrowForwardIcon />}
                            onClick={goToNext}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            bgColor={'#E3E9EC'}
                            w='40px'
                            borderRadius={'50%'}
                            h='40px'
                        />
                    </Box>
                </Flex>
            </Box>

        </Flex>;


    const Component3 = () =>
        <Flex className={style.main_2}>

            <Box className={style.box_1}>
                <Image w={'45%'} src='https://www.boat-lifestyle.com/cdn/shop/files/Business_Standard_231x.png?v=1705038171' />
            </Box>

            <Box className={style.box_2}>


                <Flex
                    w={'10%'}
                    margin={'auto'}
                    justifyContent={'space-around'}
                >

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#1a2024"
                            />
                        </g>
                    </svg>

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#666666"
                            />
                        </g>
                    </svg>

                </Flex>

                <Text className={style.texts}>Audio brand boAt scales up to Rs 4,000 crore in net sales for FY 2022-23</Text>

                <Flex
                    justifyContent={'space-between'}
                    w={'15%'}
                    m={'auto'}
                    mt={'3rem'}
                >
                    <Box
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<ArrowBackIcon />}
                            onClick={goToPrevious}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            borderRadius={'50%'}
                            w='40px'
                            h='40px'
                            bgColor={'#E3E9EC'}
                        />
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="Next"
                            icon={<ArrowForwardIcon />}
                            onClick={goToNext}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            bgColor={'#E3E9EC'}
                            w='40px'
                            borderRadius={'50%'}
                            h='40px'
                        />
                    </Box>
                </Flex>
            </Box>

        </Flex>;


    const Component4 = () =>
        <Flex className={style.main_2}>

            <Box className={style.box_1}>
                <Image w={'45%'} src='https://www.boat-lifestyle.com/cdn/shop/files/Hindustan_Times_1737c601-8f79-48c9-bca8-a1e0243acb3f_231x.png?v=1705038206' />
            </Box>

            <Box className={style.box_2}>


                <Flex
                    w={'10%'}
                    margin={'auto'}
                    justifyContent={'space-around'}
                >

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#1a2024"
                            />
                        </g>
                    </svg>

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#666666"
                            />
                        </g>
                    </svg>

                </Flex>

                <Text className={style.texts}>boAt co-founder Aman Gupta took to Twitter to spread awareness about the mushrooming fake websites...</Text>

                <Flex
                    justifyContent={'space-between'}
                    w={'15%'}
                    m={'auto'}
                    mt={'3rem'}
                >
                    <Box
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<ArrowBackIcon />}
                            onClick={goToPrevious}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            borderRadius={'50%'}
                            w='40px'
                            h='40px'
                            bgColor={'#E3E9EC'}
                        />
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="Next"
                            icon={<ArrowForwardIcon />}
                            onClick={goToNext}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            bgColor={'#E3E9EC'}
                            w='40px'
                            borderRadius={'50%'}
                            h='40px'
                        />
                    </Box>
                </Flex>
            </Box>

        </Flex>;


    const Component5 = () =>
        <Flex className={style.main_2}>

            <Box className={style.box_1}>
                <Image w={'45%'} src='https://www.boat-lifestyle.com/cdn/shop/files/TOI_1_231x.png?v=1705555311' />
            </Box>

            <Box className={style.box_2}>


                <Flex
                    w={'10%'}
                    margin={'auto'}
                    justifyContent={'space-around'}
                >

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#1a2024"
                            />
                        </g>
                    </svg>

                    <svg width="100%" viewBox="0 0 1000 1000" > {/* viewBox defines the coordinate system */}
                        <g transform="scale(20)">


                            <path
                                d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z"
                                transform="translate(-339.562 -564.814)"
                                fill="#666666"
                            />
                        </g>
                    </svg>

                </Flex>

                <Text className={style.texts}>Boat launches its first 4G calling smartwatch, Boat Lunar Pro LTE</Text>

                <Flex
                    justifyContent={'space-between'}
                    w={'15%'}
                    m={'auto'}
                    mt={'3rem'}
                >
                    <Box
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<ArrowBackIcon />}
                            onClick={goToPrevious}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            borderRadius={'50%'}
                            w='40px'
                            h='40px'
                            bgColor={'#E3E9EC'}
                        />
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="Next"
                            icon={<ArrowForwardIcon />}
                            onClick={goToNext}
                            transform="translateY(-50%)"
                            color={'#666666'}
                            fontSize={'1.8rem'}
                            p={'1rem'}
                            bgColor={'#E3E9EC'}
                            w='40px'
                            borderRadius={'50%'}
                            h='40px'
                        />
                    </Box>
                </Flex>
            </Box>

        </Flex>;

    const components = [<Component1 />, <Component2 />, <Component3 />, <Component4 />, <Component5 />];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? components.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === components.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <Box className={style.main}>
                <Text className={style.heading}>In the <b>Pre<span>ss</span></b></Text>
            </Box>

            <Box >
                {components[currentIndex]}


            </Box>
        </>
    );
};

export default Press;