import React from 'react'
import style from './Footer.module.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <Box className={style.main}>
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                w={'27%'}
                m={'auto'}
            >
                <Text fontSize={'1.6rem'} fontWeight={700} letterSpacing={'1px'}>Let's get social</Text>
                <FaFacebookF fontSize={'1.8rem'} />
                <FaXTwitter fontSize={'1.8rem'} />
                <FaInstagram fontSize={'1.8rem'} />
                <FaYoutube fontSize={'1.8rem'} />
                <FaLinkedinIn fontSize={'1.8rem'} />
            </Flex>

            <Flex
                w={'18%'}
                m={'auto'}
                mt={'4rem'}
                justifyContent={'space-between'}
            >
                <Text fontSize={'1.2rem'} fontWeight={700} >Privacy Policy</Text>
                <Text fontSize={'1.2rem'} fontWeight={700}>Terms & Conditions</Text>
            </Flex >

            <Box
            ml={'5rem'}
            >
                <Text
                    fontSize={'1.2rem'}
                    color={'#A7AFB7'}
                    w={'30%'}
                    m={'auto'}
                    mt={'3rem'}
                >© 2024 Imagine Marketing Limited. All Rights Reserved.</Text>

                <Text
                    fontSize={'1.2rem'}
                    color={'#A7AFB7'}
                    w={'55%'}
                    m={'auto'}
                    mt={'1rem'}
                >For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
                </Text>

                <Text
                    fontSize={'1.2rem'}
                    color={'#A7AFB7'}
                    w={'45%'}
                    m={'auto'}
                    mt={'1rem'}
                    pb={'2rem'}
                >Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</Text>
            </Box>
        </Box>
    );
};

export default Footer