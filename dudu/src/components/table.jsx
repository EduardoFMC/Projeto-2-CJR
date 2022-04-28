import {useState} from 'react'

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




export default function Tabela(){
    const firstPage = users.slice(0, 5);
    const secondPage = users.slice(5, 10);
    const thirdPage = users[10];
    const [buttonPage, setButtonPage] = useState(1);
    let page = buttonPage;

    

    // const [buttonPage, setButtonPage] = useState(1);

    function mapUsers(arr) {
        return (
        arr.map((item) =>
        <tr id={item.id} key={item.id}>
            <td>{item.name} {item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.created_at}</td>
            <td><button className='edit-button'>editar</button></td>
            <td><button className='delete-button' onClick={() => {eraseUser(item.id)}}>excluir</button></td>
        </tr>)
        )
    }

    function eraseUser(id){
        users = users.filter(user => user.id !== id)
        document.getElementById(`${id}`).remove()
        // setPagination(page)
    }
    return (

        <div className="tabelad">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cadastrado em</th>
                        <th></th> 
                        
                    </tr>
                </thead>
                <tbody>
                    {buttonPage === 1 ? (
                        mapUsers(firstPage)
                        ): buttonPage === 2 ? (
                        mapUsers(secondPage)
                        ) : buttonPage && 3 ? (
                                <tr id={thirdPage.id} key={thirdPage.id}>
                                    <td>{thirdPage.name} {thirdPage.last_name}</td>
                                    <td>{thirdPage.email}</td>
                                    <td>{thirdPage.created_at}</td>
                                    <td><button className='edit-button'>editar</button></td>
                                    <td><button className='delete-button' onClick={() => {eraseUser(thirdPage.id)}}>excluir</button></td>
                                </tr>)
                         : <></>}
                    <div className='pagination-selectors'>
                        {page === 3 ? <button onClick={() => {setButtonPage(page += 1)}} disabled> {'>>>'} </button> : <button onClick={() => {setButtonPage(page += 1)}}> {'>>>'} </button>}
                        <button onClick={() => {setButtonPage(1)}}> 1 </button>
                        <button onClick={() => {setButtonPage(2)}}> 2 </button>
                        <button onClick={() => {setButtonPage(3)}}> 3 </button>
                        {page === 1 ? <button onClick={() => {setButtonPage(page -=1 )}} disabled> {'<<<'} </button> : <button onClick={() => {setButtonPage(page-=1)}}> {'<<<'} </button>}
                    </div>
                     
                </tbody>
            </table>
            
        </div>
    );
}


