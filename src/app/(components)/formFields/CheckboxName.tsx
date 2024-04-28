import Link from "next/link";
import React from "react";

function CheckboxName(){
    return(
        <>
            <span className="form-check-label">By entering your email, you are agreeing to the <Link href={"#"}>Terms of Service</Link> and <Link href={"#"}>Privacy Policy</Link>. Thanks!</span>
        </>
    )
}

export default CheckboxName;