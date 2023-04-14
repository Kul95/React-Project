function Array1(){
    const student=["Kuldeep","Anmol","Manmohan","Rachit","Shubham"];
    student.map((item)=>{
        console.warn("My name is :",item);
    });
    return(
        <div>
            <h1>Array objects</h1>
            {
                student.map((data)=><h1>Name is:{data}</h1>
            )}
        </div>
    )
}
export default Array1;