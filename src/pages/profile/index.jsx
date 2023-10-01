import { useParams } from "react-router-dom"

function Profile(){

    const { slug } = useParams();

    return(
        <div>
            profile sayfa - {slug}
        </div>
    )
}

export default Profile