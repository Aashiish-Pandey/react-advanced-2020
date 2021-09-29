import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {

  const{id} = useParams()
  console.log(id)

  console.log(useParams())
  return ( 
    <div>
      <h2>person</h2>
    </div>
  );
};

export default Person;
