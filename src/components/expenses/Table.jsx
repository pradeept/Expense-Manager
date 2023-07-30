import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses, setShowDlete } from "../../store/store";
import { useEffect } from "react";
import LoadingModal from "./modals/LoadingModal";
import { dateDiff } from "../../utils/dateDiff";
import { AnimatePresence } from "framer-motion";
import DeleteModal from "./modals/DeleteModal";
var ID = -1;
var NAME = localStorage.getItem("name");

function Table({ onEdit }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExpenses());
    }, []);

    const showDeleteModal = useSelector((state) => {
        return state.expenses.showDelete;
    });

    const handleExpenseDelete = (id) => {
        dispatch(setShowDlete());
        ID = id;
    };

    const { data, showLoading } = useSelector(
        ({ expenses: { data, searchTerm, showLoading, searchDate } }) => {
            const filteredData = data.filter((expense) => {
                if (searchDate !== 0) {
                    return (
                        new Date(expense.dateOfExpense).toLocaleDateString(
                            "es"
                        ) === new Date(searchDate).toLocaleDateString("es")
                    );
                } else {
                    return expense.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                }
            });

            return {
                data: filteredData,
                showLoading,
            };
        }
    );

    const renderedRows = data
        .filter((item, index) => index < 5)
        .reverse()
        .map((item) => {
            const updatedTime = dateDiff(item.createdAt);
            return (
                <tr className='bg-white border-b text-center' key={item.id}>
                    <th className='px-6 py-4'>{item.name}</th>
                    <td className='px-6 py-4'>{item.category}</td>
                    <td className='px-6 py-4'>
                        {new Date(item.dateOfExpense).toLocaleDateString("es")}
                    </td>
                    <td className='px-6 py-4 font-semibold'>
                        {item.amount + " ₹"}
                    </td>
                    <td className='px-6 py-4'>{updatedTime.toString()}</td>
                    <td className='px-6 py-4'>
                        {item.owner === NAME ? "me" : item.owner}
                    </td>
                    <td>
                        <div className='h-full w-full flex items-center gap-4 justify-center'>
                            <BiEdit
                                onClick={() => onEdit(item.id)}
                                className='cursor-pointer hover:text-yellow-500 text-xl'
                            />

                            <AiOutlineDelete
                                onClick={() => handleExpenseDelete(item.id)}
                                className='cursor-pointer hover:text-red-500 text-xl'
                            />
                        </div>
                    </td>
                </tr>
            );
        });

    return (
        <div className='container mx-auto'>
            {showLoading && <LoadingModal />}
            <div className='relative overflow-x-auto mx-4 my-8 border-2 '>
                <table className='w-full text-sm text-left text-gray-500 -400 '>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 -700 -400'>
                        <tr className='text-center'>
                            <th className='px-6 py-3'>Name</th>
                            <th className='px-6 py-3'>Category</th>
                            <th className='px-6 py-3'>Date of Expense</th>
                            <th className='px-6 py-3'>Amount</th>
                            <th className='px-6 py-3'>Updated At</th>
                            <th className='px-6 py-3'>Created By</th>
                            <th className='px-6 py-3'></th>
                        </tr>
                    </thead>
                    <tbody className='odd:bg-slate-400'>{renderedRows}</tbody>
                </table>
            </div>
            <div className='flex justify-end mx-48'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
            <AnimatePresence>
                {showDeleteModal && <DeleteModal id={ID} />}
            </AnimatePresence>
        </div>
    );
}

export default Table;
