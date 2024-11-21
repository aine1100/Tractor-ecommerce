import Dropdown from "./dropdown";

export default function TextFIlter() {
    return (
        <div className="container flex justify-between mx-auto items-center">
            <div className="container flex items-center text-center justify-between p-2 ">
                <h2 className="text-2xl text-black 
                 font-semibold">Found 376 results for <span className="text-yellow-500">Field</span></h2>

            </div>
            <Dropdown options={["Sort by Featured"]} width="200px"
                height="2.5rem" />

        </div>
    )
}