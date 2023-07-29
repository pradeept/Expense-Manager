import { useState } from "react";
import { data } from "../../samples/tableData";
import { IoIosArrowDropdown } from "react-icons/io";

function Accordion() {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const renderedAccordions = data
        .filter((_, index) => index < 5)
        .map((item) => {
            const expanded = item.id === expandedIndex;
            return (
                <div className='w-full'>
                    <div className='flex justify-between px-4 py-2'>
                        <p>{item.name}</p>

                        <IoIosArrowDropdown
                            onClick={() =>
                                setExpandedIndex((prev) => {
                                    return prev === item.id ? -1 : item.id;
                                })
                            }
                        />
                    </div>
                    {expanded && (
                        <div>
                            <p>{item.category}</p>
                            <p>{item.dateOfExpense}</p>
                            <p>{item.amount}</p>
                            <p>{item.updatedAt}</p>
                        </div>
                    )}
                </div>
            );
        });

    return <div className='mx-8'>{renderedAccordions}</div>;
}
export default Accordion;
