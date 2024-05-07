import React, { useContext } from 'react'
import data_7 from '../JSONS/line5.json'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import style from '../Cards/Cards.module.css';
import { LiaStarSolid } from 'react-icons/lia';
import { Authcontext } from '../../AuthContextProvider';

const Home_Threate = () => {
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
      console.log(data);
      fetchCartItem();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box className={style.main}
      mt={'1.4rem'}>

      <Flex className={style.flex_1}>
        {
          data_7.map((el, ind) => {
            return <Box key={el.id} className={style.card_1} >

              <Box className={style.card_1_img}  >
                <Image src={el.poster} />

                {/* <Box className={style.abs}>
                  <Text>{el.cap_1}</Text>
                </Box> */}

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

                    <span style={{ fontSize: '1.2rem', marginTop: '.2rem', marginLeft: '.2rem' }}>{el.stars}</span>

                    {el.reviews ? <>
                      <span style={{ marginLeft: '1rem', fontSize: '1.3rem', color: '#B2B9BF', marginTop: '.3rem' }}>|</span>

                      <span
                        style={{ fontSize: '1.2rem', fontWeight: '400', marginTop: '.2rem' }}
                      >{el.reviews}</span>

                      <Image w={'8%'} src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152' />
                    </> : ''}


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
    </Box>

  )
}

export default Home_Threate