import React from 'react';
import {
    ChakraProvider,
    Box,
    Grid,
    theme,
    FormControl,
    FormLabel,
    Input,
    Select,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
    const [input, setInput] = useState('');

    const handleInputChange = e => setInput(e.target.value);

    const isError = input === '';

    return (
        <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={input} onChange={handleInputChange} />
                {!isError ? (
                <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
                ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
                </Select>
            </FormControl>
            </Grid>
        </Box>
        </ChakraProvider>
    );
}

export default App;
