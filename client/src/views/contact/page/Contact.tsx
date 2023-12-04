import type { FC } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import React from 'react';

const defaultValues = {
    value1: '',
    value2: '',
    value3: ''
  }

export const Contact: FC = () => {
    const [inputValues, setInputValues] = React.useState(defaultValues);
    const [list, setList] = React.useState([]);
  
    const handleInputChange = (e: any) => {
      e.preventDefault();
      const {name, value} = e.target;
      setInputValues(prevValues => ({
          ...prevValues,
          [name]: value
        })
      );
    };
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const {value1, value2, value3} = inputValues;
      const newList = [...list, value1, value2, value3].sort();
      // @ts-ignore
      setList(newList);
      console.log(list.flat())
      setInputValues(defaultValues);
    };
    return (
        <Container>
            <Grid container spacing={3}>
                <h1>Hello from Contact</h1>
                <div style={{ marginTop: 100}}>
       <form onSubmit={handleSubmit}>
         <input type="text" name="value1" value={inputValues.value1} onChange={handleInputChange} /> <br />
         <input type="text" name="value2" value={inputValues.value2} onChange={handleInputChange} /> <br />
         <input type="text" name="value3" value={inputValues.value3} onChange={handleInputChange} /> <br />
         <button type="submit">Submit</button>
       </form>
      {list.length > 0 && 
        <ul>
          {
            list.map(item => <li> {item} </li>)
          }
        </ul>
      }
    </div>
            </Grid>
        </Container>
    );
};

export default Contact;