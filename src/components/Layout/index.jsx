import Navbar from "../Navbar"

export const DashboardLayout = ({children}) => {

    return(
        <div>
            <Navbar />
            <>
                {children}
            </>
        </div>
    )

}