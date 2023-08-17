import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector , useDispatch} from "react-redux"
import { selectCurrentToken, setCredentials } from "./authSlice"

const RequireAuth = () => {
    const dispatch = useDispatch()
    //dispatch(setCredentials({accessToken: "23", user: "test"}))
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    return (
        token
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth