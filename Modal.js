import { useEffect, useRef, useState } from 'react';
import './Modal.css'
export default function Modal(props){
    const node = useRef();
    const [display,setDisplay] = useState('none');
    const handleOutsideClick = e => {
      if (node.current.contains(e.target)) {
        return;
      }
      if (!props.keepOpen){
        setDisplay('none');
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);
  return (
          <div>
            <button onClick={()=>setDisplay('block')}>
              {props.buttonTitle && props.buttonTitle}
            </button>
            <div className="CustomModal" style={{display:display}}>
              <div className="ModalContent" ref={node}>
                  <div className="ModalHeader">
                    <span className="close" onClick={()=>setDisplay('none')}>&times;</span>
                    <h2>{props.title}</h2>
                  </div>
                  <div className="ModalBody">
                        {props.bodyComponent && props.bodyComponent()}
                  </div>
              </div>
            </div>
          </div>);

}
