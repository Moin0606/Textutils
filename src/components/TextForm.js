import React,{useState} from 'react'

export default function TextForm(props) {
    const clickhandler=()=>
    {
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert('Converted to upper case','success')

    }
    const clicklohandler=()=>
    {
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert('Converted to lower case','success')

    }
    const changehandler=(event)=>{
        setText(event.target.value)
    }
    const[btn1,btntoggle]=useState("Enter dark mode");
    const[myStyle,setMyStyle]=useState(
      {
        color:'black',
        backgroundColor:'white'
      }
    );
    
    const toggle=()=>{
      if(myStyle.color==='black')
      {
        setMyStyle({
          color:'white',
          backgroundColor:'black'
        })
        btntoggle("Enable light mode")

        }
        else{
          setMyStyle({
            color:'black',
            backgroundColor:'white'
          })
          btntoggle("Enable dark mode")

        }
      

    }
const [text ,setText]=useState('');
  return (
    
      <div className="container"  style={{color:props.mode==='light'?'black':'white'}} >
          
        <h1>{props.heading}</h1>
  <div className="form-group">
    
    <textarea className="form-control" id="mybox" value={text}  onChange={changehandler} rows="8" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='light'?'black':'white'}}></textarea>
    <button className="btn btn-primary mx-2 my-2" onClick={clickhandler}>Convert to UpperCase</button>
    <button className="btn btn-primary  mx-2 my-2" onClick={clicklohandler}>Convert to LowerCase</button>
    
     
     </div>
     <div className="container" >
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} characters including spaces are present</p>
        <h3>Time for reading</h3>
        <p>{0.008* text.split("").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
     </div>

 
</div>

  )
}
