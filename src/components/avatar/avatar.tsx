// demo:<Avatar email="admin@gmail.com" size='large'/>
import "./avatar.scss"
const Avatar=({email='',size=''})=>{
   
    return <div className={`e-avatar-${size}`}>
        {email.slice(0,2).toUpperCase()}
    </div>
}
export default Avatar;