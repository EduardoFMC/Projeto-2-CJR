
import React, { useState , useEffect } from 'react';
import Tabu from './tabe.jsx';

let users = [
    {id:1, first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
    {id:2, first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",created_at:"27/07/2021"},
    {id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov",created_at:"10/06/2021"},
    {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
    {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"},
    {id:6,first_name:"Leslie",last_name:"Daile",email:"ldaile5@vimeo.com",created_at:"23/05/2021"},
    {id:7,first_name:"Byrann",last_name:"Slorance",email:"bslorance6@kickstarter.com",created_at:"15/05/2021"},
    {id:8,first_name:"My",last_name:"Swendell",email:"mswendell7@moonfruit.com",created_at:"15/12/2021"},
    {id:9,first_name:"Brier",last_name:"Esson",email:"besson8@usa.gov",created_at:"14/03/2021"},
    {id:10,first_name:"Seth",last_name:"Piddle",email:"spiddle9@nationalgeographic.com",created_at:"20/10/2021"},
    {id:11,first_name:"Fer",last_name:"Piddle",email:"ferspiddle9@nationalgeographic.com",created_at:"20/10/2022"},
  ]

export default function Tabelar(){

    // function onDeleteRow(e) {
    //     if (!e.target.classList.contains("btn2")) {
    //       return;
    //     }
    
    //     const btnc = e.target;
    //     btnc.closest("tr").remove();
    //   }
      
    // var table = document.querySelector("table")
    // table.addEventListener("click", onDeleteRow);
    
/* 
    useEffect(() => {
        table = document.querySelector("table")
        users.forEach((user) =>{
            var row = document.createElement("tr")
            var celula1 = document.createElement("td")
            var celula2 = document.createElement("td")
            var celula3 = document.createElement("td")
    
            var btn = document.createElement('input'); 
            btn.type = "button"; 
            btn.className = "btn";
            btn.value = "Editar";
    
            var btn2 = document.createElement('input'); 
            btn2.type = "button"; 
            btn2.className = "btn2";
            btn2.value = "Excluir";
    
            var id = user.id;
    
            celula1.textContent = user.first_name + user.last_name
            celula2.textContent = user.email
            celula3.textContent = user.created_at
            row.appendChild(celula1)
            row.appendChild(celula2)
            row.appendChild(celula3)
            row.appendChild(btn)
            row.appendChild(btn2)
            
        
            table.appendChild(row)
        })
            
      });
*/
    return (

        <div class="tabelad">
           
            <table>
                
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cadastrado em</th>
                        <th> </th> 
                        
                    </tr>
                </thead>
                
                {users.map((item) => (<Tabu name = {item.first_name} last_name = {item.last_name} 
                email = {item.email}
                cadastro = {item.created_at}/>))}
                

            </table>
                
        </div>
    );
}


