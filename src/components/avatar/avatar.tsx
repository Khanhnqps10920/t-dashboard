// demo:<Avatar email="admin@gmail.com"/>
import "./avatar.scss"
const Avatar=({email=''})=>{
    return <div className="e-avatar">
        {email.slice(0,2).toUpperCase()}
    </div>
}
export default Avatar;