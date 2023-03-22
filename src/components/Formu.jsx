import React, {useState} from "react";
import FromSteps from "./FormSteps";

function Form() {
    const [steps, setSteps] = useState(1);

    return(
        <div>
            <div className="flex flex-row bg-red-200 justify-center items-center p-4 mx-auto ">
                <div className="flex flex-row bg-white rounded-full w-20 h-20 justify-center items-center text-2xl">1</div>
                <div className="bg-white w-12 h-3 ">&nbsp;</div>
                <div className="flex flex-row bg-white rounded-full w-20 h-20 justify-center items-center text-2xl">2</div>
                <div className="bg-white w-12 h-3 ">&nbsp;</div>
                <div className="flex flex-row bg-white rounded-full w-20 h-20 justify-center items-center text-2xl">3</div>
                <div className="bg-white w-12 h-3">&nbsp;</div>
                <div className="flex flex-row bg-white rounded-full w-20 h-20 justify-center items-center text-2xl">4</div>
            </div>
            <FromSteps/>
        </div>
    )
}
export default Form;