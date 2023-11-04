import { useState, useEffect } from "react";
import NextProgress from 'nextjs-progressbar';

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [dashbordData, setDashboardData] = useState([]);

    useEffect(()=> {
        async function fetchDashboardData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
            const data =   await response.json()
            setDashboardData(data)
            setIsLoading(false);
            console.log(dashbordData,"cjjj")
        }
        fetchDashboardData()
    },[])
   
    if(isLoading){
        return (
            <>
            <NextProgress/>
            </>
        )
    }
    return (
        <div>
            <h2>Dashboard</h2>
        {
            dashbordData.map((dash:any, id:number)=>{
                return(
                    <>
                    <tr key={id}>
                    <td>{dash.name}</td>
                    </tr>
                    </>
                )
            })
        }
        </div>
    )
}
export default Dashboard;