import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function DeleteModal({ handleClose }) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-gray-300 bg-opacity-80 z-10 flex items-center justify-center'
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
                exit={{ scale: 0.5, opacity: 0 }}
            >
                <button
                    onClick={handleClose}
                    className='w-48 h-20 bg-orange-500'
                >
                    X
                </button>
            </motion.div>
        </motion.div>,
        document.getElementById("delete-container")
    );
}

export default DeleteModal;
