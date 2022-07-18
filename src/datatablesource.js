export const userColumns =[
    {field: "id", headerName: "ID", width:70},
    {
        field: "user",
        headerName:"User",
        width: 230,
        renderCell:(params) =>{
            return(
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt=""/>
                {params.row.username}
              </div>  
            );
        },
    },
    {
        field:"email",
        headerName:"Email",
        width:230,
    },
    {
        field:"age",
        headerName:"Age",
        width:100,
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows =[
    {
        id:1,
        username:"glad",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"1glad@gmail.com",
        age: 25,
    },
    {
        id:2,
        username:"gladys",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"pending",
        email:"2glad@gmail.com",
        age: 35,
    },
    {
        id:3,
        username:"gladys kul",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"3glad@gmail.com",
        age: 18,
    },
    {
        id:4,
        username:"gladys kulyenvu",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"passive",
        email:"4glad@gmail.com",
        age: 25,
    },
    {
        id:5,
        username:"gladys",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"5glad@gmail.com",
        age: 35,
    },
    {
        id:6,
        username:"glad",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"6glad@gmail.com",
        age: 25,
    },
    {
        id:7,
        username:"gladis",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"pending",
        email:"7glad@gmail.com",
        age: 15,
    },
    {
        id:8,
        username:"han",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"pending",
        email:"8glad@gmail.com",
        age: 5,
    },
    {
        id:9,
        username:"brian",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"passive",
        email:"9glad@gmail.com",
        age: 31,
    },
    {
        id:10,
        username:"leju",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"passive",
        email:"10glad@gmail.com",
        age: 45,
    },
];