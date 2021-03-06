import { AspectRatio, Heading, HStack, Img, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { StyledButton } from "../components/StyledButton"
import { StackedScreen } from "../layouts/StackedScreen"
import { ColleagueInfo } from "./ColleagueInfo";
import { FamilyInfo } from "./FamilityInfo";

export const InvitationScreen = () => {
    const { isOpen: isCInfoOpen, onClose: onCloseCInfo, onOpen: onOpenCInfo } = useDisclosure();
    const { isOpen: isFInfoOpen, onClose: onCloseFInfo, onOpen: onOpenFInfo } = useDisclosure();

    return <StackedScreen forceDirection={"column"}>
        <Stack spacing={0}>
            <Stack spacing={4}>
                <Heading size="3xl" letterSpacing={4} fontWeight={400}>Bert & Marie</Heading>
                <Text fontSize="xl" fontWeight={900} textTransform="uppercase" >gaan trouwen</Text>
            </Stack>
            <Img src="./bannersmall.png" opacity={.5} />
        </Stack>
        <Stack>
            <Text fontSize={"lg"}>
                <b>‘Wil je met me trouwen?‘</b> vroeg Bert aan Marie, op zijn knietje ergens in een bos in de Ardennen, in volle coronacrisis. ‘Awel, ’t is goed’, zei Marie.
            </Text>
            <Text fontSize={"lg"}>
                Een verhuizing, een Iron Man en een paar coronagolven later, is het eindelijk zover. Op <b>20 augustus 2022</b> zeggen we, 5 jaar nadat we voor het eerst voor elkaar kozen, ‘ja’ aan een leven met elkaar, als man en vrouw.
            </Text>
            <Text fontSize={"lg"}>
                De trouw zelf gaat door om <b>10.30u</b> aan <b>het stadhuis in Lede</b>. Die ceremonie willen we in beperkte kring laten doorgaan. We sparen alle opgekropte feestenergie op voor later.
            </Text>
            <p>~</p>
            <Text fontSize={"lg"}>
                <b>Vrijblijvende cadeautip</b>: BE21 0018 6479 6203. Wij sparen voor verf, een nieuwe zetel, een boekenkast, en een reis naar Patagonië.
            </Text>
        </Stack>
        <Stack spacing={10} pos="relative">
            <Heading fontWeight={400}>Uitnodiging</Heading>
            <HStack>
                <StyledButton type="submit" onClick={onOpenFInfo}>
                    Voor familie & vrienden
                </StyledButton>
                <StyledButton type="submit" onClick={onOpenCInfo}>
                    Voor collega's
                </StyledButton>
            </HStack>
            <FamilyInfo isOpen={isFInfoOpen} onClose={onCloseFInfo} />
            <ColleagueInfo isOpen={isCInfoOpen} onClose={onCloseCInfo} />
        </Stack>
        <Stack spacing={10} w="100%">
            <Heading fontWeight={400}>Locatie</Heading>
            <AspectRatio minW="100%" ratio={1} borderRadius="lg" overflow="hidden">
                <iframe title="locatie" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.544397578676!2d3.936070815750267!3d50.9691272795503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c398c867449171%3A0x2f4263d7bb2d663d!2sSerskampstraat%2031%2C%209340%20Lede!5e0!3m2!1sen!2sbe!4v1646246350673!5m2!1sen!2sbe" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </AspectRatio>
            <Stack>
                <Heading fontWeight={400} size="md">Parkeren</Heading>
                <Text fontStyle="italic" align="left">
                    We hebben toestemming gekregen om onze gasten te laten parkeren op de parking van FC Smetlede (zie kaartje). Gelieve zo veel mogelijk daar te staan, indien die parking vol is, kan er langs de kant van de weg geparkeerd worden. Carpoolen is ook een fijne optie om het aantal wagens tot een minimum te beperken!
                </Text>
                <Text fontStyle="italic" align="left" color="red.500">
                    Gelieve zeker niet in het kleine zijstraatje naar ons huis te parkeren, dat houden we vrij voor foodtrucks en dergelijke.
                </Text>
            </Stack>
        </Stack>
    </StackedScreen>
}
