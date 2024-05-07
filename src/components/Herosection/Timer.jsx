import { Box } from '@chakra-ui/react';
import React from 'react'
import Countdown from 'react-countdown';

const Timer = () => {
    return (
        <Box mt={'1rem'} position="relative" display="flex" justifyContent="center" alignItems="center">
            <img style={{ borderRadius: '10px' }} src='https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web_1_1600x.jpg?v=1712559891' alt='Banner' />
            <Box position="absolute" right={250} fontSize={'3.5rem'} padding="10px" w={'500px'}>
                <Countdown
                    date={Date.now() + 15 * 60 * 60 * 1000} // 15 hours from now
                    renderer={({ hours, minutes, seconds }) => (
                        <div>
                            <span style={{ fontSize: '2rem' }}>Ending in</span> &nbsp;<b>{hours}</b> <span style={{ fontSize: '2rem' }}>Hours :</span> &nbsp; <b>{minutes}</b>  <span style={{ fontSize: '2rem' }}>Mins :</span>&nbsp; <b>{seconds}</b> <span style={{ fontSize: '2rem' }}></span>
                        </div>
                    )}
                />
            </Box>
        </Box>

    )
}

export default Timer