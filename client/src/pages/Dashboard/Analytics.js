import React , {useState,useEffect} from 'react'
import Header from '../../components/shared/Layout/Header';
import API from './../../services/API'
// import moment from "moment";

const Analytics = () => {
  //const [data,setData ]= useState([]);
  const [bloodData,setBloodData] = useState([]);
  //  const colors = [
  //   "#884A39",
  //   "#C38154",
  //   "#FFC26F",
  //   "#4F709C",
  //   "#4942E4",
  //   "#0079FF",
  //   "#FF0060",
  //   "#22A699",
  // ];
  //get blood group data
  const getBloodGroupData = async () => {
    try {
      const {data} = await API.get("/analytics/bloodGroups-data");
      if(data?.success){
        //setData(data?.getBloodGroupData);
        setBloodData(data?.getBloodGroupData);
        console.log(data);
      }
    } 
    catch(error){
      console.log(error);
    }
  };
  //lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  return (
    <>
      <Header /> 
      <p>hiii</p>
       <div className='d-flex flex-row flex-wrap'>
        {JSON.stringify(bloodData)}
          <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> 
</div>
 
        </div>
    </>
  );
};

export default Analytics
