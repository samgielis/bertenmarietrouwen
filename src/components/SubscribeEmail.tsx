import { Stack, FormControl, Text, Input, FormErrorMessage, FormHelperText, Button, useToast, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form"
import { Endpoints } from "../utils/endpoints";
import { StyledButton } from "./StyledButton";


export const SubscribeEmail = () => {
    const toast = useToast();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values: { email: string }) {
        const handleError = () => {
            toast({
                title: "Er ging iets mis.",
                description: "Probeer het later nog eens of contacteer ons op info@bertenmarietrouwen.be.",
                status: "error",
                isClosable: true,
            });
        }
        return new Promise((resolve, reject) => {
            fetch(Endpoints.NewsletterSubscribtion, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((response) => {
                if (response.status !== 200) {
                    handleError();
                    reject();
                } else {
                    toast({
                        title: "Ingeschreven.",
                        description: "Je bent succesvol ingeschreven op de nieuwsbrief.",
                        status: "success",
                        isClosable: true,
                    });
                    resolve(undefined);
                }
            }).catch((e) => {
                handleError();
                reject();
            })
        });
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
        <Text fontSize="md" fontWeight={"bold"} textTransform="uppercase">Hou me op de hoogte</Text>
            <FormControl id="email" isRequired>
                <Input type="email"
                    placeholder="voorbeeld@gmail.com"
                    {...register("email", {
                        required: "E-mail is verplicht",
                    })}
                    borderRadius={0}
                    />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
                <FormHelperText  opacity={.8} fontStyle={"italic"} >Van zodra we alle info hebben krijg je op dit adres een update.</FormHelperText>

            </FormControl>
            <Box>
            <StyledButton isLoading={isSubmitting} type="submit">
                Inschrijven
            </StyledButton>

            </Box>
        </Stack>

    </form>
}
