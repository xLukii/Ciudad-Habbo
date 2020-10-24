import React from 'react';
import Header from '../Header/Header';

import { Spinner, Button } from 'react-bootstrap';

class Hoteles extends React.Component{

     state = {
          nextPage: 1,
          loading: true,
          error: null,
          data: {
               results: []
          }
     };

     componentDidMount() {
          this.fetchData();
     }

     fetchData = async () => {
          this.setState({ loading: true, error: null })

          try {
               const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
               const data     = await response.json();

               this.setState({
                    loading: false,
                    data: {
                         info: data.info,
                         results: [].concat(this.state.data.results, data.results)
                    },
                    nextPage: this.state.nextPage + 1,
               });
          } catch (error) {
               this.setState({ loading: false, error: error });
          };
     };

     render(){
          return(
               <React.Fragment> 
                    <Header />

                    <h1>Hoteles</h1>

                    <ul>
                         {this.state.data.results.map(hotel => (
                              <li key={hotel.id}>
                                   {hotel.name}
                              </li> 
                         ))}
                        
                    </ul>

                    {this.state.loading && (
                         <Spinner animation="border" role="status">
                              <span className="sr-only">Loading...</span>
                         </Spinner>
                    )}

                    {!this.state.loading && (
                         <Button variant="primary" onClick={() => this.fetchData()}>Cargar más</Button>
                    )}
               </React.Fragment> 
          );
     }
}

export default Hoteles;