import React from 'react'
import style from './Tribe.module.css';
import { Text, Box, Flex } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data_11 from '../JSONS/line11.json';

const Tribe = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <Box w={'100%'}>
            <Text className={style.heading}>Join the <b>Tri<span>be</span></b></Text>

            <Carousel
                responsive={responsive}
                // removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'superLargeDesktop']}
                showDots={false} // Hide navigation dots
                containerClass={style.carousel_container}
                className={style.carousel}
            >
                {data_11.map(item => (
                    <Box key={item.id} className={style.main}  >

                        <div className={style.carousel_item}>

                            <video autoPlay loop muted className={style.carousel_video}>
                                <source src={item.vid} type="video/mp4" />
                            </video>

                            <img src={item.img} alt={item.title} />

                        </div>

                        <div className={style.text}>
                            <h3>{item.title}</h3>

                            </div>

                            <Flex
                                w={'60%'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                mt={'2rem'}
                                ml={'5rem'}
                            >
                                <Text
                                    fontSize={'1.7rem'}
                                    fontWeight={600}
                                >{item.price}</Text>

                                <Text
                                    fontSize={'1.5rem'}
                                    fontWeight={400}
                                    color={'#A8AFB6'}
                                >
                                    <del>{item.regular_price}</del>
                                </Text>

                                <Text
                                    fontSize={'1.4rem'}
                                    fontWeight={500}
                                    color={'#12B985'}
                                >{item.discount}</Text>


                            </Flex>


                    </Box>
                ))}

            </Carousel>

        </Box>
    );
};

export default Tribe;