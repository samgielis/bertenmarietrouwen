
import { Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Stack, Link } from "@chakra-ui/react"
import { StyledButton } from "../components/StyledButton"

interface InfoModalProps extends ModalProps {
    title: string;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, children }) => {
    return <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px' />
        <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Stack p={2}>
                    <Text fontSize={"lg"}>Kom je? Stuur ons een mailtje:
                    </Text>
                    <StyledButton as={Link} href="mailto:info@bertenmarietrouwen.be">info@bertenmarietrouwen.be</StyledButton>
                </Stack>
            </ModalFooter>
        </ModalContent>
    </Modal>
}

