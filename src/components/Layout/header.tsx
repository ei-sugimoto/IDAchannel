import { Box, Grid, GridItem, Heading} from '@chakra-ui/react';
import { useLayoutEffect, useState } from 'react';
import { SideBar } from './SideBar';

const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

function Header() {
    const [width] = useWindowSize();
    return (
        <Box width={width} bg={'gray.200'}>
            <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem colSpan={1}><SideBar /></GridItem>
            <GridItem colSpan={2} colStart={3}><Heading>いだちゃんねる</Heading></GridItem>
            </Grid> 
        </Box>        
          
    );
}

export default Header;