import {useRef , useEffect , useState} from 'react'
import { faCheck, faTimes, faInfoCircle, faL} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser ] = useState('');
  const [validName , setValidName] = useState(false);
  const [userFocus , setUserFocus ] = useState(false);

  const [pwd, setPwd ] = useState('');
  const [validPwd , setValidPwd] = useState(false);
  const [pwdFocus , setPwdFocus ] = useState(false);

  const [matchPwd, setMatchPwd ] = useState('');
  const [validMatchPwd , setValidMatchPwd] = useState(false);
  const [matchpwdFocus , setmatchPwdFocus ] = useState(false);

  const [errMsg , setErrMsg ] = useState('');
  const[success , setSuccess] = useState(false);

  useEffect(()=>{
    // userRef.current.focus();
  }, [])

  useEffect(()=>{
      const result = USER_REGEX.test(user);
      console.log(result);
      console.log(user);
      setValidName(result)


  }, [user])

  useEffect(()=>{
 
     const result = PWD_REGEX.test(pwd);
     console.log(result);
     console.log(pwd);
     setValidPwd(result);
     const match = pwd === matchPwd;
     setValidMatchPwd(match)

  },[pwd , matchPwd])

  useEffect(()=>{
    setErrMsg('');
  }, [user , pwd , matchPwd])


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
        setErrMsg('Invalid Entry');
        return;
    }

    console.log(user , pwd);
    setSuccess(true);
    

  }

  return (
    <section className='container mx-auto '>
         <div className='w-full h-screen bg-gray-800 flex items-center justify-center'>
          <div className='bg-blue-500 max-w-[500px] rounded-lg py-4 px-4'>
          <p ref={errRef} className={errMsg ? "" : ""} aria-live='assertive'>{errMsg}</p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
              {/* for user Input  */}
              <label htmlFor="username">
                Username : 
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>

               <span className={validName || !user ? 'hide' : 'invalid'}>
                 <FontAwesomeIcon icon={faTimes}/>
               </span>
                
              </label>
              <input
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e)=> setUser(e.target.value)}
                required
                aria-invalid = {validName ? "false" : "true"}
                aria-describedby='uidnote'
                onFocus={()=>setUserFocus(true)}
                onBlur={()=> setUserFocus(false)}          
              />
              <p id='uidnote' className={userFocus && user && !validName ? "" : "" }>
                <FontAwesomeIcon icon={faInfoCircle}/>
                4 to 24 characters. <br />
                Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>

              {/* for password  */}
              <label htmlFor="password">
                Password : 
                <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>

               <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                 <FontAwesomeIcon icon={faTimes}/>
               </span>
                
              </label>
              <input
                type='password'
                id='password'
                onChange={(e)=> setPwd(e.target.value)}
                required
                aria-invalid = {validPwd ? "false" : "true"}
                aria-describedby='pwdnote'
                onFocus={()=>setPwdFocus(true)}
                onBlur={()=> setPwdFocus(false)}          
              />
              <p id='pwdnote' className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle}/>
                8 to 24 characters. <br />
                Must include uppercase and lowecase letters, a number and a special characher. <br />
                Allowed special characters :
                   <span aria-label='exclamation mark'>!</span>
                   <span aria-label='at symbol'>@</span>
                   <span aria-label='dollar sign'>$</span>
                   <span aria-label='percent'>%</span>
              </p>

              {/* for confirm Password  */}
              <label htmlFor="conf_password">
               Confirm Password : 
                <span className={validMatchPwd && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>

               <span className={validMatchPwd || !matchPwd ? 'hide' : 'invalid'}>
                 <FontAwesomeIcon icon={faTimes}/>
               </span>
                
              </label>
              <input
                type='password'
                id='conf_password'
                onChange={(e)=> setMatchPwd(e.target.value)}
                required
                aria-invalid = {validMatchPwd ? "false" : "true"}
                aria-describedby='confirmnote'
                onFocus={()=>setmatchPwdFocus(true)}
                onBlur={()=> setmatchPwdFocus(false)}          
              />
              <p id='confirmnote' className={matchpwdFocus && !validMatchPwd ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle}/>
                Password must be same.
              </p>

            <button type='submit' disabled={!validName || !validPwd || !validMatchPwd ? true : false}>Sign up</button>


          </form>
           <p>
              Already registerd ? <br />
              <span className=''>
                <a href="#">Sign In</a>
              </span>
           </p>

          </div>
          
              
         </div>

    </section>
  )
}

export default Register