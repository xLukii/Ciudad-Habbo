import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Hoteles extends React.Component{

     // Estado inicial.
     state = {
          loading: true,
          error: null,
          data: {
               results: []
          }
     };

     // Obtener datos.
     componentDidMount() {
          this.fetchHotels();
     }

     // Realizar consulta.
     fetchHotels = async () => {
          
          // Actualizar estado.
          this.setState({ loading: true, error: null })

          // Intentar consulta.
          try {
               // Consulta.
               const response = await fetch('https://www.json-generator.com/api/json/get/cgcWXofpAi')
               const data     = await response.json();

               // Actualizar estado.
               this.setState({
                    loading: false,
                    data: {
                         results: [].concat(this.state.data.results, data)
                    },
               });
          } 
          // En caso de error...
          catch (error) {
               this.setState({ loading: false, error: error });
          };
     };

     // Mostrar Hoteles.
     render(){
          return(
               <React.Fragment>
                    <ListGroup className="list-group-flush">
                         {this.state.loading && (
                              <Skeleton count={5} height={45} />
                         )}
                    
                         {this.state.data.results.map(hotel => (
                              <ListGroupItem key={ hotel.id }>{ hotel.username }</ListGroupItem>
                         ))}
                    </ListGroup>     
               </React.Fragment>
          )}
}

export default Hoteles;