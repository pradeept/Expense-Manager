import { useEffect, useState } from "react";
import Table from "../components/expenses/Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateEditModal from "../components/expenses/modals/CreateEditModal";
import { AnimatePresence } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchDate, setSearchTerm } from "../store/store";
import { useNavigate } from "react-router-dom";

function ViewExpensesPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { searchTerm, searchDate } = useSelector((state) => {
        return state.expenses;
    });

    useEffect(() => {
        const name = localStorage.getItem("name");
        name === null && navigate("/");
    }, []);

    const [showExpenseCEModal, setShowExpenseCEModal] = useState({
        show: false,
        edit: false,
        id: -1,
    });

    const handleCreateEditModalClose = () => {
        setShowExpenseCEModal((prev) => ({ edit: false, id: -1, show: false }));
    };

    const handleCreateExpense = () => {
        setShowExpenseCEModal((prev) => ({ ...prev, show: true }));
    };

    const handleExpenseEdit = (id) => {
        setShowExpenseCEModal((prev) => ({ edit: true, id, show: true }));
        console.log("expense edit", id);
    };

    const handleLogout = () => {
        localStorage.removeItem("name");
        navigate('/')
    };

    const createOrEditExpense = (
        <AnimatePresence>
            {showExpenseCEModal.show && (
                <CreateEditModal
                    handleClose={handleCreateEditModalClose}
                    edit={showExpenseCEModal.edit}
                    id={showExpenseCEModal.id}
                />
            )}
        </AnimatePresence>
    );

    return (
        <>
            <div className='flex flex-col justify-center '>
                <FiLogOut
                    onClick={handleLogout}
                    className='place-self-end mx-10 cursor-pointer hover:text-blue-600 my-1 text-2xl'
                ></FiLogOut>
                <h1 className='text-3xl m-8 text-center font-bold tracking-wide z-10'>
                    Expense Manager 💰
                </h1>
                <div className='flex flex-col md:flex-row text-slate-600 justify-end items-center gap-10 mx-10'>
                    <DatePicker
                        selected={searchDate}
                        onChange={(date) => {
                            dispatch(setSearchDate(date.getTime()));
                        }}
                        maxDate={new Date()}
                        placeholderText={new Date().toLocaleDateString("es")}
                        className='border-b-2 text-center  focus:outline-none focus:border-b-blue-400'
                    />
                    <input
                        type='text'
                        placeholder='Search by name'
                        value={searchTerm}
                        onChange={(e) =>
                            dispatch(setSearchTerm(e.target.value))
                        }
                        className='border-b-2 focus:outline-none text-center md:text-left focus:border-b-blue-400'
                    />

                    <button
                        onClick={handleCreateExpense}
                        className='bg-green-500 text-[#e4e4e4] px-2 py-1 w-full md:w-auto cursor-pointer hover:bg-green-700'
                    >
                        + Create new Expense
                    </button>
                </div>

                <Table onEdit={handleExpenseEdit} />
                {/* <Accordion /> */}
                {createOrEditExpense}
            </div>
        </>
    );
}

export default ViewExpensesPage;
