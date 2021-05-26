import react,{ useState } from 'react';

class Modal extends react.Component {
    componentWillMount() {
        console.log('Component is being mounted : WillMount');
    }
    componentDidMount() {
        console.log('Component mounted : DidMount');
        document.addEventListener('keydown', this.closeModel )
    }

    componentWillUnmount() {
        console.log('Component unmounted : WillUnmount');
    }

    UNSAFE_componentWillReceiveProps() {
        console.log( this.props.title );
        console.log( 'received updated props : WillReceiveProps' )
    }
    UNSAFE_componentWillUpdate() {
        console.log( this.props.title );
        console.log( 'received new props : WillUpdate' )
    }
    componentDidUpdate(){
        console.log( this.props.title );
        console.log( 'Altered some props : DidUpdate' )
    }

    closeModel = ( event ) => {
        // escape key 
        if( event.keyCode == 27 ) { this.props.triggerColse() }
    }
    
    render() {
        const { children, title } = this.props;
        return (
            <div style={modalStyle}>
                <div style={modalTitleStyle}>
                {title}
                <button style={ btn_styles } onClick={ this.props.triggerColse }>x</button>
                </div>
                <div style={modalContentStyle}>{children}</div>
            </div>
        );
    }
}

const LifeCycleApp = () => {
    const [ showModel, updateShowModel ] = useState( false );
    const toggleModel = () => {  updateShowModel( !showModel );   }

    return(<>
            <button className="main" onClick={ toggleModel } > Show / Hide Modal </button>
          { showModel && (
            <Modal title="The model to toggle" triggerColse={ toggleModel }>
                <p className="main">Card title</p>
                <div> Card Body  <ul><li>item 1</li><li>item 2</li></ul> </div>
            </Modal>
          ) }
        </>)
}
export default LifeCycleApp;

const btn_styles = {
    float: "right"
};
  
const modalStyle = {
    width: "250px",
    height: "250px",
    background: "white",
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
    position: "fixed",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};
  
const modalTitleStyle = {
    background: "red",
    color: "white",
    padding: "8px"
};

const modalContentStyle = {
    padding: "24px"
};