import { Button as ChakraButton, ButtonProps, ComponentWithAs} from "@chakra-ui/react"

export const StyledButton: ComponentWithAs<"button", ButtonProps> = (props) => {
   return <ChakraButton color="white" fontStyle="italic" borderRadius={0} bgColor="black" colorScheme="gray" border="1px solid transparent" _hover={{ bgColor: "white", color: "black", border: "1px solid black" }} {...props} />
}
