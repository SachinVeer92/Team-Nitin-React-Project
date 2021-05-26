import react from 'react';
import BudgetBody from './BudgetBody';
import '../../su_index.css';

const BudgetApp = () => {
    return(<>
        <section id="header_container" className="su_header">
            <div> Time To Budget</div>
        </section>
        <section id="budget_container">
            <BudgetBody />
        </section>
    </>);
}
export default BudgetApp;