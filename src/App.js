import logo from './logo.svg';
import './App.css';
import { CChart } from '@coreui/react-chartjs';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CContainer} from '@coreui/react';
import { CRow } from '@coreui/react';
import { CCol ,CForm,CFormLabel,CFormInput,CFormTextarea} from '@coreui/react';
import { CCard, CCardImage, CCardTitle, CCardText,CButton,CCardBody} from '@coreui/react';

import Content from './Dashboard';


function App() {
  return (
    <div>
      <Content>
    <CChart
      type="line" 
      data={{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "rgba(220, 220, 220, 1)",
            pointBackgroundColor: "rgba(220, 220, 220, 1)",
            pointBorderColor: "#fff",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(151, 187, 205, 0.2)",
            borderColor: "rgba(151, 187, 205, 1)",
            pointBackgroundColor: "rgba(151, 187, 205, 1)",
            pointBorderColor: "#fff",
            data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
          },
        ],
      }}
    />
        <CChart
      type="bar"
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
        ],
      }}
      labels="months"
    /></Content>
    </div>
    
  );
  
}

export default App;
