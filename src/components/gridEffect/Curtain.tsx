import { useEffect } from "react";

/*
    The purpose of this element is to hide the Index page until javascript has loaded
    because the GridEffect element requires JS in order to be properly formated.
*/

export default function Curtain() {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        var element = document.getElementById("curtain");
        if (element != null) {
            disableCurtain(element);
        } else {
            console.log("Curtain Element is Null!")
        }
    }, [])

    return (
        <div id="curtain" className="bg-c-bg-00 w-[100vw] h-[110vh] -translate-y-[var(--header-height)] z-50 absolute"></div>
    )
}

async function disableCurtain(element: HTMLElement) {
    await delay(100);
    element.hidden = true;
    document.body.style.overflow = "auto"
    document.body.style.overflowX = "hidden"
}

function delay(time: number) {
    return new Promise(res => setTimeout(res, time));
}