import React, { useContext, useState } from 'react';
import style from './Cards.module.css';
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import Newlaunch from './Multiple/Newlaunch';
import Personalisation from './Multiple/Personalisation';
import RecentlyViewed from './Multiple/RecentlyViewed';
import { HiArrowRightCircle } from "react-icons/hi2";
import { LiaStarSolid } from "react-icons/lia";
import data_1 from '../JSONS/line1.json';
import data_2 from '../JSONS/line2.json';
import { Authcontext } from '../../AuthContextProvider';

const Cards = () => {

    const [selectedComponent, setSelectedComponent] = useState(<Newlaunch />);
    const [selectedButton, setSelectedButton] = useState(1);

    const handelButtonClick = (component, num) => {
        setSelectedComponent(component);
        setSelectedButton(num);
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        if (activeIndex !== index) {
            setActiveIndex(index);
            playVideo(index);
        }
    };

    const playVideo = (index) => {
        const videos = document.querySelectorAll("video");
        videos.forEach((video, i) => {
            if (i !== index) {
                video.pause();
            }
        });
        videos[index].play();
    };

    const { fetchCartItem } = useContext(Authcontext);

    const AddtoCart = async (poster, title, price) => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch("https://test-back-2-h9d7.onrender.com/product/create", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    poster: poster,
                    title: title,
                    price: price
                })
            });
            const data = await res.json();
            console.log(data)
            fetchCartItem();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Box className={style.main}>

            {/* 1st pair of card */}
            <Flex className={style.flex_1}>
                {
                    data_1.map((el, ind) => {
                        return <Box key={el.id} className={style.card_1}>

                            <Box className={style.card_1_img}>
                                <Image src={el.poster} />

                                <Box className={style.abs}>
                                    <Text>{el.cap_1}</Text>
                                </Box>

                                <Box className={style.abs_2}>
                                    <Button>{el.cap_2}</Button>
                                </Box>
                            </Box>

                            <Flex mt={'2rem'}
                                justifyContent={'space-between'}
                                p={'1rem'}
                            >
                                <Box>
                                    <Text
                                        fontSize={'1.4rem'}
                                        fontWeight={700}
                                        mt={'.8rem'}
                                    ><b>{el.title}</b></Text>
                                    <Text
                                        mt={'.4rem'}
                                    >
                                        <span style={{ fontSize: '1.6rem' }}><b>{el.price}</b></span>
                                        <span style={{ fontSize: '1.2rem', color: '#B2B9BF', marginLeft: '.7rem', fontWeight: 500 }}><del>{el['Regular price']}</del></span>
                                        <span style={{ marginLeft: '.7rem', fontSize: '1.2rem', color: '#12B985', fontWeight: 700 }}>{el.off}</span>
                                    </Text>
                                    <Flex
                                        alignItems={'center'}
                                        mt={'.4rem'}
                                    >
                                        <LiaStarSolid fontSize={'1.8rem'} color='#F4C730' fontWeight={700}
                                        />

                                        <span style={{ fontSize: '1.2rem', marginTop: '.2rem', marginLeft: '.2rem' }}>{el.stars}</span>  <span style={{ marginLeft: '1rem', fontSize: '1.3rem', color: '#B2B9BF', marginTop: '.3rem' }}>|</span> <span
                                            style={{ fontSize: '1.2rem', fontWeight: '400', marginTop: '.2rem' }}
                                        >{el.reviews}</span>

                                        <Image w={'8%'} src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152' />
                                    </Flex>
                                </Box>

                                <Box
                                    mt={'3.2rem'}

                                >
                                    <Button
                                        fontSize={'1.4rem'}
                                        bgColor={'#1A2024'}
                                        color={'#fff'}
                                        fontWeight={'lighter'}
                                        pt={'1.8rem'}
                                        pb={'1.8rem'}
                                        pl={'1.3rem'}
                                        pr={'1.3rem'}
                                        borderRadius={'7px'}
                                        _hover={'disable'}
                                        onClick={() => AddtoCart(el.poster, el.title, el.price)}
                                    >Add To Cart</Button>
                                </Box>

                            </Flex>
                        </Box>
                    })
                }
            </Flex>
            {/* para - 1 */}
            <Text
                fontSize={'2.4rem'}
                fontWeight={500}
                mt={'2rem'}
                ml={'1rem'}
                letterSpacing={'1px'}
            >Explore <b>Bestselle<span style={{ borderBottom: '2.5px solid rgb(216, 51, 51)' }}>rs</span></b></Text>
            {/* 2nd pair of card */}
            <Flex
                ml={'2rem'}
                mt={'1.8rem'}
            >
                {data_2.map((el, index) => {
                    return <Box
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        mr={'1.2rem'}
                    >
                        <video style={{ cursor: 'pointer', borderRadius: '10px' }}
                            autoPlay={index === activeIndex}
                            muted
                            loop
                            width={350} poster={el.poster}>
                            <source src={el.video} />
                        </video>
                        <Text mt={'.7rem'} fontWeight={700} fontSize={'1.6rem'} textAlign={'center'}>{el.cap_1}</Text>
                    </Box>
                })}
            </Flex>

            {/* para - 2 */}
            <Text
                fontSize={'2.4rem'}
                fontWeight={500}
                mt={'4rem'}
                ml={'1rem'}
                letterSpacing={'1px'}
            >Just <b>For Y<span style={{ borderBottom: '2.5px solid rgb(216, 51, 51)' }}>ou</span></b></Text>

            <Box>
                <Box w={'100%'}>

                    <Flex
                        justifyContent={'space-between'}
                        width={'98%'}
                        margin={'auto'}
                        mt={'1.5rem'}
                    >
                        <Box
                            display={'flex'}
                            w={'40%'}
                            justifyContent={'space-between'}
                            className={style.mult_div}
                        >
                            <Button
                                style={selectedButton === 1 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                                fontSize={'1.6rem'} onClick={() => handelButtonClick(<Newlaunch />, 1)}>New Launches
                            </Button>


                            <Button
                                style={selectedButton === 2 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                                fontSize={'1.6rem'} onClick={() => handelButtonClick(<Personalisation />, 2)}>Personalisation
                            </Button>


                            <Button
                                style={selectedButton === 3 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                                fontSize={'1.6rem'} onClick={() => handelButtonClick(<RecentlyViewed />, 3)}>Recently Viewed
                            </Button>

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
            </Box>

            <Box >

                {selectedComponent}
            </Box>
        </Box>
    );
};

export default Cards;