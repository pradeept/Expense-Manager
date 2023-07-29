import { useState } from "react";
import Table from "../components/expenses/Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateExpenseModal from "../components/expenses/modals/CreateExpenseModal";
import { AnimatePresence } from "framer-motion";
import DeleteModal from "../components/expenses/modals/DeleteModal";
import Accordion from "../components/expenses/Accordion";
import { data } from "../samples/tableData";

function ViewExpensesPage() {
    const [startDate, setStartDate] = useState(new Date());

    const [showCreateModal, setShowCreateModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [searchExpense, setSearchExpense] = useState("");

    const [expenses, setExpenses] = useState(data);

    const handleSearch = (e) => {
        setSearchExpense(e.target.value);
        setExpenses(
            data.filter((item) => {
                return searchExpense === ""
                    ? item
                    : item.name
                          .toLowerCase()
                          .includes(searchExpense.toLowerCase());
            })
        );
    };

    const handleCreateExpenseModalClose = () => {
        setShowCreateModal(false);
    };

    const handleCreateExpense = () => {
        setShowCreateModal(true);
        //after creating set back to false
    };

    const handleExpenseDelete = () => {
        setShowDeleteModal(true);
        //check user selection yes / no
        //if yes do needy
        //if no set showDeleteModal back to false
    };
    const handleExpenseEdit = () => {};

    return (
        <>
            <div className='flex flex-col justify-center '>
                <h1 className='text-3xl m-8 text-center font-bold tracking-wide z-10'>
                    Expense Manager 💰
                </h1>
                <div className='flex flex-col md:flex-row text-slate-600 justify-end items-center gap-10 mx-10'>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className='border-b-2 text-center  focus:outline-none focus:border-b-blue-400'
                    />
                    <input
                        type='text'
                        placeholder='Search by name'
                        value={searchExpense}
                        onChange={handleSearch}
                        className='border-b-2 focus:outline-none text-center md:text-left focus:border-b-blue-400'
                    />

                    <button
                        onClick={handleCreateExpense}
                        className='bg-green-500 text-[#e4e4e4] px-2 py-1 w-full md:w-auto cursor-pointer hover:bg-green-700'
                    >
                        + Create new Expense
                    </button>
                </div>
                {
                    <AnimatePresence>
                        {showCreateModal && (
                            <CreateExpenseModal
                                handleClose={handleCreateExpenseModalClose}
                                edit={false}
                            />
                        )}
                    </AnimatePresence>
                }
                {
                    <AnimatePresence>
                        {showDeleteModal && (
                            <DeleteModal
                                handleClose={() => setShowDeleteModal(false)}
                            />
                        )}
                    </AnimatePresence>
                }
                <Table
                    onDelete={handleExpenseDelete}
                    onEdit={handleExpenseEdit}
                    data={expenses}
                />
                <Accordion />
            </div>
        </>
    );
}

export default ViewExpensesPage;
