import React, {Component} from 'react';

export class QOD extends Component{
   constructor(props) {
         super(props);
         this.state = {
            items: [],
            isLoaded: false,
         };
      }

      componentDidMount() {
         fetch('https://quotes.rest/qod?language=en')
            .then(res => res.json())
            .then(json => {
               this.setState({
                  isLoaded: true,
                  items: json,
               });
            });
      }

      render() {

         var { isLoaded, items } = this.state;

         if (!isLoaded) {
            return <div>Loading...</div>;
         }

         else {
            return (
               <div className="QOD">
                  Data has been loaded

                  <ul>
                           <li>
                             quote: {items.contents.quotes.quote} | Length: {items.length}
                           </li>
                  </ul>
               </div>
            );

         }
      }
   }