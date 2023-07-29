import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";


function Table({ onEdit, onDelete,data }) {
    const renderedRows = data
        .filter((item, index) => index < 5)
        .map((item) => {
            return (
                <tr class='bg-white border-b text-center' key={item.id}>
                    <th class='px-6 py-4'>{item.name}</th>
                    <td class='px-6 py-4'>{item.category}</td>
                    <td class='px-6 py-4'>{item.dateOfExpense}</td>
                    <td class='px-6 py-4'>{item.amount}</td>
                    <td class='px-6 py-4'>{item.updatedAt}</td>
                    <td>
                        <div className='h-full w-full flex items-center gap-4 justify-center'>
                            <BiEdit
                                onClick={()=>onEdit(item.id)}
                                className='cursor-pointer hover:text-yellow-500'
                                size='1.2rem'
                            />

                            <AiOutlineDelete onClick={()=>onDelete(item.id)} size='1.2rem' className="cursor-pointer hover:text-red-500"/>
                        </div>
                    </td>
                </tr>
            );
        });

    return (
        // name,category, date of expense , amount, updated at, created by, _edit & _delete icons
        <div className='container mx-auto'>
            <div class='relative overflow-x-auto mx-4 my-8 border-2 '>
                <table class='w-full text-sm text-left text-gray-500 -400 '>
                    <thead class='text-xs text-gray-700 uppercase bg-gray-50 -700 -400'>
                        <tr className='text-center'>
                            <th class='px-6 py-3'>Name</th>
                            <th class='px-6 py-3'>Category</th>
                            <th class='px-6 py-3'>Date of Expense</th>
                            <th class='px-6 py-3'>Amount</th>
                            <th class='px-6 py-3'>Updated At</th>
                            <th class='px-6 py-3'>Created By</th>
                            <th class='px-6 py-3'></th>
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
        </div>
    );
}

export default Table;
