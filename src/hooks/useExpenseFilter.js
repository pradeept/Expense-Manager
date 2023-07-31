import { useSelector } from "react-redux";

//This custom hook filters data based on search keyword and date selected.
function useExpenseFilter(){
    const { data } = useSelector(
        ({ expenses: { data, searchTerm, searchDate } }) => {
            const filteredData = data.filter((expense) => {
                
                if (searchDate !== 0) {
                    return (
                        new Date(expense.dateOfExpense).toLocaleDateString(
                            "es"
                        ) === new Date(searchDate).toLocaleDateString("es") 
                    );
                }else {
                    return expense.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                }
            });

            return {
                data: filteredData,
            };
        }
    );
    return data
}

export default useExpenseFilter;