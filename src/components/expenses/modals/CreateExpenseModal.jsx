import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import DropDown from "../../DropDown";
import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";

function CreateExpenseModal({ handleClose, edit, id }) {
    const [expenseDetails, setExpenseDetails] = useState({
        name: "",
        description: "",
        category: "",
        dateOfExpense: new Date(),
        amount: 0,
    });

    useEffect(() => {
        if (edit) {
            //we will dispatch thunk and get the expense with
            //id prop
            //and set expense details
        }
    }, []);

    const categories = ["Health", "Travel", "Education", "Book", "Other"];

    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return ReactDOM.createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-gray-300 bg-opacity-80 z-10 flex items-center justify-center'
        >
            <motion.div
                initial={{ transform: "translate(0px,-2000px)", opacity: 0 }}
                animate={{ transform: "translate(0px,0px)", opacity: 1 }}
                exit={{ transform: "translate(0px,-2000px)", opacity: 0 }}
                className='fixed w-4/5 md:w-2/5 bg-white text-slate-600'
            >
                <div className='py-8 px-10 space-y-4'>
                    <div className='flex flex-col gap-3'>
                        <label>Name</label>
                        <input
                            type='text'
                            className='font-semibold border-b-2 focus:outline-none focus:border-b-blue-200 focus:bg-slate-50 p-1'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Description</label>
                        <input
                            type='text'
                            className='font-semibold border-b-2 focus:outline-none focus:border-b-blue-200 focus:bg-slate-50 p-1'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Category</label>
                        <DropDown
                            options={categories}
                            value={expenseDetails.category}
                            onChange={(option) => {
                                console.log(option);
                                setExpenseDetails((prev) => ({
                                    ...prev,
                                    category: option,
                                }));
                                console.log(expenseDetails);
                            }}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Date of Expense</label>
                        <DatePicker
                            selected={expenseDetails.dateOfExpense}
                            onChange={(date) =>
                                setExpenseDetails((prev) => ({
                                    ...prev,
                                    dateOfExpense: date,
                                }))
                            }
                            className='border-b-2 text-center  focus:outline-none focus:border-b-blue-400'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Amount</label>
                        <input
                            type='number'
                            className='font-semibold border-b-2 focus:outline-none focus:border-b-blue-200 focus:bg-slate-50 p-1'
                        />
                    </div>
                </div>
                <div className='flex justify-around my-8'>
                    <button
                        onClick={handleClose}
                        className='border-2 px-4 py-1 rounded bg-gray-500 text-[#e4e4e4]'
                    >
                        <AiOutlineClose size='1.5rem' />
                    </button>
                    <button className='border-2 px-4 py-1 rounded bg-green-500 text-[#e4e4e4] hover:bg-green-700'>
                        <MdDone size='1.5rem' />
                    </button>
                </div>
            </motion.div>
        </motion.div>,
        document.getElementById("create-modal-container")
    );
}

export default CreateExpenseModal;
