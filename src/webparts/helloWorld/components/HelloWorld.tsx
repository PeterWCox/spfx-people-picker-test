import * as React from "react";
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { IHelloWorldProps } from "./IHelloWorldProps";

export const HelloWorld = (props: IHelloWorldProps) => {

    return (
      <PeoplePicker
        context={props.context}
        titleText="People Picker"
        personSelectionLimit={3}
        groupName={"Team Site Owners"} // Leave this blank in case you want to filter from all users
        showtooltip={true}
        required={true}
        disabled={true}
        onChange={() => {}}
        showHiddenInUI={false}
        principalTypes={[PrincipalType.User]}
        resolveDelay={1000} 
      />
    )

};
