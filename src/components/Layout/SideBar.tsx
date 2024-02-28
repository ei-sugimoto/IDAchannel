import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import {Link} from 'react-router-dom'
import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton,  Stack, useDisclosure, Link as Url, HStack, Spacer } from "@chakra-ui/react"
export function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton onClick={onOpen} aria-label="Open Sidebar" icon={<HamburgerIcon />} bg={'white'} maxHeight={'100%'}/>     
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={'xs'}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
                <HStack>
                    <Box>ページ一覧</Box>
                    <Spacer />
                    <Box>
                    <IconButton
                    aria-label='clouse sidebar'
                    icon={<CloseIcon />}
                    size={'xs'}
                    onClick={onClose}
                    />
                    </Box>
                </HStack>
                
                
            </DrawerHeader>
            <DrawerBody>
                <Stack>
                    <Box><Link to='/' onClick={onClose}><Url>home</Url></Link></Box>
                    <Box><Link to='/page1' onClick={onClose} ><Url>page1</Url></Link></Box>
                </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }