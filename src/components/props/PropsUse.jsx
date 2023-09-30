// componente Article
export const Article = ({title, subtitle})=>{
    return (
        <>
            <h1> {title} </h1>
            <h4> {subtitle} </h4>
        </>
        
    )
}

export const PropsUse = () => {
    return (
        <>
            <Article 
                title="Esto esta de pinga.."
                subtitle="Pa que decirte, tu sabes..."
            />
        </>
    )
}