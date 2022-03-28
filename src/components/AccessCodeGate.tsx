import { Box, FormControl, FormErrorMessage, FormHelperText, Input, Stack, useToast, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Endpoints } from "../utils/endpoints";
import { Fade } from '@chakra-ui/react'
import { StyledButton } from "./StyledButton";

export const AccessCodeGate: FC = ({ children }) => {
    const [hasAccess, setHasAccess] = useState(false);
    const toast = useToast();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values: { accessCode: string }) {
        const handleError = () => {
            toast({
                title: "Er ging iets mis.",
                description: "Je gaf waarschijnlijk een verkeerde toegangscode in. Bij aanhoudende problemen kan je ons contacteren op info@bertenmarietrouwen.be.",
                status: "error",
                isClosable: true,
            });
        }
        return new Promise((resolve, reject) => {
            fetch(Endpoints.AccessCheck, {
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
                    setHasAccess(true);
                    resolve(undefined);
                }
            }).catch((e) => {
                handleError();
                reject();
            })
        });
    }

    return <>
        {!hasAccess &&
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={6}>
                    <Text fontSize="md" fontWeight={"bold"} textTransform="uppercase">Toegangscode</Text>
                    <FormControl id="accessCode" isRequired>
                        <Input type="string"
                            {...register("accessCode", {
                                required: "Toegangscode ontbreekt",
                            })}
                            borderRadius={0}
                        />
                        <FormErrorMessage>
                            {errors.accessCode && errors.accessCode.message}
                        </FormErrorMessage>
                        <FormHelperText opacity={.8} fontStyle={"italic"}>Je vindt jouw toegangscode op onze Save The Date.</FormHelperText>

                    </FormControl>
                    <Box>
                        <StyledButton mr={3} isLoading={isSubmitting} type="submit">
                            Aanmelden
                        </StyledButton>

                    </Box>
                </Stack>
            </form>
        }
        <Fade in={hasAccess} delay={.3}>
            {hasAccess && <>{children}</>}
        </Fade>
    </>
}
