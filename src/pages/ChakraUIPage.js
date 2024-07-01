import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Heading,
  Text,
  Flex,
  Avatar,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Progress,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        '4xl': { fontSize: '2.25rem' },
        '3xl': { fontSize: '1.875rem' },
        '2xl': { fontSize: '1.5rem' },
        'xl': { fontSize: '1.25rem' },
      },
    },
  },
});

function ChakraUIPage() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="800px" margin="auto" padding={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Chakra UI Components
        </Heading>

        {/* Badges Section */}
        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>Badges</Heading>
          <Text mb={4}>Badges are used to highlight an item's status for quick recognition.</Text>
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Flex>
              <Avatar src='https://bit.ly/sage-adebayo' />
              <Box ml='3'>
                <Text fontWeight='bold'>
                  Segun Adebayo
                  <Badge ml='1' colorScheme='green'>
                    New
                  </Badge>
                </Text>
                <Text fontSize='sm'>UI Engineer</Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Menu Section */}
        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>Menu</Heading>
          <Text mb={4}>The Menu component is used to display a list of actions or options that a user can choose from.</Text>
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Menu>
              <MenuButton as={Button} colorScheme='pink'>
                Profile
              </MenuButton>
              <MenuList>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Help</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        {/* Stats Section */}
        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>Stats</Heading>
          <Text mb={4}>The Stat component is used to display statistics or metrics with optional indicators.</Text>
          <Box p={6} borderWidth={1} borderRadius="lg">
            <StatGroup>
              <Stat>
                <StatLabel>Sent</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                  <StatArrow type='increase' />
                  23.36%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Clicked</StatLabel>
                <StatNumber>45</StatNumber>
                <StatHelpText>
                  <StatArrow type='decrease' />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </Box>

        {/* Progress Section */}
        <Box mb={12}>
        <Heading as="h2" size="xl" mb={4}>Progress</Heading>
        <Text mb={4}>The Progress component is used to display the progress status for a task that takes a long time or consists of several steps. </Text>
        <Box p={6} borderWidth={1} borderRadius="lg">
          <Progress colorScheme='green' size='lg' value={40} />
        </Box>
        </Box>

        {/* Number Input Section */}
        <Box mb={12}>
        <Heading as="h2" size="xl" mb={4}>Number Input</Heading>
        <Text mb={4}>The NumberInput component is similar to the Input component, but it has controls for incrementing or decrementing numeric values.</Text>
        <Box p={6} borderWidth={1} borderRadius="lg">
          <NumberInput defaultValue={15}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        </Box>

        {/* Custom Badge Section */}
        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>Custom Badge</Heading>
          <Text mb={4}>A customized badge with a unique design and color scheme.</Text>
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Flex alignItems="center">
              <Avatar size="lg" src='https://bit.ly/dan-abramov' />
              <Box ml='3'>
                <Text fontWeight='bold' fontSize="xl">
                  Dan Abramov
                  <Badge ml='2' fontSize="0.8em" colorScheme='purple' variant="solid" borderRadius="full" px={3}>
                    VIP
                  </Badge>
                </Text>
                <Text fontSize='md' color="gray.500">React Core Team</Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Custom Menu Section */}
        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>Custom Menu</Heading>
          <Text mb={4}>A customized menu with icons and a different color scheme.</Text>
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Menu>
              <MenuButton as={Button} rightIcon={<span>▼</span>} colorScheme='teal'>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem icon={<span>👤</span>}>Profile</MenuItem>
                <MenuItem icon={<span>💳</span>}>Billing</MenuItem>
                <MenuItem icon={<span>⚙️</span>}>Settings</MenuItem>
                <MenuItem icon={<span>❓</span>}>Help</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        {/* Custom Stats Section */}
        <Box mb ={12}>
          <Heading as="h2" size="xl" mb={4}>Custom Stats</Heading>
          <Text mb={4}>Customized stat components with different colors and layouts.</Text>
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Flex justify="space-between">
              <Stat>
                <StatLabel fontSize="lg" fontWeight="medium">Total Users</StatLabel>
                <StatNumber fontSize="4xl" fontWeight="bold" color="blue.500">1,024,032</StatNumber>
                <StatHelpText>
                  <StatArrow type='increase' />
                  12.5% increase
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel fontSize="lg" fontWeight="medium">Revenue</StatLabel>
                <StatNumber fontSize="4xl" fontWeight="bold" color="green.500">$5.6M</StatNumber>
                <StatHelpText>
                  <StatArrow type='increase' />
                  8.2% increase
                </StatHelpText>
              </Stat>
            </Flex>
          </Box>
        </Box>


        {/* Custom Number Input Section */}
        <Box mb={12}>
        <Heading as="h2" size="xl" mb={4}>Custom Number Input Section</Heading>
        <Text mb={4}>A customized number input with a different color scheme.</Text>
        <Box p={6} borderWidth={1} borderRadius="lg">
        <NumberInput size='sm' defaultValue={15} min={10}>
          <NumberInputField focusBorderColor='red.200' />
          <NumberInputStepper>
            <NumberIncrementStepper
              bg='yellow.200'
              _active={{ bg: 'yellow.300' }}
              children='+'
            />
            <NumberDecrementStepper
              bg='green.200'
              _active={{ bg: 'green.300' }}
              children='-'
            />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </Box>
    </Box> 
    </ChakraProvider>
  );
}

export default ChakraUIPage;