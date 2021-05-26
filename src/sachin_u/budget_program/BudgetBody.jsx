import react,{useState,useEffect} from 'react';
import Expense from './Expense';
import BudgetForm from './BudgetForm';

const BudgetBody = () => {
    var unbudgetedAmount;
    const [ income, setIncome ] = useState(0);
    const [ expenseData, setExpenseData ] = useState([]); // Array of object

    const updateIncome = ( e ) => {
        setIncome( Number(e.target.value) );
    }

    const addExpense = ( newExpense ) => {
        setExpenseData( ( currentExpensesData ) => {
                return( [...currentExpensesData, newExpense ] )
        } )
    }

    const removeExpense = ( keyId ) => {
        setExpenseData ( ( currentExpensesData ) => {
            return currentExpensesData.filter( ( currentExpense, index ) => {
                return index != keyId;
            } )
        } )
    }

    useEffect( () => {   // useEffect hook should useful as an ulternative for component lifecycle ecents
        let sum = 0;
        expenseData.map( ( currentObj,index, arrayElements ) => {
            sum += Number(currentObj.expense_amount);
        } )
        unbudgetedAmount = income - sum;
        document.getElementById('remainingAmount').value = unbudgetedAmount
    }, [ expenseData, income ] ) // will trigger on change of these states

    return(<>
        <div id="sidebar">
            <p> Monthly Income</p>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Rs</span>
                <input step="50" min="0" max="1000000" id="income" type="number" className="form-control" onChange={updateIncome}  value={income} placeholder="1234..." />
            </div>
            <hr/>
            <p> Unbudgeted Amount</p>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Rs</span>
                <input id="remainingAmount" type="number" className="form-control" disabled />
            </div>
        </div>
        <section id="expense_body">
            <BudgetForm submitExpense={ addExpense } />
            <div className="expenses_container">
                { expenseData.map( ( currentObj, index ) => {
                    return(<Expense attrExpense={currentObj} id={index} key={index} attrRemoveExp={removeExpense} /> );
                } ) }
            </div>
        </section>
    </>);
}; export default BudgetBody;