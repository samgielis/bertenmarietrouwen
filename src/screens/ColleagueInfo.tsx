import { Text, ModalProps, Stack } from "@chakra-ui/react"
import { InfoModal } from "../components/InfoModal"

export const ColleagueInfo: React.FC<Omit<ModalProps, "children">> = (props) => {
    return <InfoModal title={"Dag collega's"} {...props}>
        <Stack spacing={3}>
            <Text fontSize={"lg"}>
                We verwachten jullie <b>vanaf 21 uur</b> om onze trouwdag samen af te sluiten.
            </Text>
            <Text fontSize={"lg"}>Drank en happe’kens zullen voorzien worden. Babbel een beetje aan de vuurkorf, zoek een plekje om gezelschapsspelletjes spelen, gooi je beentjes los op de dansvloer of ga verstoppertje in het donker spelen. Het kan allemaal tot een kot in de nacht of wanneer je er genoeg van hebt.</Text>
            <Text fontSize={"lg"}>Om de groep beperkt genoeg te kunnen houden, vragen we aan collega’s om <b>zonder partner</b> te komen.</Text>
        </Stack>
    </InfoModal>
}
