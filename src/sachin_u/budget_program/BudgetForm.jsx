import react,{useState} from 'react';
const BudgetForm = ( props ) => {
    const [ expense, setExpenses ] = useState({
            expense_title: "",
            expense_amount: 0
    })

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( 0 == expense.expense_amount || '' == expense.expense_title ) {return false}
        props.submitExpense( expense );
        setExpenses({expense_title: "",  expense_amount: 0});
    }

    const updateExpense = (e) => {
        let [ element, elementValue ] = [e.target.name, e.target.value]
        setExpenses( ( currentExpenses ) => {
            return{ ...currentExpenses, [element]: elementValue }
        } )
    }
    return(<>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" onChange={updateExpense} value={expense.expense_title} className="form-control" name="expense_title" placeholder="Example input"/>
                    </div>
                    <div className="form-group">
                        <input type="number" onChange={updateExpense} value={expense.expense_amount} min="0" max="100000" name="expense_amount" className="form-control" placeholder="123"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-success" value="Add"/>
                    </div>
                </form>
            </div>
    </>)
};
export default BudgetForm;