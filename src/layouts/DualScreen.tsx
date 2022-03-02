import { Center, Stack, StackDirection, StackDivider, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const DualScreen: React.FC = ({ children }) => {
    const direction: StackDirection | undefined = useBreakpointValue({ base: "column", md: "row" });
    const sectionSpacing = useBreakpointValue({ base: 10, md: 20, lg: 36 }) || 10
    return <Stack divider={<StackDivider />} direction={direction} spacing={sectionSpacing}>
        {React.Children.toArray(children).map(child => <Center>{child}</Center>)}
    </Stack>
}
