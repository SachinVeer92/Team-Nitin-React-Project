


const Expenses = ( props ) => {
    const { attrExpense, id, attrRemoveExp } = props;
    return(<>
        <div className="p-2 border border-warning expenseDiv">
            <div className="title">{ attrExpense.expense_title }</div>
            <div className="amount text-danger">Rs { Number(attrExpense.expense_amount) } /-</div>
            <div><button onClick={ () => attrRemoveExp( id ) }>X</button></div>
        </div>
    </>)
}
export default Expenses