const FormList = ({handleKeyUp,createItem,handleChange,value}) => {
  return (
    <div>
      <div className="d-flex">
        <input className="form-control" type="text" value={value} onKeyUp={handleKeyUp} onChange={handleChange}/>
        <button className='btn btn-success flex-shrink-0 ms-4' onClick={createItem}>Create</button>
      </div>
    </div>
  );
};

export default FormList;