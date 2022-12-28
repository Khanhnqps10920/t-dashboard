// demo:<Avatar email="admin@gmail.com"/>

const Avatar=({email=''})=>{
    const styleBox={
        width:'100%',
        height:'100%',
        background:'#00FF7F',
        borderRadius:'50%',
        color:'white',
        fontSize:'5.5rem',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        fontWeight:'600',
    }
    return <div style={styleBox}>
        {email.slice(0,2).toUpperCase()}
    </div>
}
export default Avatar;