import { Box, Center, Divider, Stack, StackDirection, StackDivider, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const DualScreen: React.FC<{forceDirection?: StackDirection}> = ({ children, forceDirection }) => {
    const direction: StackDirection | undefined = useBreakpointValue({ base: forceDirection || "column", md: forceDirection || "row" });
    const sectionSpacing = useBreakpointValue({ base: 10, md: 20 }) || 10
    return <Stack pos="relative" divider={<Divider alignSelf={"center"} w="100%" size='30' borderColor="gray.300" />} direction={direction} spacing={sectionSpacing}>
        {React.Children.toArray(children).map(child => <Center>{child}</Center>)}
    </Stack>
}
