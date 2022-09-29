import { Stack, Heading, Box } from "@chakra-ui/react";

export const ThankYou = () => (
    <Stack spacing={20}>
        <Box borderRadius='3xl' overflow={'hidden'}>
            <img src='thx.jpeg' alt='Bedankt om er bij te zijn, jammer genoeg laadt deze mooie foto niet.' />
        </Box>
        <Stack>
            <Heading sixe='2xl' letterSpacing={2}>Bedankt om er bij te zijn.</Heading>
            <Heading size="xl" letterSpacing={4} fontWeight={400}>Bert & Marie</Heading>
        </Stack>
    </Stack>
)
