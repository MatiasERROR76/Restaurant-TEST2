import React, {Component} from "react";
import { ApiDePedidos } from "../services/apirest";
import axios from 'axios';
import HeaderPedidos from "../template/HeaderPedidos";


 
class Pedidos extends Component{

    state={
        order_details:[]
    } ;


    clickPedidos(id){
        this.props.history.push("/pedidos/");
    }


    
    componentDidMount(){
            let url = ApiDePedidos;
            axios.get(url)
            .then(response =>{
                this.setState({
                    order_details : response.data.order_details
                })
                
            })
    }

    render(){
        
        return(
               
            <React.Fragment>

                <HeaderPedidos></HeaderPedidos>
                <div className="container">
            <br></br>

                <table id="customers" className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Nombre de menú</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Número de orden</th>
                        <th scope="col">Número de mesa</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    
                    <tbody> 
                        {this.state.order_details.map((value, index) => {
                           return (
                            <tr key={index} onClick={ () => this.clickPedidos(value.id)  }  >
                            <td>{value.menu.name}</td>
                            <td>{value.quantity}</td>
                            <td>{value.status.name}</td>
                            <td>{value.id}</td>
                            <td>{value.table.number}</td>
                            <td>
                                <button >ver</button>
                            </td>
                            </tr>
                            )
                        })}
                         
                 
                    </tbody>
                    </table>
                
                </div>

                    
            </React.Fragment>
          
        );
    }

}


export default Pedidos;