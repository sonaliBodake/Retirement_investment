import React from 'react'
import Chart from 'react-apexcharts'
import './StackedChart.css'
function StackedChart() {
  return (
        <React.Fragment>
            <div className="container-fluid mb-3">
                
                <Chart
                type="bar"
                width={700}
                height={300}
                series={[
                    {
                        name:"Employer: K 73,500",
                        data:[10,15,20,25,30,35,40,45,50,55,60,65,70],
                        color: '#00008b'
                        
                    },
                    {
                        name:"Employee: K 52,500",
                        data:[20,25,30,35,40,45,50,55,60,65,70,80,96],
                        color: '#0000ff'
                    },
                    {
                        name:"Total Interest: K 244,313",
                        data:[50,55,60,65,70,75,80,85,90,95,100,105,110],
                        color: '#4d4dff'
                        
                    }
  
  
                ]}
  
                options={{
                    title:{
                        text:"Contributions Overtime"
                    },
                    chart:{
                        stacked:true,
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                          legend: {
                            position: 'top',
                            offsetX: -10,
                            offsetY: 0
                            
                          }
                        }
                      }],
                    plotOptions:{
                        bar:{
                            vartical:true,
                            columnWidth:'50%'
                          }
                    },
                    stroke: {
                        width: 1,
                    },
                    xaxis:{
                        
                        categories:['20','','25','','30','','35','','40','','60','','100']
                    },
                    yaxis:{
                        categories:['100','200','300']
                       
                    },
                    legend:{
                        position: 'top',
                        horizontalAlign: 'left',
                        
                    },
                    dataLabels:{
                        enabled:false,
                    },
                    grid: {
                        show:true,
                        
                        xaxis:{
                            lines:{
                                show:false
                                
                            }
                        },
                        yaxis:{
                            dashlines:{
                                show:true
                            }
                            
                        }
  
                    }
  
                }}
  
                />
            </div>
        </React.Fragment>
    );
  }


export default StackedChart