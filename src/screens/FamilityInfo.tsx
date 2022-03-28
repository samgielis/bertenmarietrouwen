import { Text, ModalProps, Stack } from "@chakra-ui/react"
import { InfoModal } from "../components/InfoModal"

export const FamilyInfo: React.FC<Omit<ModalProps, "children">> = (props) => {
    return <InfoModal title={"Dag lieve familie en vrienden"} {...props}>
        <Stack spacing={3}>
            <Text fontSize={"lg"}>
                Jullie zijn welkom bij ons <b>vanaf 16 uur</b> voor een natje en een droogje in onze tuin.
            </Text>
            <Text fontSize={"lg"}>
                We starten met een kleine informele ceremonie, <b>van 19 tot 21 uur is er eten voorzien</b>. Gelieve allergenen en voedselvoorkeuren (veggie, vegan) <b>zo snel mogelijk door te geven</b>!
            </Text>
            <Text fontSize={"lg"}>
                We voorzien geen animatie voor kinderen, dit is een adults-only feestje 😊.
            </Text>
        </Stack>
    </InfoModal>
}
