import React from "react"
import { NavigationContainer } from "@react-navigation/native"

// import PrincipalStack from "./PrincipalStack"
import TabNav from "./TabNav"

const MainNav = () => (
    <NavigationContainer>
        <TabNav />
    </NavigationContainer>
)

export default MainNav