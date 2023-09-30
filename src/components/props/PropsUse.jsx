import PropTypes from 'prop-types'

// componente Article
export const Article = ({title, subtitle})=>{
    return (
        <>
            <h1> {title} </h1>
            <h4> {subtitle} </h4>
        </>
        
    )
}

// definicion de default-props, esta validacion se realiza antes
// que la de las prop-types
Article.defaultProps = {
    subtitle: 'Default Subtitle',
    title: 'Default Title',
}

// definicion de prop-types
Article.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

// componente PropUse
export const PropsUse = () => {
    return (
        <>
            <Article 
                title="Esto esta de pinga.."
                
            />
        </>
    )
}