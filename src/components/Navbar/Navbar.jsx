import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import Styles from './Navbar.module.css';
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci"
import { Link } from 'react-router-dom';
import { Authcontext } from '../../AuthContextProvider';

const Navbar = () => {

    const { product, setProduct } = useContext(Authcontext);

    const fetchCartItem = async () => {
        const token = localStorage.getItem("token");

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
        }
    };


    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'
    }

    const [placeholder, setPlaceholder] = useState([
        "search 'Headphones'",
        "search 'Earphones'",
        "search 'Speakers'",
        "search 'Smart watches'"
    ]);
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

    useEffect(() => {
        fetchCartItem();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPlaceholderIndex(prevIndex =>
                (prevIndex + 1) % placeholder.length
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box className={Styles.Main}>
            {/* fisrt div */}
            <Box className={Styles.first_box}>
                <Text className={Styles.font}>OUT NOW : Nirvana ION ANC
                    <b> Green Grove </b>
                    ! Shop before it's gone.
                </Text>
            </Box>
            {/* second div */}
            <Box className={Styles.navbar}>
                <Flex className={Styles.main}>

                    <Box className={Styles.img_1}>
                        <Image src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' />
                    </Box>

                    <Box className={Styles.Link_1}>

                        <section _hover={{ textDecoration: 'none' }} className={Styles.parent_chevron_1}>
                            <Flex className={Styles.SP_Flex}>
                                <Box>Categories</Box>
                                <Box className={Styles.icon_1}><FaChevronDown /></Box>
                            </Flex>
                            {/* Chevron_1 */}
                            <Box className={Styles.chevron}>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062' />
                                    <Text className={Styles.Text}>True Wireless Earbuds</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477' />
                                    <Text className={Styles.Text}>Personalised Products</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287' />
                                    <Text className={Styles.Text}>Neckbands</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>


                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668' />
                                    <Text className={Styles.Text}>Smart Watches</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051' />
                                    <Text className={Styles.Text}>Wireless Headphones</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751' />
                                    <Text className={Styles.Text}>Wireless Speakers</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196' />
                                    <Text className={Styles.Text}>Wired Headphones</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424' />
                                    <Text className={Styles.Text}>Wired Earphones</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849' />
                                    <Text className={Styles.Text}>Soundbars</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903' />
                                    <Text className={Styles.Text}>Gaming headphones</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961' />
                                    <Text className={Styles.Text}>Party Speakers</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994' />
                                    <Text className={Styles.Text}>Misfit Trimmers</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Charger_100x.png?v=1684828017' />
                                    <Text className={Styles.Text}>Chargers</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045' />
                                    <Text className={Styles.Text}>Power Banks</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/cables_cd468fe0-9b41-4eef-b686-0785c6478534_100x.png?v=1704789523' />
                                    <Text className={Styles.Text}>Cables</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_100x.png?v=1684828103' />
                                    <Text className={Styles.Text}>Car Accessories</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/imageedit_1_7038353159_100x.png?v=1684828134' />
                                    <Text className={Styles.Text}>Superhero Collection</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>


                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1684828168' />
                                    <Text className={Styles.Text}>Trebel for Women</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>

                                <Box className={Styles.child}>
                                    <Image className={Styles.Image} src='https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-limited-edition_100x.png?v=1684828200' />
                                    <Text className={Styles.Text}>Limited Edition</Text>
                                    <Box className={Styles.overlay}></Box>
                                </Box>
                            </Box>
                        </section>

                        <Link _hover={{ textDecoration: 'none' }}>boAt Personalisation</Link>

                        <Link _hover={{ textDecoration: 'none' }}>Gift with boAt</Link>

                        <Link _hover={{ textDecoration: 'none' }}>Corporate Orders</Link>

                        <Link _hover={{ textDecoration: 'none' }} className={Styles.parent_chevron_2} >
                            <Flex className={Styles.SP_Flex}>
                                <Box>More</Box>
                                <Box className={Styles.icon_1}><FaChevronDown /></Box>
                            </Flex>

                            <Box className={Styles.chevron_2}>

                                <Box className={Styles.child_2}>
                                    <Text>Daily Deals</Text>
                                    <Text>Blogs</Text>
                                    <Text>Refer & Earn</Text>
                                    <Text>Careers</Text>
                                    <Text>Social Responsiblity</Text>
                                    <Text>Store Locator</Text>
                                    <Text>boAt Community</Text>
                                </Box>

                            </Box>

                        </Link>
                    </Box>

                    <Box className={Styles.Link_2}>


                        <Box className={Styles.search}>
                            <InputGroup size='lg'>
                                <InputLeftElement pointerEvents='none'>


                                    <CiSearch fontSize={'4rem'} style={{ marginTop: '1rem', marginLeft: "1rem" }} />
                                </InputLeftElement>
                                <Input
                                    placeholder={placeholder[currentPlaceholderIndex]}
                                    _focusVisible={false}
                                    pl={'4rem'}
                                />
                            </InputGroup>

                            <section className={Styles.chevron_3}>
                                <Text>Most Searched And Bought</Text>
                                <Box className={Styles.search_drop}>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062' />
                                        <Text>True Wireless Earphones</Text>
                                    </Box>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477' />
                                        <Text>Personalised Products</Text>
                                    </Box>


                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668' />
                                        <Text>Smart Watches</Text>
                                    </Box>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287' />
                                        <Text>Wireless Neckbands</Text>
                                    </Box>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751' />
                                        <Text>Bluetooth Speakers</Text>
                                    </Box>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051' />
                                        <Text>Wireless Headphones</Text>
                                    </Box>


                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045' />
                                        <Text>Power Banks</Text>
                                    </Box>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424' />
                                        <Text>Wired Earphones</Text>
                                    </Box>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849' />
                                        <Text>Soundbars</Text>
                                    </Box>

                                    <Box className={Styles.child_3}>
                                        <Image src='https://www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994' />
                                        <Text>Trimmers</Text>
                                    </Box>

                                </Box>
                            </section>
                        </Box>

                        <Box className={Styles.logo_2}> <Button onClick={logout}>Logout</Button></Box>
                        <Box className={Styles.logo_3}>
                            <Link to={'/cart'}

                            >
                                <Flex position={'relative'}>
                                    <HiOutlineShoppingBag />
                                    <Box style={{ position: 'absolute', top: '-2rem', right: '-.5rem', fontSize: '1.6rem' }}>{product.length > 0 ? product.length : 0}</Box>
                                </Flex>
                            </Link>  </Box>

                    </Box>

                </Flex>


            </Box>

        </Box>
    );
};

export default Navbar;