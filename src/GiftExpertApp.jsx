import {useState} from 'react';
import { AddCategory, GiftGrid } from './components';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon ball']);

  const onAddCategory = (NewCategory) => {

    if ( categories.includes(NewCategory) ) return;

    // setCategories([...categories, NewCategory])
    setCategories([NewCategory, ...categories])
  }

  return (
    <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>



        <AddCategory 
          // onCategories={ setCategories }
          onNewCategory = { onAddCategory }
          CurrentCategories = { categories }

        />

        { 
          categories.map( (category) => (
                <GiftGrid 
                key={ category } 
                category = { category }/> 
              ))
        }


    </>
  )
}
