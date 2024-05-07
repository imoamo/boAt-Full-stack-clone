import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from './Blogs.module.css'
import { HiArrowRightCircle } from "react-icons/hi2";

const Blogs = () => {

    const Component_1 = () => {
        return (

            <Flex className={style.blogs}>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/Gaming_Earbuds_for_Travel-_Compact_and_Portable_Gaming_Solutions_600x.png?v=1711005465' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>21 Mar, 2024</Text>
                        <Text className={style.text_2}>Gaming Earbuds for Travel: Compact and Portable Gaming</Text>
                        <Text className={style.text_3}>When nothing can stop a gamer from entering the arena, we have got gaming</Text>
                    </Box>

                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/BLOG4_600x.png?v=1709795916' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>08 Mar, 2024</Text>
                        <Text className={style.text_2}>How To Create Watch Faces Using The Watch Face Studio</Text>
                        <Text className={style.text_3}>Why Stick to a few watch faces on your smartwatch when you can many. Check out</Text>
                    </Box>

                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/ANC_for_Work-_How_Noise-Canceling_Headphones_Can_Boost_Productivity_600x.png?v=1709883646' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>13 Mar, 2024</Text>
                        <Text className={style.text_2}>ANC for Work: How Noise-Cancelling Headphones Can Boost</Text>
                        <Text className={style.text_3}>Noise at the workplace can become annoying sometimes. Don't worry, we have a</Text>
                    </Box>

                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/D2C_Bannner_copy_1_600x.jpg?v=1712562872' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>05 Apr, 2024</Text>
                        <Text className={style.text_2}>Shout Out to RCB and GT Fans: Something's Coming Soon</Text>
                        <Text className={style.text_3}>It's IPL 2024 and we have something coming up for Gujarat Titans and Royal Challengers</Text>
                    </Box>
                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

            </Flex>
        );
    };

    const Component_2 = () => {
        return (

            <Flex className={style.blogs}>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/blog_banner1_600x.png?v=1676377102' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>15 Feb, 2023</Text>
                        <Text className={style.text_2}>Social Welfare Initiatives 2022 - A Look Back</Text>
                        <Text className={style.text_3}>When people show trust in you and your company, you should always find a way to</Text>
                    </Box>

                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/Blog-1_600x.jpg?v=1664539128' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>30 Sep, 2022</Text>
                        <Text className={style.text_2}>Imagine Marketing India Ranked Amongst The Top 5 Wearable</Text>
                        <Text className={style.text_3}>Imagine Marketing India, the parent company of audio & wearable brand boAt</Text>
                    </Box>

                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/News_600x.png?v=1667822120' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>07 Nov, 2022</Text>
                        <Text className={style.text_2}>Scaling Up With New Conviction: boAt Raises INR 500 Crore From</Text>
                        <Text className={style.text_3}>boAt Lifestyle secures a raising of INR 500 crore ($60 million) from current investor,</Text>
                    </Box>

                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

                <Box className={style.child_1}>

                    <Image src='https://www.boat-lifestyle.com/cdn/shop/articles/blog_banner1_600x.png?v=1676377102' />

                    <Box className={style.text}>
                        <Text className={style.text_1}>15 Feb, 2023</Text>
                        <Text className={style.text_2}>Social Welfare Initiatives 2022 - A Look Back</Text>
                        <Text className={style.text_3}>When people show trust in you and your company, you should always find a way to</Text>
                    </Box>
                    <Box className={style.text_4}>
                        <Button>Read More
                            <Box
                                align={'center'}
                                fontSize={'1rem'}
                                fontWeight={'bolder'}
                                color={'#2F5B96'}
                                ml={3}
                            >
                                <HiArrowRightCircle fontSize={'2rem'} />
                            </Box>
                        </Button>
                    </Box>

                </Box>

            </Flex>
        )
    }


    const [selectedComponent, setSelectedComponent] = useState(<Component_1 />);
    const [selectedButton, setSelectedButton] = useState(1);


    const handelButtonClick = (component, num) => {
        setSelectedComponent(component);
        setSelectedButton(num);
    };


    return (
        <>

            <Box className={style.main}>
                <Text className={style.heading}>Blo<span>gs</span></Text>

            </Box>


            <Flex
                justifyContent={'space-between'}
                width={'22%'}
                ml={'4rem'}
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
                        fontSize={'1.6rem'} onClick={() => handelButtonClick(<Component_1 />, 1)}>Popular</Button>


                    <Button
                        style={selectedButton === 2 ? { color: 'Black', backgroundColor: '#ECF0F4' } : { color: '#9D9FA2', background: 'none' }}
                        fontSize={'1.6rem'} onClick={() => handelButtonClick(<Component_2 />, 2)}>
                        Latest
                    </Button>

                </Box>

            </Flex>

            {selectedComponent}


        </>
    )
}

export default Blogs