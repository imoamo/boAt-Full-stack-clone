import React, { useState, useEffect } from 'react';
import styles from './Herosection.module.css';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { HiArrowRightCircle } from "react-icons/hi2";

import Timer from './Timer';

const HeroSection = () => {

    return (
        <Box className={styles.parent}>

            <Text className={styles.p}>Shop by <b>Categori<span>es</span></b></Text>

            <Box className={styles.Grid}>

                <Box className={styles.child}>
                    <Box className={styles.Image}>
                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062' />
                    </Box>
                    <Text className={styles.Text}>True Wireless Earbuds</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287' />
                    <Text className={styles.Text}>Neckbands</Text>
                    <Box className={styles.overlay}></Box>
                </Box>


                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668' />
                    <Text className={styles.Text}>Smart Watches</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051' />
                    <Text className={styles.Text}>Wireless Headphones</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751' />
                    <Text className={styles.Text}>Wireless Speakers</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196' />
                    <Text className={styles.Text}>Wired Headphones</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424' />
                    <Text className={styles.Text}>Wired Earphones</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849' />
                    <Text className={styles.Text}>Soundbars</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903' />
                    <Text className={styles.Text}>Gaming headphones</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961' />
                    <Text className={styles.Text}>Party Speakers</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

                <Box className={styles.child}>
                    <Image className={styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994' />
                    <Text className={styles.Text}>Trimmers</Text>
                    <Box className={styles.overlay}></Box>
                </Box>

            </Box>

            <Box className={styles.part_2}>

                <Flex className={styles.text_1}
                    justifyContent={'space-between'}
                >

                    <Text fontSize={'2.5rem'}>boAt <b>x I<span>PL</span></b></Text>
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
                <Timer />
            </Box>
        </Box>
    );
};
export default HeroSection;